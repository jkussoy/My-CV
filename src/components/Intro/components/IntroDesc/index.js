import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const IntroDesc = () => {
  const [name, setName] = useState("");
  const [job1, setJob1] = useState("");
  const [job2, setJob2] = useState("");
  const [job3, setJob3] = useState("");

  useEffect(() => {
    const db = getDatabase();
    onValue(ref(db, "Intro/"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setName(data.name);
        setJob1(data.job1);
        setJob2(data.job2);
        setJob3(data.job3);
      } else {
        console.log("No data available");
      }
    });
  });
  return (
    <div className="row">
      <div className="col-md-12">
        <h5>Hi there</h5>
        <h1>{name}</h1>
        <p className="intro-desc">
          <span>{job1}</span>
          <span className="colour-splash">•</span>
          <span>{job2}</span> <span className="colour-splash">•</span>{" "}
          <span>{job3}</span>
        </p>
      </div>
    </div>
  );
};
export default IntroDesc;
