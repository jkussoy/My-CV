import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Edu2 = () => {
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
      {history.Edu2 && (
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-university" />
          </div>
          <div className="timeline-content left">
            <h2>history</h2>
            <article className="resume-timeline-item position-relative pb-5">
              <div className="resume-timeline-item-header mb-2">
                <div className="d-flex flex-column flex-md-row">
                  <div className="resume-company-name ml-auto">
                    <img
                      className="logoBauni"
                      src={`data:image/png;base64,${history.Edu2.logo}`}
                      alt="Profile"
                    />
                    <h1>{history.Edu2.name}</h1>
                  </div>
                </div>
                <div className="resume-position-time">{history.Edu2.year}</div>
                <div className="resume-position-time">
                  <h5>{history.Edu2.major}</h5>
                </div>
              </div>
              <div className="resume-timeline-item-desc">
                <p>{history.Edu2.description}</p>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default Edu2;
