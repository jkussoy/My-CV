import IntroDesc from "./components/IntroDesc";
import SocialMedia from "./components/SocialMedia";

const Intro = () => {
  return (
    <section className="section-image">
      <div className="img-overlay" />
      <div className="intro">
        <IntroDesc />
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <SocialMedia />
          </div>
        </div>
        <div className="bottom">
          <a href="#about">
            <div className="mouse-icon">
              <div className="scroll"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
