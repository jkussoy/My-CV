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
          <div className="col-md-6">
            <h4 className="mb-4">Technical Skills</h4>
            <ul className="list-unstyled">
              {[
                { name: "HTML", level: "80%" },
                { name: "CSS", level: "80%" },
                { name: "JavaScript", level: "75%" },
                { name: "React", level: "80%" },
                { name: "React Native", level: "90%" },
              ].map((skill, idx) => (
                <li className="mb-3" key={idx}>
                  <div className="resume-skill-name">{skill.name}</div>
                  <div className="progress">
                    <div
                      className="progress-bar theme-progress-bar-dark"
                      role="progressbar"
                      style={{ width: skill.level }}
                      aria-valuenow={parseInt(skill.level)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <h4 className="mb-4">Soft Skill</h4>
            <ul className="list-unstyled">
              {[
                { name: "Time Management", level: "90%" },
                { name: "Adaptability and Flexibility", level: "83%" },
                { name: "Problem Solving", level: "85%" },
                { name: "Teamwork and Collaboration", level: "80%" },
                { name: "Leadership", level: "94%" },
              ].map((skill, idx) => (
                <li className="mb-3" key={idx}>
                  <div className="resume-skill-name">{skill.name}</div>
                  <div className="progress">
                    <div
                      className="progress-bar theme-progress-bar-dark"
                      role="progressbar"
                      style={{ width: skill.level }}
                      aria-valuenow={parseInt(skill.level)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
