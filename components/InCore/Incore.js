import Image from "next/image";
import "./Incore.css";

export default function InCore() {
  return (
    <section className="incore-section">
      <div className="incore-header">
        <h2 className="incore-title">
          Integrated expertise, delivered at{" "}
          <span className="highlight">every stage.</span>
        </h2>
        <p className="incore-subtext">
          <span>We don't just advise, we embed.</span>
        </p>
        <p className="stack-par">
          With inSTACK, inSURGE, inSURE, and inVOLVE founders gain the muscle of
          execution alongside strategic leadership guidance.
        </p>
      </div>
      <div className="puzzle-image-wrapper">
        <Image
          src="/images/incore-bg.png"
          alt="inCORE Puzzle"
          width={1200}
          height={900}
          className="puzzle-image"
          priority
        />
      </div>
    </section>
  );
}
