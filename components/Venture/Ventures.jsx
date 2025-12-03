import Image from "next/image";
import "./Ventures.css";

export default function Ventures() {
  return (
    <div id="ventures" className="ventures-wrapper-container">
      <div className="row">
        <div className="builing-venture-title">
          <div className="">
            <h1>
              Building <span className="highlight">Ventures,</span> Building{" "}
              <span className="highlight">Nation.</span>
            </h1>
            <p className="venture-text">
              A venture builder empowering mission-driven founders with
              resources, functional
              <br />
              <span className="line-two">
                expertise and strategic partnerships to
                <span className="highlight-tilt"> &nbsp; Dream,</span>
                <span className="highlight-tilt"> Build,and </span>
                <span className="highlight-tilt"> Grow.</span>
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="ventures-wrapper">
            <div className="ventures-grid">
              <div className="big-card">
                <div className="big-card-content">
                  <h2 className="title">Our</h2>
                  <h1 className="title-venture">
                    <i>Ventures</i>
                  </h1>
                  <p className="para">
                    Learn more about our portfolio brands in the{" "}
                    <b>BFSI sector</b>.
                  </p>
                  <button className="know-more-btn">Know More →</button>
                </div>
              </div>
              <Image
                src="/images/indian-business-man.png"
                alt="Business Man"
                width={300}
                height={300}
                className="man-image"
              />
              <div className="grid-card orange">
                <Image
                  src="/images/incore.png"
                  alt="Business Man"
                  width={100}
                  height={30}
                  className=""
                />
              </div>
              <div className="grid-card blue">
                <Image
                  src="/images/indsights.png"
                  alt="indsights"
                  width={100}
                  height={30}
                  className=""
                />
              </div>

              <div className="grid-card partner">
                {" "}
                <Image
                  src="/images/Become-our-Partner.png"
                  alt="Become-our-Partner"
                  width={100}
                  height={30}
                  className=""
                />
                <Image
                  src="/images/SVG-blue.png"
                  alt="Blue Arrow"
                  width={50}
                  height={30}
                  className=""
                />
              </div>
              <div className="grid-card touch">
                {" "}
                <Image
                  src="/images/Get-in-Touch.png"
                  alt="Get-in-Touch"
                  width={100}
                  height={30}
                  className=""
                />
                <Image
                  src="/images/SVG-org.png"
                  alt="orange Arrow"
                  width={50}
                  height={30}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
