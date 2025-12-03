"use client";
import "./Navbar.css";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="navbar-main-container">
      <div className="nav-float">
        <div className="nav-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "space-evenly",
            }}
          >
            <div
              className="navbar-brand flex items-center  gap-2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/indifly-Logo.png"
                alt="Indifly-Logo"
                width={100}
                height={40}
                style={{ width: "100px", height: "35px" }}
              />
            </div>

            <div className="nav-search">
              <nav className="nav-links">
                <a href="#hero" className="nav-link">
                  Home
                </a>
                <a href="#sectors" className="nav-link">
                  Our Sectors
                </a>
                <a href="#incore" className="nav-link">
                  InCORE
                </a>
                <a href="#insights" className="nav-link">
                  INDsights
                </a>
                <a href="#contact" className="nav-link">
                  Get in Touch
                </a>
              </nav>

              <Image
                src="/images/search.png"
                alt="search"
                width={40}
                height={40}
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <button
              className="menu-btn mobile-only"
              onClick={() => setOpen(!open)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#sectors" onClick={() => setOpen(false)}>
          Our Sectors
        </a>
        <a href="#incore" onClick={() => setOpen(false)}>
          InCORE
        </a>
        <a href="#insights" onClick={() => setOpen(false)}>
          INDsights
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Get in Touch
        </a>
      </div>
    </div>
  );
}
