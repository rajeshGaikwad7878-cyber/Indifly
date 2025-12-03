import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <Image
              src="/images/indifly-logo.png"
              alt="footer-logo"
              width={100}
              height={40}
            />
          </div>

          <h3 className="footer-about-title">
            Building <span className="org">Ventures</span>, Building{" "}
            <span className="org">Nation</span>.
          </h3>

          <p className="footer-about-text">
            A venture builder empowering mission-driven founders with resources,
            functional expertise and strategic partnerships to dream, build, and
            grow.
          </p>

          {/* Social Icons */}
          <div className="footer-social">
            <span>Connect with us:</span>
            <div className="footer-social-icons">
              <Image
                src="/images/social-media.png"
                alt="in"
                width={220}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Home</h4>
          <ul>
            <li>About InCORE</li>
            <li>Contact Us</li>
            <li>Customer Stories</li>
            <li>About IndiFly</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">InCore</h4>
          <ul>
            <li>InSurge (Marketing & Growth)</li>
            <li>InStack (Tech & Product)</li>
            <li>InVolve (HR & Culture)</li>
            <li>InSure (Legal & Compliance)</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>SiteMap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
