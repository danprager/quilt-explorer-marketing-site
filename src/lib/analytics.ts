type PostHog = {
  capture: (event: string, properties?: Record<string, unknown>) => void;
};

function posthog(): PostHog | undefined {
  return (window as unknown as Record<string, unknown>).posthog as PostHog | undefined;
}

export function trackPageview(path: string): void {
  posthog()?.capture("$pageview", { path });
}
