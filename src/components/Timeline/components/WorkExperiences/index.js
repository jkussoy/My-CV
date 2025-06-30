import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const WorkExperiences = () => {
  const [history, setHistory] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const unsubscribe = onValue(ref(db, "History"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Fetched data:", data);
        setHistory(data);
      } else {
        console.log("No data available");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      {history.WorkExperiences && (
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-suitcase" />
          </div>
          <div className="timeline-content right">
            <h2>Work Experience</h2>
            <article className="resume-timeline-item position-relative pb-5">
              <div className="resume-timeline-item-header mb-2">
                <div className="d-flex flex-column flex-md-row">
                  <div className="resume-company-name ml-auto">
                    <img
                      className="logoBauni"
                      src={`data:image/png;base64,${history.WorkExperiences.logo}`}
                      alt="Profile"
                    />
                    <h1>{history.WorkExperiences.name}</h1>
                  </div>
                </div>
                <div className="resume-position-time">
                  {history.WorkExperiences.year}
                </div>
                <div className="resume-position-time">
                  <h5>{history.WorkExperiences.job}</h5>
                  <a
                    href="https://www.figma.com/design/J6VTBY0E03FrhB6Af6XWmt/Kel-2?node-id=140-409&t=IZaxL7kuTpK1TrbE-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link Figma
                  </a>
                </div>
              </div>
              <div className="resume-timeline-item-desc">
                <p>{history.WorkExperiences.description}</p>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkExperiences;
