import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface QEButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "action" | "outline";
  size?: "lg" | "md";
  asChild?: boolean;
}

const QEButton = forwardRef<HTMLButtonElement, QEButtonProps>(
  ({ className, variant = "action", size = "lg", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variant === "action" &&
            "bg-kona-orange text-white shadow-pop hover:scale-105 hover:brightness-110 active:scale-100",
          variant === "outline" &&
            "border-2 border-kona-pomegranate text-kona-pomegranate hover:bg-kona-pomegranate hover:text-white",
          size === "lg" && "px-8 py-4 text-lg",
          size === "md" && "px-5 py-2.5 text-base",
          className,
        )}
        {...props}
      />
    );
  },
);
QEButton.displayName = "QEButton";

export default QEButton;
