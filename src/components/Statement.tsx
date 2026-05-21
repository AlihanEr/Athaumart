export default function Statement() {
  return (
    <section className="statement">
      <div className="left reveal">
        <div className="eyebrow">Index 002 — Statement</div>
        <h3>
          I paint the
          <br />
          <em>characters</em>
          <br />
          who <span className="dim">won&apos;t leave.</span>
        </h3>
      </div>
      <div className="right reveal" style={{ "--d": "200ms" } as React.CSSProperties}>
        <p>
          The plates collected here orbit the same preoccupation: characters
          from anime, games, and my own notebook — Yor, Yuta, Ganyu, Camille,
          Sailor Moon, and my originals Kanata and Senya — drawn carefully, in
          many layers, with a slow brush. Some are commissions. Most are
          letters to characters I have loved enough to redraw, then redraw
          again.
        </p>
        <p>
          The toolkit is small: Clip Studio, Photoshop, a Wacom, and time.
          Light is borrowed from old animation cels, from manga I read as a
          child, from screenshots paused at the exact wrong second. There is
          no manifesto. Only an attention.
        </p>
        <div className="signature">
          — <span className="brand">Athaum</span>
          <small>アタウム · drawing since 2017</small>
        </div>
      </div>
    </section>
  );
}
