import React from "react";
import "./LandingCarousel.style.scss";
import photo from "../../assets/buffet.jpg";

interface LandingCarouselProps {}

const LandingCarousel: React.FC<LandingCarouselProps> = props => {
  return (
    <div id="LandingCarousel">
      <div id="landingText">
        <h1 className="title">
          Sinonim za najbolji odnos kvalitete i cijene u Zagrebu
        </h1>
        <p className="titleParagraph">
          Studioznim pristupom pri izradi normativa i izboru namirnica uspjeli
          smo postići najbolji odnos kvalitete i prihvatljivosti cijena naših
          jela.
        </p>
        <div className="buttonsContainer">
          <button className="brownButton">Saznaj više</button>
          <button className="brownButton">Dnevni meni</button>
        </div>
      </div>
      <img id="landingImage" src={photo} alt="meso" />
    </div>
  );
};
export default LandingCarousel;
