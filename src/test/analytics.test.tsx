import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PosthogPageview } from "@/components/PosthogPageview";

// Drives programmatic navigation from inside the same router instance.
function NavigateTo({ path }: { path: string }) {
  const navigate = useNavigate();
  useEffect(() => { navigate(path); }, [path]);
  return null;
}

function TestApp({ navigateTo }: { navigateTo?: string }) {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <PosthogPageview />
      {navigateTo && <NavigateTo path={navigateTo} />}
    </MemoryRouter>
  );
}

describe("PosthogPageview", () => {
  let capture: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    capture = vi.fn();
    (window as unknown as Record<string, unknown>).posthog = { capture };
  });

  afterEach(() => {
    delete (window as unknown as Record<string, unknown>).posthog;
  });

  it("fires $pageview with the current path on mount", () => {
    render(
      <MemoryRouter initialEntries={["/tutorials/hsts"]}>
        <PosthogPageview />
      </MemoryRouter>
    );
    expect(capture).toHaveBeenCalledWith("$pageview", { path: "/tutorials/hsts" });
  });

  it("fires $pageview again when the route changes", () => {
    const { rerender } = render(<TestApp />);
    expect(capture).toHaveBeenCalledWith("$pageview", { path: "/" });

    rerender(<TestApp navigateTo="/faq" />);
    expect(capture).toHaveBeenCalledWith("$pageview", { path: "/faq" });
    expect(capture).toHaveBeenCalledTimes(2);
  });

  it("does not throw when posthog is not loaded", () => {
    delete (window as unknown as Record<string, unknown>).posthog;
    expect(() =>
      render(
        <MemoryRouter initialEntries={["/"]}>
          <PosthogPageview />
        </MemoryRouter>
      )
    ).not.toThrow();
  });
});
