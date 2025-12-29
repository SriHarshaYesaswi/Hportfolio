import React, { useEffect, useRef, useState } from "react";

// Rotating triangular custom cursor
// - Follows the mouse position
// - Rotates to face the movement direction
// - Uses requestAnimationFrame for smooth motion

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const CustomCursor = () => {
	const ref = useRef(null);
	const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
	const lastPos = useRef({ x: pos.current.x, y: pos.current.y });
	const vel = useRef({ x: 0, y: 0 });
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		let active = true;
		let raf = null;

		const onMove = (e) => {
			pos.current.x = e.clientX;
			pos.current.y = e.clientY;
			setVisible(true);
		};

		const onLeave = () => setVisible(false);

		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseenter", onMove);
		window.addEventListener("mouseleave", onLeave);

		const render = () => {
			if (!active) return;
			const node = ref.current;
			if (node) {
				// smooth following
				const lerp = 0.18;
				lastPos.current.x += (pos.current.x - lastPos.current.x) * lerp;
				lastPos.current.y += (pos.current.y - lastPos.current.y) * lerp;

				// velocity (movement vector)
				vel.current.x = lastPos.current.x - (vel.current._px || lastPos.current.x);
				vel.current.y = lastPos.current.y - (vel.current._py || lastPos.current.y);
				vel.current._px = lastPos.current.x;
				vel.current._py = lastPos.current.y;

				// angle in degrees (face direction of movement)
				const angle = Math.atan2(vel.current.y, vel.current.x) * (180 / Math.PI);

				// reduce jitter when almost stationary
				const speed = Math.hypot(vel.current.x, vel.current.y);
				const displayAngle = speed > 0.6 ? angle : 0;

				// position & rotation
				node.style.transform = `translate3d(${lastPos.current.x - 12}px, ${lastPos.current.y - 12}px, 0) rotate(${displayAngle}deg)`;
				node.style.opacity = visible ? "1" : "0";
			}
			raf = requestAnimationFrame(render);
		};

		raf = requestAnimationFrame(render);

		return () => {
			active = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseenter", onMove);
			window.removeEventListener("mouseleave", onLeave);
		};
	}, [visible]);

	return (
		<div
			ref={ref}
			aria-hidden
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				pointerEvents: "none",
				width: 24,
				height: 24,
				transform: "translate3d(-50%, -50%, 0)",
				transition: "opacity 160ms linear, transform 100ms linear",
				zIndex: 9999,
			}}
			className="custom-cursor"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2 L22 12 L2 22 Z" fill="rgba(255,255,255,0.95)" stroke="rgba(145,94,255,0.95)" strokeWidth="0.8" />
			</svg>
		</div>
	);
};

export default CustomCursor;
