import Image from "next/image";
import { works, type WorkRecord } from "@/data/works";

function Work({ w, delay = 0 }: { w: WorkRecord; delay?: number }) {
  return (
    <figure
      className={`work ${w.size} reveal`}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      <span className="num">{w.num}</span>
      <div className="image">
        <Image
          src={w.src}
          alt={w.alt}
          fill
          sizes="(max-width:1100px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <figcaption className="info">
        <span className="title">
          {w.titleLead}
          <em>{w.titleEm}</em>
          {w.titleTrail}
        </span>
        <span className="meta">{w.meta}</span>
      </figcaption>
    </figure>
  );
}

export default function WorksGrid() {
  // delays per row roughly match the original markup
  const rowDelays = [0, 150, 0, 150, 0, 120, 240, 0, 0, 120, 240, 0, 150];

  return (
    <>
      <div className="section-head" id="works">
        <span className="num">№ 03</span>
        <h2>
          Selected <em>works</em>
        </h2>
        <div className="meta-right">
          Folio IV / Plates I–XIII
          <b>17 entries · 2018–2026</b>
        </div>
      </div>

      <section className="works">
        {/* Row 1 */}
        <Work w={works[0]} delay={rowDelays[0]} />
        <Work w={works[1]} delay={rowDelays[1]} />

        {/* Row 2 */}
        <Work w={works[2]} delay={rowDelays[2]} />
        <Work w={works[3]} delay={rowDelays[3]} />

        {/* Pull quote */}
        <div className="pull-quote reveal">
          “I draw the same characters again and again.{" "}
          <em>Each time, they look a little more like themselves.</em>”
        </div>

        {/* Row 3 — Rengoku, Maquia, note-card */}
        <Work w={works[4]} delay={rowDelays[4]} />
        <Work w={works[5]} delay={rowDelays[5]} />
        <div
          className="note-card reveal"
          style={{ "--d": "240ms" } as React.CSSProperties}
        >
          <div>
            <div className="eyebrow">Plate Note · VII</div>
            <h4>
              On <em>fanart</em> — and the right to redraw the characters you
              love.
            </h4>
          </div>
          <p>
            A short essay on why I keep coming back to the same handful of
            characters, what copying teaches, and how a fan drawing becomes
            something honest. Coming with the next folio.
          </p>
          <a href="#" className="arrow">
            Read soon&nbsp;&nbsp;→
          </a>
        </div>

        {/* Row 4 — full bleed */}
        <Work w={works[6]} delay={0} />

        {/* Row 5 — Mona, Ganyu, Kanata cinnamon */}
        <Work w={works[7]} delay={0} />
        <Work w={works[8]} delay={120} />
        <Work w={works[9]} delay={240} />

        {/* Row 6 — Yae×Raiden + Camille */}
        <Work w={works[10]} delay={0} />
        <Work w={works[11]} delay={150} />
      </section>
    </>
  );
}
