import { useEffect, useMemo, useRef, useState } from "react";
import q01 from "@/assets/quilts/quilt-01.png";
import q02 from "@/assets/quilts/quilt-02.png";
import q03 from "@/assets/quilts/quilt-03.png";
import q04 from "@/assets/quilts/quilt-04.png";
import q05 from "@/assets/quilts/quilt-05.png";
import q06 from "@/assets/quilts/quilt-06.png";
import q07 from "@/assets/quilts/quilt-07.png";
import q08 from "@/assets/quilts/quilt-08.png";
import q09 from "@/assets/quilts/quilt-09.png";
import q10 from "@/assets/quilts/quilt-10.png";
import q11 from "@/assets/quilts/quilt-11.png";
import q12 from "@/assets/quilts/quilt-12.png";
import q13 from "@/assets/quilts/quilt-13.png";
import q14 from "@/assets/quilts/quilt-14.png";
import q15 from "@/assets/quilts/quilt-15.png";
import q16 from "@/assets/quilts/quilt-16.png";
import q17 from "@/assets/quilts/quilt-17.png";
import q18 from "@/assets/quilts/quilt-18.png";
import q19 from "@/assets/quilts/quilt-19.png";
import q20 from "@/assets/quilts/quilt-20.png";

const QUILTS = [q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];

// Regular octagon clip-path
const OCTAGON_CLIP =
  "polygon(29.29% 0%, 70.71% 0%, 100% 29.29%, 100% 70.71%, 70.71% 100%, 29.29% 100%, 0% 70.71%, 0% 29.29%)";

const Kaleidoscope = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [fading, setFading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    dragging: boolean;
    startAngle: number;
    startRotation: number;
    totalDelta: number;
    pointerId: number | null;
  }>({
    dragging: false,
    startAngle: 0,
    startRotation: 0,
    totalDelta: 0,
    pointerId: null,
  });

  const pickNextIndex = (current: number) => {
    if (QUILTS.length <= 1) return current;
    let n = Math.floor(Math.random() * QUILTS.length);
    if (n === current) n = (n + 1) % QUILTS.length;
    return n;
  };

  const triggerSpin = (deltaDeg: number) => {
    // Snap rotation to nearest 45° for octagon symmetry, plus a little extra spin
    const extra = deltaDeg >= 0 ? 90 : -90;
    const target = Math.round((rotation + deltaDeg + extra) / 45) * 45;
    setRotation(target);

    const next = pickNextIndex(index);
    setNextIndex(next);
    // Start fade slightly into the rotation
    window.setTimeout(() => setFading(true), 120);
    window.setTimeout(() => {
      setIndex(next);
      setNextIndex(null);
      setFading(false);
    }, 650);
  };

  const getAngle = (clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragState.current = {
      dragging: true,
      startAngle: getAngle(e.clientX, e.clientY),
      startRotation: rotation,
      totalDelta: 0,
      pointerId: e.pointerId,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = dragState.current;
    if (!s.dragging) return;
    const angle = getAngle(e.clientX, e.clientY);
    let delta = angle - s.startAngle;
    // normalize
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    s.totalDelta = delta;
    setRotation(s.startRotation + delta);
  };

  const endDrag = (e: React.PointerEvent) => {
    const s = dragState.current;
    if (!s.dragging) return;
    s.dragging = false;
    const delta = s.totalDelta;
    // Treat any meaningful drag as a spin; small drags also count as a "click spin"
    triggerSpin(delta);
  };

  // Click (no drag) → spin
  const onClick = () => {
    if (Math.abs(dragState.current.totalDelta) > 4) return; // drag handled it
    triggerSpin(0);
  };

  // Keyboard accessibility
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerSpin(0);
    }
  };

  const ringSize = useMemo(() => "min(80vw, 32rem)", []);

  return (
    <div className="flex flex-col items-center select-none">
      {/* Outer decorative ring */}
      <div
        className="relative"
        style={{ width: ringSize, height: ringSize }}
      >
        {/* Color ring backdrop */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--kona-pomegranate)), hsl(var(--kona-orange)), hsl(var(--kona-chartreuse)), hsl(var(--kona-capri)), hsl(var(--kona-pomegranate)))",
            filter: "blur(2px)",
            opacity: 0.95,
          }}
          aria-hidden
        />
        {/* Inner white padding */}
        <div className="absolute inset-3 rounded-full bg-kona-white shadow-pop" aria-hidden />

        {/* The octagon viewport */}
        <div
          ref={containerRef}
          role="button"
          tabIndex={0}
          aria-label="Kaleidoscope: drag or click to reveal a new quilt design"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClick={onClick}
          onKeyDown={onKeyDown}
          className="absolute inset-6 cursor-grab active:cursor-grabbing touch-none focus:outline-none focus-visible:ring-4 focus-visible:ring-kona-capri-deep rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: dragState.current.dragging
              ? "none"
              : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
            clipPath: OCTAGON_CLIP,
            WebkitClipPath: OCTAGON_CLIP,
            background: "hsl(var(--charcoal))",
          }}
        >
          {/* Current image (counter-rotates so design stays upright? — keep rotating for kaleidoscope feel) */}
          <img
            src={QUILTS[index]}
            alt="Quilt design"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 0.45s ease",
            }}
          />
          {nextIndex !== null && (
            <img
              src={QUILTS[nextIndex]}
              alt=""
              draggable={false}
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                opacity: fading ? 1 : 0,
                transition: "opacity 0.45s ease",
              }}
            />
          )}
        </div>
      </div>

      <p className="mt-6 text-sm md:text-base font-semibold text-charcoal/70">
        ✨ Drag or click the kaleidoscope to reveal a new design
      </p>
    </div>
  );
};

export default Kaleidoscope;
