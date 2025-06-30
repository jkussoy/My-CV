import SoftSkills from "./components/SoftSkills";
import TechnicalSkills from "./components/TechnicalSkills";

const Skills = () => {
  return (
    <section className="section-image" id="skills">
      <div className="img-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-heading text-center">
            <h2>Skills</h2>
            <p className="lead">Here are a few cool things about me</p>
            <hr />
          </div>
        </div>

        <div className="row">
          <TechnicalSkills />
          <SoftSkills />
        </div>
      </div>
    </section>
  );
};

export default Skills;
