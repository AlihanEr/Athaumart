const PHRASES = [
  "Selected illustrations",
  "Character portraits",
  "Painted fanart",
  "Original characters",
  "Commissions open",
];

function Track() {
  const items: React.ReactNode[] = [];
  // build phrases × 2 with stars between
  for (let i = 0; i < 2; i++) {
    PHRASES.forEach((p, idx) => {
      items.push(<span key={`p-${i}-${idx}`}>{p}</span>);
      items.push(
        <span key={`s-${i}-${idx}`} className="star" aria-hidden="true">
          ✦
        </span>
      );
    });
  }
  return <span>{items}</span>;
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
