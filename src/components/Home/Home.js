import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import DesktopModel from "./DesktopModel";

function Home() {
  return (
    <section style={{ margin: 0, padding: 0 }}>
      {/* Particle background */}
      <div
        className="home-section"
        id="home"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Particle />
      </div>

      {/* Main content without extra top space */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
          minHeight: "100vh",
          marginTop: 0,
        }}
      >
        {/* Text Content - 50% width */}
        <section style={{ width: "60%", padding: "0 1rem" }}>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M<strong className="main-name"> Siddharth Singh</strong>
          </h1>

          <div style={{ paddingTop: 30, textAlign: "center" }}>
            <Type />
          </div>
        </section>

        {/* Model - 50% width */}
        <section style={{ width: "40%", padding: "0 1rem" }}>
          <DesktopModel />
        </section>
      </section>

      <Home2 />
    </section>
  );
}

export default Home;