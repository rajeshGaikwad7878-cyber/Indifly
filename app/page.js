import Contact from "../components/Contact/Contact";
import Ventures from "@/components/Venture/Ventures";
import Footer from "@/components/Footer/Footer";
import OurSectors from "@/components/Sectors/Sectors";
import OurMission from "@/components/OurMission";
import InCore from "@/components/InCore/Incore";
import Insights from "@/components/InSights/Insights";

export default function Home() {
  return (
    <>
      <main>
        <section id="hero" className="section hero">
          <div className="container ventures">
            <Ventures />
          </div>
        </section>
        <section id="" className="section ">
          <div className="container ">
            <OurMission />
          </div>
        </section>

        <section id="sectors" className="section">
          <div className="container text-center">
            <OurSectors />
          </div>
        </section>

        <section id="incore" className="">
          <div className="">
            <InCore />
          </div>
        </section>

        <section id="insights" style={{ background: "#ffeedf" }}>
          <div className="container">
            <Insights />
          </div>
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
