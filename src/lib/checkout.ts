// Stripe Checkout for Shop patterns, through the Quilt Explorer API (the server the app uses).
// Spec: quilt-explorer docs/features/backend/order-fulfillment.md § Shop patterns.
//   POST ?action=create-shop-checkout&pattern=<slug>  -> { checkout_url }
//        Stripe returns the buyer to /shop/<slug>?status=success&session_id=… (the
//        server's SHOP_BASE_URL; never taken from this request).
//   GET  ?action=shop-download&session_id=<id>        -> { files: [{ label, paper, url }] }
//        once Stripe reports the session paid. The webhook also emails both PDFs.

const API_BASE =
  import.meta.env.VITE_QE_API_BASE ??
  (window.location.hostname === "localhost" ? "http://localhost:8080" : "https://app.quiltexplorer.com");

export async function startShopCheckout(slug: string): Promise<string> {
  const qs = new URLSearchParams({ action: "create-shop-checkout", pattern: slug });
  const res = await fetch(`${API_BASE}/?${qs}`, { method: "POST" });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.checkout_url) throw new Error(body.error ?? `Checkout failed (${res.status})`);
  return body.checkout_url as string;
}

export type DownloadFile = { label: string; paper: string; url: string };

export async function fetchShopDownloads(sessionId: string): Promise<DownloadFile[]> {
  const qs = new URLSearchParams({ action: "shop-download", session_id: sessionId });
  const res = await fetch(`${API_BASE}/?${qs}`);
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !Array.isArray(body.files)) throw new Error(body.error ?? `Download not ready (${res.status})`);
  return body.files as DownloadFile[];
}
