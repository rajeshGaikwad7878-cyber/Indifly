"use client";
import { useState, useEffect } from "react";
import "./Sector.css";
import Image from "next/image";
//payments-indipe payments-indico payments-indNXT
export default function OurSectors() {
  const sectorsData = {
    payments: {
      mainTitle: "Payments",
      subTabs: ["Indipe", "Indicconnect", "IndiNXT"],
      content: {
        Indipe: {
          title: "B2B Payments",
          description:
            "One-stop platform for payments, banking, and compliance.",
          bullets: [
            "UPI, Cards, Wallets, Netbanking",
            "Virtual accounts & payouts",
            "Automated reconciliation",
            "KYC, KYB & credit rating tools",
            "Tailored for businesses & co-operatives",
          ],
          image: "/images/payments-indipe.png",
        },
        Indicconnect: {
          title: "B2B Payments Connect",
          description:
            "Designed for SMEs and co-operatives. Connect unifies essential systems.",
          bullets: ["Bank integrations", "Secure APIs", "Bulk settlement"],
          image: "/images/payments-indico.png",
        },
        IndiNXT: {
          title: "UPI Infrastructure",
          description: "UPI infrastructure built for Bharat, ready for the world.",
          bullets: ["UPI Switch", "T-OTP solutions", "Merchant platform", "High availability systems"],
          image: "/images/payments-indNXT.png",
        },
      },
    },
    financial: {
      mainTitle: "Financial Services",
      subTabs: ["Sec2Pay", "Indikendra"],
      content: {
        Sec2Pay: {
          title: "Whitelabel Fintech Infrastructure",
          description:
            "Empowers institutions to launch fintech services under their own brand.",
          bullets: ["Prepaid cards & wallets", "Micro ATM & AePS", "Lending enablement", "Enterprise-grade security"],
          image: "/images/finance-sec.png",
        },
        Indikendra: {
          title: "Last Mile Digital Banking",
          description:
            "Bridges financial access through digital & assisted services.",
          bullets: ["Payment solutions", "Micro ATM", "Lending tools", "KYC services"],
          image: "/images/finance-indi.png",
        },
      },
    },
    logistics: {
      mainTitle: "ONDC Logistics",
      subTabs: ["IndiSpeed"],
      content: {
        IndiSpeed: {
          title: "Smarter Logistics for Bharat",
          description: "ONDC-powered courier and delivery orchestration platform.",
          bullets: ["API-first logistics", "Bulk dispatch dashboard", "Intercity & hyperlocal delivery", "Transparent pricing & tracking"],
          image: "/images/ondc.png",
        },
      },
    },
  };

  const [mainTab, setMainTab] = useState("payments");
  const [subTab, setSubTab] = useState(sectorsData.payments.subTabs[0]);

  useEffect(() => {
    setSubTab(sectorsData[mainTab].subTabs[0]);
  }, [mainTab]);

  const activeContent = sectorsData[mainTab].content[subTab];

  return (
    <section className="ourSectors-section">
      <div className="ourSectors-container">
        <div className="text-center">
          <Image
                src="/images/our-sector-bg.png"
                   alt="our-sector-bg.png" className="our-sector-bg.png"
                    width={300}
                    height={80}
              />
              <div className="heading-text">
          <h3 className="section-title">Our Sectors</h3>
          
          </div>
          <h5 className="section-sub">
  <span className="integrated">Integrated</span>,{" "}
  <span className="inclusive">Inclusive</span> {" "}
  <span className="innovative">& Innovative</span>
</h5>
          <p className="small-desc">
            Equipping diverse brands in multiple sectors with essential resources,
            expertise, and unwavering support
          </p>
        </div>

        {/* MAIN TABS */}
        <div className="main-tab-group">
          {Object.keys(sectorsData).map((key) => (
            <button
              key={key}
              className={`mainTabBtn ${mainTab === key ? "activeMain" : ""}`}
              onClick={() => setMainTab(key)}
            >
              {sectorsData[key].mainTitle}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="content-row">
          {/* LEFT CONTENT */}
          <div className="content-left">
            <div className="content-box">
              <div className="sub-tab-group">
                {sectorsData[mainTab].subTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`subTabBtn ${subTab === tab ? "activeSub" : ""}`}
                    onClick={() => setSubTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeContent && (
                <>
                  <h4 className="content-title">{activeContent && activeContent.title}</h4>
                  <p className="content-desc">{activeContent && activeContent.description}</p>

                  <ul className="list-points">
                    {activeContent.bullets.map((b, index) => (
                      <li key={index}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="btn-group">
                <button className="orangeBtn">Partner with us</button>
                <button className="outlineBtn">Explore More →</button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="content-right">
            <div className="image-box">
              <Image
                src={activeContent && activeContent.image}
                alt={activeContent && activeContent.title}
                className="sectorImage"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
