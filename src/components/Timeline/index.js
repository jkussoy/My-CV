import Edu1 from "./components/Edu1/index.js";
import Edu2 from "./components/Edu2/index.js";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import WorkExperiences from "./components/WorkExperiences";

const Timeline = () => {
  return (
    <section className="section-primary" id="timelinesection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-heading">
            <h2>Things I've done</h2>
            <p className="lead">Here are a few cool things about me</p>
            <hr className="white" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="timeline">
              <Edu1 />
              <Edu2 />
              <WorkExperiences />
              <Project1 />
              <Project2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
