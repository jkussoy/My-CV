import SocialMedia from "../Intro/components/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              Design by:{" "}
              <a href="" target="_blank" rel="noreferrer">
                JoshuaKussoy
              </a>
              <br />
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-creative-commons" />
                Attribution 4.0 License
              </a>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p>
              Made with <i className="fa fa-heart" /> by{" "}
              <a
                href="http://www.clearcarer.ca"
                target="_blank"
                rel="noreferrer"
              />{" "}
              <a
                href="http://www.clearcareer.ca"
                target="_blank"
                rel="noreferrer"
              >
                Joshua Kussoy
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <SocialMedia />
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
