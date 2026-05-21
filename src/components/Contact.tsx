export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="colossus reveal">
        Let&apos;s <em>draw</em>
        <br />
        <span className="stroke">your</span>
        <br />
        character.
      </div>
      <div className="contact-grid">
        <div className="contact-col reveal">
          <h5>Commissions, fanart &amp; OC design</h5>
          <p>
            I take personal commissions (your OC, favourite character, ship
            art), fanzine and indie-game work, and the occasional book or album
            cover. Replies within three working days, in English or French.
            NSFW &amp; private commissions accepted under NDA.
          </p>
        </div>
        <div
          className="contact-col reveal"
          style={{ "--d": "120ms" } as React.CSSProperties}
        >
          <h5>Write</h5>
          <ul>
            <li>
              <a href="mailto:studio@athaum.art">
                studio@athaum.art<span className="arr">↗</span>
              </a>
            </li>
            <li>
              <a href="#">
                commissions form<span className="arr">↗</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="contact-col reveal"
          style={{ "--d": "240ms" } as React.CSSProperties}
        >
          <h5>Follow</h5>
          <ul>
            <li>
              <a href="#">
                Instagram<span className="arr">↗</span>
              </a>
            </li>
            <li>
              <a href="#">
                Twitter / X<span className="arr">↗</span>
              </a>
            </li>
            <li>
              <a href="#">
                ArtStation<span className="arr">↗</span>
              </a>
            </li>
            <li>
              <a href="#">
                Pixiv<span className="arr">↗</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="contact-col reveal"
          style={{ "--d": "360ms" } as React.CSSProperties}
        >
          <h5>Studio</h5>
          <ul>
            <li>
              <a href="#">
                Lisbon, PT<span className="arr">↗</span>
              </a>
            </li>
            <li>
              <a href="#">
                Tokyo, JP<span className="arr">↗</span>
              </a>
            </li>
          </ul>
          <p
            style={{
              marginTop: 14,
              fontFamily: '"Geist Mono",monospace',
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Mon–Thu · 10:00–18:00 CET
          </p>
        </div>
      </div>

      <div className="footnote">
        <div>
          <div className="big">— Athaum.</div>
          <span>© MMXXVI · All plates retained by the artist</span>
        </div>
        <div
          style={{
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <span>Folio IV · MMXXVI</span>
          <span>Set in Fraunces &amp; Geist</span>
          <span>Hand-painted. Hand-built.</span>
        </div>
      </div>
    </section>
  );
}
