"use client";

import { useEffect, useRef } from "react";

export default function ClientEffects() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /* ─── Custom cursor — 1:1 tracking, no easing ─────── */
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      // direct positioning, GPU-accelerated transform
      cursor.style.transform = `translate3d(${e.clientX - 4}px,${e.clientY - 4}px,0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // hover targets toggle the larger ring state
    const hoverSelector =
      "a, .work, .index-strip .item, .marquee, .feature";
    const addRing = () => cursor.classList.add("ring");
    const removeRing = () => cursor.classList.remove("ring");
    const hovers = Array.from(
      document.querySelectorAll<HTMLElement>(hoverSelector)
    );
    hovers.forEach((el) => {
      el.addEventListener("mouseenter", addRing);
      el.addEventListener("mouseleave", removeRing);
    });

    /* ─── Reveal-on-scroll ────────────────────────────── */
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    let io: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach((el) => io!.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    /* ─── Hero parallax (disabled in contain mode) ────── */
    // The hero image uses object-fit:contain so the full painting is visible;
    // applying a scale + translateY would re-crop it. The onScroll noop keeps
    // the listener slot wired in case we add a different scroll effect later.
    const onScroll = () => {};

    /* ─── Drag-to-scroll on index strip ───────────────── */
    const scroller = document.querySelector<HTMLElement>(
      "[data-drag-scroll]"
    );
    let isDown = false,
      startX = 0,
      scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      if (!scroller) return;
      isDown = true;
      startX = e.pageX - scroller.offsetLeft;
      scrollLeft = scroller.scrollLeft;
      scroller.style.cursor = "grabbing";
    };
    const stop = () => {
      isDown = false;
      if (scroller) scroller.style.cursor = "";
    };
    const onDrag = (e: MouseEvent) => {
      if (!isDown || !scroller) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      scroller.scrollLeft = scrollLeft - (x - startX) * 1.4;
    };

    if (scroller) {
      scroller.addEventListener("mousedown", onDown);
      scroller.addEventListener("mouseleave", stop);
      scroller.addEventListener("mouseup", stop);
      scroller.addEventListener("mousemove", onDrag);
    }

    /* ─── Cleanup ─────────────────────────────────────── */
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      hovers.forEach((el) => {
        el.removeEventListener("mouseenter", addRing);
        el.removeEventListener("mouseleave", removeRing);
      });
      io?.disconnect();
      if (scroller) {
        scroller.removeEventListener("mousedown", onDown);
        scroller.removeEventListener("mouseleave", stop);
        scroller.removeEventListener("mouseup", stop);
        scroller.removeEventListener("mousemove", onDrag);
      }
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
}
