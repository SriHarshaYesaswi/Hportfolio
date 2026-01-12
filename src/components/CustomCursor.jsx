import React, { useEffect, useRef, useState } from "react";

// Rotating triangular custom cursor
// - Follows the mouse position
// - Rotates to face the movement direction
// - Uses requestAnimationFrame for smooth motion

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));


const CustomCursor = () => {
	const ref = useRef(null);
	const pos = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 });
	const lastPos = useRef({ x: pos.current.x, y: pos.current.y });
	const vel = useRef({ x: 0, y: 0 });
	const lastAngle = useRef(0);
	const clickScale = useRef(1);
	const rippleProg = useRef(0);
	const rippleRef = useRef(null);
	const sizeRef = useRef(24);
	const [visible, setVisible] = useState(true);
	const [isDesktop, setIsDesktop] = useState(() => {
		if (typeof window === "undefined" || !window.matchMedia) return false;
		return window.matchMedia('(pointer: fine) and (hover: hover)').matches;
	});

	useEffect(() => {
		// media query watcher for desktop detection
		if (typeof window === "undefined" || !window.matchMedia) return;
		const mq = window.matchMedia('(pointer: fine) and (hover: hover)');
		const mqHandler = (e) => setIsDesktop(e.matches);
		if (mq.addEventListener) mq.addEventListener('change', mqHandler);
		else mq.addListener(mqHandler);
		return () => {
			if (mq.removeEventListener) mq.removeEventListener('change', mqHandler);
			else mq.removeListener(mqHandler);
		};
	}, []);

	// responsive cursor sizing based on viewport width
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const updateSize = () => {
			// 2% of viewport width, clamped between 16 and 40
			sizeRef.current = clamp(window.innerWidth * 0.02, 16, 40);
		};
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	useEffect(() => {
		if (!isDesktop) return undefined;
		let active = true;
		let raf = null;

		const onMove = (e) => {
			pos.current.x = e.clientX;
			pos.current.y = e.clientY;
			// hide cursor when over interactive elements (inputs, buttons, links, editable areas)
			let hide = false;
			try {
				const el = e.target && (e.target.nodeType === 1 ? e.target : e.target.parentElement);
				if (el && el.closest) {
					hide = !!el.closest('a, button, input, textarea, select, [contenteditable]');
				}
			} catch (err) {
				hide = false;
			}
			setVisible(!hide);
		};

		const onLeave = () => setVisible(false);

		const onDown = () => {
			clickScale.current = 0.82;
			rippleProg.current = 1; // start ripple (1 -> 0)
		};

		const onUp = () => {
			// let render loop lerp it back to 1
		};

		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseenter", onMove);
		window.addEventListener("mouseleave", onLeave);
		window.addEventListener('mousedown', onDown);
		window.addEventListener('mouseup', onUp);

		const render = () => {
			if (!active) return;
			const node = ref.current;
			if (node) {
				const s = sizeRef.current;
				// ensure container size follows responsive value
				node.style.width = `${s}px`;
				node.style.height = `${s}px`;
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

				// reduce jitter when almost stationary — preserve last angle when stopped
				const speed = Math.hypot(vel.current.x, vel.current.y);
				if (speed > 0.6) {
					lastAngle.current = angle;
				}
				const displayAngle = lastAngle.current;

				// click scale lerp back to 1 for a small pulse animation
				clickScale.current += (1 - clickScale.current) * 0.25;

				// position, rotation & scale (offset by half size)
				node.style.transform = `translate3d(${lastPos.current.x - s / 2}px, ${lastPos.current.y - s / 2}px, 0) rotate(${displayAngle}deg) scale(${clickScale.current})`;
				node.style.opacity = visible ? "1" : "0";

				// ripple animation (progress 1 -> 0)
				const rNode = rippleRef.current;
				if (rippleProg.current > 0) {
					rippleProg.current -= 0.06;
					if (rippleProg.current < 0) rippleProg.current = 0;
					const rSizeBase = sizeRef.current * 2;
					// incoming/shrinking animation: start larger and shrink toward pointer
					const rScale = 2.8 - t * 2.2; // 2.8 -> 0.6
					const rOpacity = clamp(rippleProg.current, 0, 1);
					if (rNode) {
						rNode.style.transform = `translate(-50%,-50%) scale(${rScale})`;
						rNode.style.opacity = rOpacity;
						rNode.style.width = `${rSizeBase}px`;
						rNode.style.height = `${rSizeBase}px`;
					}
				} else if (rNode) {
					rNode.style.opacity = 0;
				}
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
			window.removeEventListener('mousedown', onDown);
			window.removeEventListener('mouseup', onUp);
		};
	}, [visible, isDesktop]);

	if (!isDesktop) return null;

	return (
		<div
			ref={ref}
			aria-hidden
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				pointerEvents: "none",
				// size is set dynamically in the RAF loop for responsiveness
				transform: "translate3d(-50%, -50%, 0)",
				transition: "opacity 160ms linear, transform 100ms linear",
				zIndex: 9999,
			}}
			className="custom-cursor"
		>
			<div
				ref={rippleRef}
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					width: 48,
					height: 48,
					borderRadius: '50%',
					border: '2px solid rgba(145,94,255,0.95)',
					transform: 'translate(-50%,-50%) scale(0.6)',
					opacity: 0,
					pointerEvents: 'none',
				}}
				className="cursor-ripple"
			/>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2 L22 12 L2 22 Z" fill="rgba(255,255,255,0.95)" stroke="rgba(145,94,255,0.95)" strokeWidth="0.8" />
			</svg>
		</div>
	);
};

export default CustomCursor;
