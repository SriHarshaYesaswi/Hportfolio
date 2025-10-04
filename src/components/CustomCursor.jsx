import { useEffect, useRef } from "react";

const CustomCursor = ({ color = "#915eff" }) => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

  // do not change native cursor here
  const prevCursor = null;

    let rafId;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // immediate position for the dot
      dot.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`;
    };

    const render = () => {
      // ring lags behind
      const rx = parseFloat(ring.dataset.x || 0);
      const ry = parseFloat(ring.dataset.y || 0);
      const dx = mouse.current.x - rx;
      const dy = mouse.current.y - ry;
      const nx = rx + dx * 0.15;
      const ny = ry + dy * 0.15;
      ring.style.transform = `translate3d(${nx - 18}px, ${ny - 18}px, 0)`;
      ring.dataset.x = nx;
      ring.dataset.y = ny;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(render);

    // show click animation
    const onDown = () => {
      dot.classList.add("cursor-click");
      ring.classList.add("cursor-click-ring");
    };
    const onUp = () => {
      dot.classList.remove("cursor-click");
      ring.classList.remove("cursor-click-ring");
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
  // no-op: do not restore cursor here
    };
  }, [color]);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
        style={{ backgroundColor: color }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        data-x="0"
        data-y="0"
        aria-hidden="true"
        style={{ borderColor: color }}
      />
    </>
  );
};

export default CustomCursor;
