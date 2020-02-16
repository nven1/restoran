import React from "react";
import "./Landing.style.scss";
import LandingCarousel from "../../components/LandingCarousel/LandingCarousel";

interface LandingProps {}

const Landing: React.FC<LandingProps> = props => {
  return (
    <div id="Landing" className="">
      <LandingCarousel />
    </div>
  );
};
export default Landing;
