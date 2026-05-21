import Image from "next/image";
import { indexItems } from "@/data/works";

export default function IndexStrip() {
  return (
    <section className="index-strip" id="index">
      <div className="head">
        <span className="num serif">№ 05</span>
        <h2>
          The complete <em>index</em>
        </h2>
        <span className="hint">↔ drag horizontally</span>
      </div>
      <div className="scroller" data-drag-scroll>
        <div className="row">
          {indexItems.map((it) => (
            <a className="item" href="#" key={it.src}>
              <div className="ph">
                <Image
                  src={it.src}
                  alt=""
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="lbl">
                <b>{it.name}</b>
                <span>{it.num}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
