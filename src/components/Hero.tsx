import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="crosshair tl" />
      <div className="crosshair tr" />
      <div className="crosshair bl" />
      <div className="crosshair br" />

      <div className="meta reveal" style={{ "--d": "200ms" } as React.CSSProperties}>
        <div className="eyebrow">Folio № 014 · Issued MMXXVI</div>
        <div className="index-num serif">№ 01</div>
        <div className="eyebrow" style={{ color: "var(--muted)" }}>
          Anime&nbsp;Illustrator&nbsp;·&nbsp;Fanart&nbsp;·&nbsp;Character&nbsp;Design
        </div>
      </div>

      <div className="title reveal" style={{ "--d": "400ms" } as React.CSSProperties}>
        <h1>
          <span className="brand">Athaum</span>
          <br />
          <span className="stroke">paints</span> the
          <br />
          characters you carry.
        </h1>
      </div>

      <div className="lede reveal" style={{ "--d": "700ms" } as React.CSSProperties}>
        <p>
          Digital anime &amp; manga illustration. Painterly character
          portraits, fanart of the worlds I keep returning to — Genshin,
          Honkai, Jujutsu Kaisen, Demon Slayer, Spy&nbsp;×&nbsp;Family — and
          the original characters who refuse to leave my sketchbook.
          Commissions open.
        </p>
        <div className="stamp">Studio Open · Commissions worldwide</div>
      </div>

      <div className="feature reveal" style={{ "--d": "900ms" } as React.CSSProperties}>
        <div className="tag">Cover&nbsp;·&nbsp;Plate I</div>
        <div className="frame">
          <Image
            src="/images/ml-senya.jpg"
            alt="Senya — silver-haired warrior wreathed in fire and chains, by Athaum"
            fill
            sizes="(max-width:1100px) 100vw, 50vw"
            priority
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="caption">
          «&nbsp;Senya — Master of Light&nbsp;» — digital painting, 2024
        </div>
        <div className="scribble">/ pl. 00 — original character, fire &amp; chains</div>
      </div>
    </section>
  );
}
