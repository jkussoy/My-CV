import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const TechnicalSkills = () => {
  const [skills, setSkills] = useState({ technical: [], soft: [] });

  useEffect(() => {
    const db = getDatabase();
    const unsubscribe = onValue(ref(db, "Skills"), (snapshot) => {
      if (snapshot.exists()) {
        setSkills(snapshot.val());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="col-md-6">
      <h4 className="mb-4">Technical Skills</h4>
      <ul className="list-unstyled">
        {skills.technical.map((skill, idx) => (
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
  );
};
export default TechnicalSkills;
