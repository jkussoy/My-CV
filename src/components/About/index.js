import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState("");

  useEffect(() => {
    const db = getDatabase();
    onValue(ref(db, "About/"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setTitle(data.title);
        setDesc(data.desc);
        setImg(data.image);
      } else {
        console.log("No data available");
      }
    });
  });
  return (
    <section className="section-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <img
              className="profilepic"
              src={`data:image/png;base64, ${image}`}
              alt="Profile"
            />
            <h2>{title}</h2>
            <hr />
            <p className="lead">{desc}</p>
          </div>
          {/* /col-md-6 */}
        </div>
        {/* / row */}
      </div>
      {/* /container */}
    </section>
  );
};

export default About;
