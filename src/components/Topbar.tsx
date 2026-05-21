export default function Topbar() {
  return (
    <header className="topbar">
      <div className="marker">
        <span className="dot" />
        <span>Now / accepting commissions · Spring MMXXVI</span>
      </div>
      <div className="crest" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="10" stroke="#d63b1f" strokeWidth="1" />
          <circle cx="11" cy="11" r="3" fill="#d63b1f" />
        </svg>
      </div>
      <nav className="links">
        <a href="#works">Works</a>
        <a href="#process">Process</a>
        <a href="#index">Index</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
