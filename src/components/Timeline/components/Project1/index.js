import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Project1 = () => {
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
      {history.Project1 && (
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-suitcase" />
          </div>
          <div className="timeline-content left">
            <h2>projects</h2>
            <article className="resume-timeline-item position-relative pb-5">
              <div className="resume-timeline-item-header mb-2">
                <div className="d-flex flex-column flex-md-row">
                  <div className="resume-company-name ml-auto">
                    <img
                      className="logoBauni"
                      src={`data:image/png;base64,${history.Project1.logo}`}
                      alt="Profile"
                    />
                    <h1>{history.Project1.name}</h1>
                  </div>
                </div>
                <div className="resume-position-time">
                  {history.Project1.year}
                </div>
                <div className="resume-position-time">
                  <h5>{history.Project1.about}</h5>
                  <a
                    href="https://www.figma.com/design/EjZX29lRbXFZ3ii1UHGTMV/bauni.id?node-id=0-1&t=g60BnYwkrowvBqOQ-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link Figma
                  </a>
                </div>
              </div>
              <div className="resume-timeline-item-desc">
                <p>{history.Project1.description}</p>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default Project1;
