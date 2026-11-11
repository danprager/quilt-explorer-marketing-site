import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useSearchParams } from "react-router-dom";
import { Check, Download, ShoppingCart } from "lucide-react";
import Navbar from "@/components/qe/Navbar";
import QEButton from "@/components/qe/QEButton";
import { findShopItem } from "@/data/shop";
import { DownloadFile, fetchShopDownloads, startShopCheckout } from "@/lib/checkout";
import NotFound from "./NotFound";

const PurchaseComplete = ({ sessionId }: { sessionId: string }) => {
  const [files, setFiles] = useState<DownloadFile[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchShopDownloads(sessionId).then(setFiles, (e: Error) => setError(e.message));
  }, [sessionId]);

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 border-2 border-kona-chartreuse">
      <h2 className="text-2xl font-bold text-kona-pomegranate">Thank you for your purchase!</h2>
      <p className="mt-2 text-charcoal/85">
        We've also emailed both PDFs to you. Download the paper size you print on:
      </p>
      {files && (
        <div className="mt-4 flex flex-wrap gap-3">
          {files.map((f) => (
            <a key={f.url} href={f.url} download>
              <QEButton size="md">
                <Download className="mr-2 h-4 w-4" />
                {f.label}
              </QEButton>
            </a>
          ))}
        </div>
      )}
      {!files && !error && <p className="mt-4 text-charcoal/60">Preparing your download…</p>}
      {error && (
        <p className="mt-4 text-charcoal/85">
          We couldn't fetch your download just now ({error}). Your email has both PDFs, or{" "}
          <a href="/contact" className="underline font-semibold">contact us</a> and we'll sort it out.
        </p>
      )}
    </div>
  );
};

const ShopItemPage = () => {
  const { slug } = useParams();
  const [search] = useSearchParams();
  const item = findShopItem(slug);
  const [hero, setHero] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!item) return <NotFound />;

  const status = search.get("status");
  const sessionId = search.get("session_id");

  const buy = async () => {
    setBusy(true);
    setError(null);
    try {
      window.location.href = await startShopCheckout(item.slug);
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{item.title} pattern by {item.designer} — Quilt Explorer Shop</title>
        <meta name="description" content={`${item.summary} PDF pattern in US Letter and A4.`} />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-12 md:py-20">
          <a href="/shop" className="text-sm font-semibold text-charcoal/70 hover:text-kona-pomegranate">
            ← Shop
          </a>

          <div className="mt-6 grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Gallery */}
            <div>
              <img
                src={item.images[hero].src}
                alt={item.images[hero].alt}
                className="w-full rounded-xl shadow-soft object-contain bg-white max-h-[80vh]"
              />
              <div className="mt-3 grid grid-cols-4 gap-3">
                {item.images.map((im, i) => (
                  <button
                    key={im.src}
                    type="button"
                    onClick={() => setHero(i)}
                    aria-label={`Show ${im.alt}`}
                    className={`aspect-square overflow-hidden rounded-lg border-2 ${
                      i === hero ? "border-kona-pomegranate" : "border-transparent"
                    }`}
                  >
                    <img src={im.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Buy box */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate">{item.title}</h1>
              <p className="mt-3 text-lg font-semibold text-charcoal">A quilt pattern by {item.designer}</p>
              <p className="text-charcoal/75">featuring {item.collection}</p>

              <div className="mt-6">
                {status === "success" && sessionId ? (
                  <PurchaseComplete sessionId={sessionId} />
                ) : (
                  <div className="bg-white rounded-xl shadow-soft p-6">
                    <p className="text-3xl font-extrabold text-charcoal">{item.price}</p>
                    <p className="mt-1 text-charcoal/75">Instant PDF download · US Letter and A4 both included</p>
                    <QEButton className="mt-5 w-full" onClick={buy} disabled={busy}>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {busy ? "Opening checkout…" : "Buy pattern"}
                    </QEButton>
                    {status === "cancelled" && (
                      <p className="mt-3 text-sm text-charcoal/70">Checkout cancelled: you haven't been charged.</p>
                    )}
                    {error && <p className="mt-3 text-sm text-kona-pomegranate">{error}</p>}
                    <p className="mt-3 text-xs text-charcoal/60">Secure payment by Stripe. Promo codes accepted.</p>
                  </div>
                )}
              </div>

              <h2 className="mt-8 text-xl font-bold text-kona-pomegranate">What's in the pattern</h2>
              <ul className="mt-3 space-y-2">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-2 text-charcoal/85">
                    <Check className="h-5 w-5 shrink-0 text-kona-capri-deep mt-0.5" />
                    {line}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-xl font-bold text-kona-pomegranate">Details</h2>
              <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-charcoal/85">
                {item.details.map((d) => (
                  <div key={d.label} className="contents">
                    <dt className="font-semibold text-charcoal">{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Designer's note */}
          <article className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-kona-pomegranate">From the pattern designer</h2>
            {item.blurb.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-lg text-charcoal/85">{p}</p>
            ))}
            <p className="mt-4 text-lg font-semibold text-charcoal">— {item.designer}</p>
          </article>

          {item.otherDesigns && (
            <div className="mt-16 max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-kona-pomegranate text-center">
                Four more ways with the same bundle
              </h2>
              <p className="mt-3 text-center text-charcoal/85">
                Included in the pattern as inspiration. Make your own in{" "}
                <a href="https://app.quiltexplorer.com" className="underline font-semibold">Quilt Explorer</a>.
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.otherDesigns.map((d) => (
                  <img key={d.src} src={d.src} alt={d.alt} className="w-full rounded-lg shadow-soft" loading="lazy" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopItemPage;
