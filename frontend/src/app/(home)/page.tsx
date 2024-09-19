import React from "react";
import Link from "next/link";
import { ParticlesComponent } from "./ReactParticles";
import { HowItWorks } from "./HowItWorks";
import { WhyChooseUs } from "./WhyChooseUs";
import { Faqs } from "./Faqs";

export const metadata = {
  title: "Home - Wizards Fi",
  description: "Homepage of Wizards Fi"
}
export default function Home() {
  return (
    <React.Fragment>
      <ParticlesComponent id="particles-bg" />
      <Banner />
      <HowItWorks />
      <WhyChooseUs />
      <Faqs />
    </React.Fragment>
  );
}

function Banner() {
  const faces = ["front", "back", "right", "left", "top", "bottom"];
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 banner-content">
            <h1>Unlock NFT Value with Instant Crypto Loans</h1>
            <p className="pt-3">Turn your NFTs into collateral and access cryptocurrency loans with ease. No need to sell—just lend your NFTs and get the liquidity you need in minutes.</p>
            <Link href={"/borrow/assets"}>
              <button className="banner-btn mt-4">Get a loan now</button>
            </Link>
            <Link href={"/lend/assets"}>
              <button className="banner-btn mt-4 ms-4">I want to lend</button>
            </Link>
          </div>
          <div className="col-12 col-lg-4 moving">
            <div className="scene">
              <div className="cube">
                {
                  faces.map((face, idx) => (
                    <div className={`face ${face}`} key={`face-${idx}`}></div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
