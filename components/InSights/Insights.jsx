import Image from "next/image";
import "./InSights.css";

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <Image
            src="/images/our-sector-bg.png"
            alt="heading-bg"
            width={300}
            height={80}
            className="heading-bg"
          />
          <h3 className="insights-title">INDsights</h3>
        </div>
        <div className="insights-cards">
          <div className="insights-card">
            <h4 className="card-title">Lorem Ipsum blog Title</h4>
            <p className="card-desc">
              Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum
              Subtext Title Lorem Ipsum Subtext Title
            </p>

            <Image
              src="/images/indsight-blog.png"
              alt="blog-image"
              width={400}
              height={200}
              className="card-image"
            />
            <button className="read-btn">Read more →</button>
          </div>
          <div className="insights-card active">
            <h4 className="card-title">Lorem Ipsum blog Title</h4>
            <p className="card-desc">
              Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum
              Subtext Title Lorem Ipsum Subtext Title
            </p>

            <Image
              src="/images/indsight-blog.png"
              alt="blog-image"
              width={400}
              height={200}
              className="card-image"
            />
            <button className="read-btn active-btn">Read more →</button>
          </div>
          <div className="insights-card">
            <h4 className="card-title">Lorem Ipsum blog Title</h4>
            <p className="card-desc">
              Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum
              Subtext Title Lorem Ipsum Subtext Title
            </p>
            <Image
              src="/images/indsight-blog.png"
              alt="indsight-blog"
              width={400}
              height={200}
              className="card-image"
            />
            <button className="read-btn">Read more →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
