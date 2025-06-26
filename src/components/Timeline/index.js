const Timeline = () => {
  return (
    <section className="section-primary" id="timelinesection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-heading">
            <h2>Things I've done</h2>
            <p className="lead">Here are a few cool things about me</p>
            <hr className="white" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Timeline */}
            <div id="timeline">
              {/* Timeline Item, copy from here to create various boxes */}
              <div className="timeline-item">
                {/*Icon inside the circle*/}
                <div className="timeline-icon">
                  <i className="fa fa-university" />
                </div>
                {/* Content from timeline box and position (right or left)*/}
                <div className="timeline-content right">
                  <h2>Education</h2>
                  <article className="resume-timeline-item position-relative pb-5">
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                        <div className="resume-company-name ml-auto">
                          <img
                            className="logoBauni"
                            src="/images/logoUMN.png"
                            alt="Profile"
                          />
                          <h1>Universitas Multimedia Nusantara</h1>
                        </div>
                      </div>
                      <div className="resume-position-time">2021 — 2022</div>
                      <div className="resume-position-time">
                        <h5>Computer Science - Information System</h5>
                      </div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>
                        Awarded a 100% tuition scholarship from the university.
                        Pursued foundational courses in information systems,
                        including introductory programming, data management, and
                        system design. The experience strengthened my interest
                        in the field and motivated my continued academic
                        journey.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* /Timeline Item*/}
              {/* Timeline Item, copy from here to create various boxes */}
              <div className="timeline-item">
                {/*Icon inside the circle*/}
                <div className="timeline-icon">
                  <i className="fa fa-university" />
                </div>
                {/* Content from timeline box and position (right or left)*/}
                <div className="timeline-content left">
                  <h2>Education</h2>
                  <article className="resume-timeline-item position-relative pb-5">
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                        <div className="resume-company-name ml-auto">
                          <img
                            className="logoBauni"
                            src="/images/logoUnklab.png"
                            alt="Profile"
                          />
                          <h1>Universitas Klabat</h1>
                        </div>
                      </div>
                      <div className="resume-position-time">2022 — Present</div>
                      <div className="resume-position-time">
                        <h5>Computer Science - Information System</h5>
                      </div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>
                        Located in Airmadidi, North Sulawesi, UNKLAB is operated
                        by the Seventh-day Adventist Church. My studies focus on
                        software development, database systems, and system
                        analysis, supported by hands-on projects that strengthen
                        both technical and problem-solving skills. I am
                        committed to applying this knowledge in real-world
                        environments within the evolving field of information
                        systems.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* /Timeline Item*/}
              {/* Timeline Item, copy from here to create various boxes */}
              <div className="timeline-item">
                {/*Icon inside the circle*/}
                <div className="timeline-icon">
                  <i className="fa fa-suitcase" />
                </div>
                {/* Content from timeline box and position (right or left)*/}
                <div className="timeline-content right">
                  <h2>Work Experience</h2>
                  <article className="resume-timeline-item position-relative pb-5">
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                        <div className="resume-company-name ml-auto">
                          <img
                            className="logoBauni"
                            src="/images/logoMP.png"
                            alt="Profile"
                          />
                          <h1>Manado Post</h1>
                        </div>
                      </div>
                      <div className="resume-position-time">2024 - 2025</div>
                      <div className="resume-position-time">
                        <h5>Frontend Developer</h5>
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
                      <p>
                        Contributed to the development of key features for the
                        Manado Post Android app, including Text-to-Speech,
                        Summarize, and AI Chat, which are now live on the Play
                        Store. Collaborated with the development team to ensure
                        responsive UI/UX and seamless integration with backend
                        services. Wrote and published technology-related
                        articles for Jago Satu, the platform's official blog,
                        enhancing user engagement and product visibility.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* /Timeline Item*/}
              {/* Timeline Item, copy from here to create various boxes */}
              <div className="timeline-item">
                {/*Icon inside the circle*/}
                <div className="timeline-icon">
                  <i className="fa fa-suitcase" />
                </div>
                {/* Content from timeline box and position (right or left)*/}
                <div className="timeline-content left">
                  <h2>projects</h2>
                  <article className="resume-timeline-item position-relative pb-5">
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                        <div className="resume-company-name ml-auto">
                          <img
                            className="logoBauni"
                            src="/images/logo-bauni.png"
                            alt="Profile"
                          />
                          <h1>Bauni.ID</h1>
                        </div>
                      </div>
                      <div className="resume-position-time">2024</div>
                      <div className="resume-position-time">
                        <h5>Cinema Booking and Snack Ordering App</h5>
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
                      <p>
                        Designed and developed a mobile application that allows
                        users to: Book cinema tickets and select movie showtimes
                        interactively Order snacks directly from the app and add
                        them to a cart before checkout Manage user profiles,
                        view ticket history, and process payments seamlessly
                        Built with a modern dark UI theme and intuitive
                        navigation. The app includes features like
                        login/registration, wallet system, purchase history, and
                        QR code ticket scanning.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* /Timeline Item*/}
              {/* Timeline Item, copy from here to create various boxes */}
              <div className="timeline-item">
                {/*Icon inside the circle*/}
                <div className="timeline-icon">
                  <i className="fa fa-suitcase" />
                </div>
                {/* Content from timeline box and position (right or left)*/}
                <div className="timeline-content right">
                  <h2>projects</h2>
                  <article className="resume-timeline-item position-relative pb-5">
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                        <div className="resume-company-name ml-auto">
                          <h1>PT.Ferlex</h1>
                        </div>
                      </div>
                      <div className="resume-position-time">2024</div>
                      <div className="resume-position-time">
                        <h5>Oil Product E-Commerce Website</h5>
                        <a
                          href="https://www.figma.com/design/TFDOQInoWBGfUiQhVuwSBa/Ferlex?node-id=0-1&t=KNZ0oF4CMNoCjxYz-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link Figma
                        </a>
                      </div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>
                        Developed a responsive e-commerce website for Ferlex, a
                        family-run business specializing in oil product sales.
                        Key features include: Product catalog with detailed
                        descriptions and pricing Shopping cart and checkout
                        functionality User-friendly interface for both desktop
                        and mobile users This project supports the digital
                        transformation of a traditional business into an online
                        marketplace.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* /Timeline Item*/}
            </div>
            {/* /col-md-12 */}
          </div>
          {/* /row */}
        </div>
      </div>{" "}
      {/* / container */}
    </section>
  );
};

export default Timeline;
