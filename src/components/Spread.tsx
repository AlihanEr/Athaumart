export default function Spread() {
  return (
    <section className="spread" id="process">
      <div className="image-wrap reveal">
        <div className="stamp">Timelapse · 01</div>
        <div className="ratio">
          <video
            className="process-video"
            src="/images/kanata-process.mp4"
            poster="/images/kanata-sky.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Process timelapse of the Kanata · sky illustration"
          />
          <div className="play-badge" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="10" height="10">
              <polygon points="2,1 11,6 2,11" fill="currentColor" />
            </svg>
            <span>Painting in motion</span>
          </div>
        </div>
        <div className="frame-caption">
          «&nbsp;Kanata · sky&nbsp;» — original character, sketch → finish in 42&nbsp;s
        </div>
      </div>
      <div
        className="text reveal"
        style={{ "--d": "200ms" } as React.CSSProperties}
      >
        <div className="eyebrow">Index 004 — Process</div>
        <h3>
          Sketch, <em>flats, light,</em> then the slow part.
        </h3>
        <p>
          Each commission starts with a chat about the character — pose, mood,
          colour palette, whether they get to keep their eyes open. From there:
          a greyscale thumbnail, a small colour rough, then the long stretch
          of rendering in Clip Studio. Final delivery: a print-ready PNG, the
          layered CSP/PSD, and the process timelapse you&apos;re watching.
        </p>
        <ul>
          <li>
            <span className="k">A.</span>
            <span className="v">Half-body portrait, single subject</span>
            <span className="y">from €240</span>
          </li>
          <li>
            <span className="k">B.</span>
            <span className="v">Full character + backdrop</span>
            <span className="y">from €480</span>
          </li>
          <li>
            <span className="k">C.</span>
            <span className="v">Original character design (3 views)</span>
            <span className="y">from €720</span>
          </li>
          <li>
            <span className="k">D.</span>
            <span className="v">Editorial / book cover</span>
            <span className="y">on request</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
