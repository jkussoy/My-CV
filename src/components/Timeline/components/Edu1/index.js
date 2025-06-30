import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Edu1 = () => {
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
      {history.Edu1 && (
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-university" />
          </div>

          <div className="timeline-content right">
            <h2>history</h2>
            <article className="resume-timeline-item position-relative pb-5">
              <div className="resume-timeline-item-header mb-2">
                <div className="d-flex flex-column flex-md-row">
                  <div className="resume-company-name ml-auto">
                    <img
                      className="logoBauni"
                      src={`data:image/png;base64,${history.Edu1.logo}`}
                      alt="Profile"
                    />
                    <h1>{history.Edu1.name}</h1>
                  </div>
                </div>
                <div className="resume-position-time">{history.Edu1.year}</div>
                <div className="resume-position-time">
                  <h5>{history.Edu1.major}</h5>
                </div>
              </div>
              <div className="resume-timeline-item-desc">
                <p>{history.Edu1.description}</p>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default Edu1;
