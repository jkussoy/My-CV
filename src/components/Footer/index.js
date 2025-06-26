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
            <div className="social">
              <a
                href="https://www.instagram.com/joshuaakussoy/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram fa-3x" />
              </a>
              {/* <a href="http://www.dribbble.com/izzydoesizzy" target="_blank">
                            <i class="fa fa-dribbble fa-3x"></i>
                          </a> */}
              <a
                href="https://www.linkedin.com/in/joshua-kussoy-3165002ba/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-3x" />
              </a>{" "}
              <a
                href="https://github.com/jkussoy"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-3x" />
              </a>
            </div>{" "}
            {/* /social footer */}
          </div>{" "}
          {/* /col-md-4 */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </footer>
  );
};

export default Footer;
