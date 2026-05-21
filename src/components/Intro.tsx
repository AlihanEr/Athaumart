"use client";

import { useEffect, useState } from "react";

/** Each frame swaps the wordmark to a different typographic interpretation.
 *  The final frame is Marcellus — closest to Athaum's hand-drawn signature.
 */
interface Frame {
  text: string;
  font: string;
  weight: number;
  italic?: boolean;
  letterSpacing?: string;
  fvs?: string; // font-variation-settings (for Fraunces axes)
  label: string;
}

const FRAMES: Frame[] = [
  {
    text: "Athaum",
    font: '"Caveat", cursive',
    weight: 600,
    letterSpacing: "-.01em",
    label: "01 · Caveat — handwriting",
  },
  {
    text: "ATHAUM",
    font: '"Geist Mono", ui-monospace, monospace',
    weight: 400,
    letterSpacing: ".06em",
    label: "02 · Geist Mono — terminal",
  },
  {
    text: "Athaum",
    font: '"Fraunces", serif',
    weight: 300,
    italic: true,
    letterSpacing: "-.03em",
    fvs: '"opsz" 144, "SOFT" 100, "WONK" 1',
    label: "03 · Fraunces — wonky soft",
  },
  {
    text: "アタウム",
    font: '"Noto Serif JP", serif',
    weight: 500,
    letterSpacing: ".08em",
    label: "04 · Noto Serif JP — 片仮名",
  },
  {
    text: "Athaum",
    font: '"Cormorant Garamond", serif',
    weight: 400,
    italic: true,
    letterSpacing: "-.01em",
    label: "05 · Cormorant — italic garamond",
  },
  {
    text: "ATHAUM",
    font: '"Cinzel", serif',
    weight: 600,
    letterSpacing: ".08em",
    label: "06 · Cinzel — roman capitals",
  },
  // ─── final frame: Athaum's signature ──────────────────
  {
    text: "A T H A U M",
    font: '"Marcellus", serif',
    weight: 400,
    letterSpacing: ".18em",
    label: "07 · Marcellus — the signature",
  },
];

const STEP_MS = 220;
const SETTLE_MS = 850;
const FADE_MS = 600;

export default function Intro() {
  const [i, setI] = useState(0);
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  // Honor reduced-motion: skip straight to the final settled frame, then fade.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setI(FRAMES.length - 1);
      const t1 = setTimeout(() => setGone(true), 600);
      const t2 = setTimeout(() => setRemoved(true), 600 + FADE_MS);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, []);

  // Cycle through frames, then settle on the final one, then fade.
  useEffect(() => {
    if (removed) return;
    let t: ReturnType<typeof setTimeout>;
    if (i < FRAMES.length - 1) {
      t = setTimeout(() => setI(i + 1), STEP_MS);
    } else {
      // We reached the signature frame — hold it, then fade.
      t = setTimeout(() => setGone(true), SETTLE_MS);
    }
    return () => clearTimeout(t);
  }, [i, removed]);

  // Once the fade completes, drop the element so it can't trap focus.
  useEffect(() => {
    if (!gone) return;
    const t = setTimeout(() => setRemoved(true), FADE_MS);
    return () => clearTimeout(t);
  }, [gone]);

  if (removed) return null;

  const f = FRAMES[i];
  const isFinal = i === FRAMES.length - 1;
  const progress = Math.round(((i + 1) / FRAMES.length) * 100);

  const classes = [
    "intro",
    gone && "intro--gone",
    isFinal && "intro--settled",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <div className="intro-stage">
        <div
          className="intro-word"
          style={{
            fontFamily: f.font,
            fontWeight: f.weight,
            fontStyle: f.italic ? "italic" : "normal",
            letterSpacing: f.letterSpacing,
            fontVariationSettings: f.fvs,
          }}
        >
          {f.text}
        </div>
      </div>

      <div className="intro-meta">
        <span className="intro-label">{f.label}</span>
        <span className="intro-progress">
          {String(progress).padStart(2, "0")}%
        </span>
      </div>

      <div
        className="intro-bar"
        style={{ transform: `scaleX(${(i + 1) / FRAMES.length})` }}
      />
    </div>
  );
}
