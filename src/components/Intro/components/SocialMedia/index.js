import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const SocialMedia = () => {
  const [instagram, setIG] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const unsubscribe = onValue(ref(db, "Social/"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
        setIG(data.instagram);
        setLinkedin(data.linkedin);
        setGithub(data.github);
      } else {
        console.log("No data available");
      }
    });

    return () => unsubscribe(); // Cleanup saat unmount
  }, []);
  return (
    <div className="social">
      <div>
        {instagram && (
          <a href={instagram} target="_blank" rel="noreferrer">
            <i className="fa fa-instagram fa-3x" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin fa-3x" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <i className="fa fa-github fa-3x" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
