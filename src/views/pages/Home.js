import { Link } from "react-router-dom";
import feature1 from "../../dist/images/feature-icon-01.svg";
import feature2 from "../../dist/images/feature-icon-02.svg";
import feature3 from "../../dist/images/feature-icon-03.svg";
import feature4 from "../../dist/images/feature-icon-04.svg";
import feature5 from "../../dist/images/feature-icon-05.svg";
import feature6 from "../../dist/images/feature-icon-06.svg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0">
                Techno Main Online Time Tables
              </h1>
              <p className="hero-paragraph">
                Separate timetable for the individual class and faculty are
                generated automatically by this system. Various slot
                combinations can be acquired so that another timetable is
                generated as of need.
              </p>
              <div className="hero-cta">
                <Link className="button button-primary" to="/dashboard/">
                  Get Your Time Table
                </Link>
                <Link className="button" to="/help/">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="hero-figure anime-element">
              <svg
                className="placeholder"
                width="528"
                height="396"
                viewBox="0 0 528 396"
              >
                <rect
                  width="528"
                  height="396"
                  style={{ fill: "transparent" }}
                />
              </svg>
              <div
                className="hero-figure-box hero-figure-box-01"
                data-rotation="45deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-02"
                data-rotation="-45deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-03"
                data-rotation="0deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-04"
                data-rotation="-135deg"
              ></div>
              <div className="hero-figure-box hero-figure-box-05"></div>
              <div className="hero-figure-box hero-figure-box-06"></div>
              <div className="hero-figure-box hero-figure-box-07"></div>
              <div
                className="hero-figure-box hero-figure-box-08"
                data-rotation="-22deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-09"
                data-rotation="-52deg"
              ></div>
              <div
                className="hero-figure-box hero-figure-box-10"
                data-rotation="-50deg"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features1 section">
        <div className="container">
          <div className="features-inner section-inner ">
            <div className="features-wrap">
              <div className="feature text-center is-revealing-1">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature1} alt="Feature 01" />
                  </div>
                  <h4 className="feature-title mt-24">Students</h4>
                  <p className="text-sm mb-0">
                    Students can login to the system and the system generates
                    online timetable based on the classes they are enrolled. If
                    they have no account they need to register to the system and
                    admin will verify their credentials then only he can login
                  </p>
                </div>
              </div>
              <div className="feature text-center is-revealing-1">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature2} alt="Feature 02" />
                  </div>
                  <h4 className="feature-title mt-24">Administrator</h4>
                  <p className="text-sm mb-0">
                    The administrator must login before performing any
                    operation. The administrator must first register the faculty
                    name with their department. After that the administrator
                    must input the subject details.
                  </p>
                </div>
              </div>
              <div className="feature text-center is-revealing-1">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature3} alt="Feature 03" />
                  </div>
                  <h4 className="feature-title mt-24">How to Login</h4>
                  <p className="text-sm mb-0">
                    Login into the system using your credential then go to
                    dashboard to generate your routine. You can generate your
                    routine as well as see other stream's routine.
                  </p>
                </div>
              </div>
              <div className="feature text-center is-revealing-1">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature4} alt="Feature 04" />
                  </div>
                  <h4 className="feature-title mt-24">Be Productive</h4>
                  <p className="text-sm mb-0">
                    Fermentum posuere urna nec tincidunt praesent semper feugiat
                    nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                    duis convallis. Mauris rhoncus aenean vel elit scelerisque
                    mauris.
                  </p>
                </div>
              </div>
              <div className="feature text-center is-revealing-1">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature5} alt="Feature 05" />
                  </div>
                  <h4 className="feature-title mt-24">Result and Discussion</h4>
                  <p className="text-sm mb-0">
                    This project allows showing the time table according to
                    selected course or selected faculty name. It reduces a lot
                    of manual operations like frequent modification in time
                    table Teachers can fiew their courses and admin can provide
                    support.
                  </p>
                </div>
              </div>
              <div className="feature text-center is-revealing-1">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={feature6} alt="Feature 06" />
                  </div>
                  <h4 className="feature-title mt-24">Future Scope</h4>
                  <p className="text-sm mb-0">
                    My time table is based on knowledge base which is provided
                    by the administrator of the system. In future we can change
                    the generation system of the time table like first we can
                    give the subject options to the faculty members with
                    priority value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing section">
        <div className="container-sm">
          <div className="pricing-inner section-inner">
            <div className="pricing-header text-center">
              <h2 className="section-title mt-0">Use it for your School</h2>
              <p className="section-paragraph mb-0">
                The assignment is to find generic solution that will facilitate
                generating schedule for university (this specific problem is
                adjusted to Faculty of Computing in Belgrade).
              </p>
            </div>
            <div className="pricing-tables-wrap">
              <div className="pricing-table">
                <div className="pricing-table-inner1 is-revealing-1">
                  <div className="pricing-table-main">
                    <div className="pricing-table-header pb-24">
                      <div className="pricing-table-price">
                        <span className="pricing-table-price-amount h1">
                          Features
                        </span>
                        <span className="text-xs"> / Scopes</span>
                      </div>
                    </div>
                    <div className="pricing-table-features-title text-xs pt-24 pb-24">
                      What you will get
                    </div>
                    <ul className="pricing-table-features list-reset text-xs">
                      <li>
                        <span>
                          No teacher can hold two classes at the same time
                        </span>
                      </li>
                      <li>
                        <span>
                          No group can listen for two classes at the same time
                        </span>
                      </li>
                      <li>
                        <span>
                          No classroom can receive two classes at the same time
                        </span>
                      </li>
                      <li>
                        <span>
                          Class should take place in one of the allowed
                          classrooms
                        </span>
                      </li>
                      <li>
                        <span>
                          f the subject has several forms of teaching, the
                          preferred order for each group is the lectures,
                          exercises, and laboratory exercises.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-table-cta mb-8">
                    <Link
                      className="button button-primary button-shadow button-block"
                      Link
                      to="/help/"
                    >
                      Book Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section" style={{ marginBottom: "3em" }}>
        <div className="container">
          <div className="cta-inner section-inner">
            <h3 className="section-title mt-0">Don't have account?</h3>
            <div className="cta-cta">
              <Link
                className="button button-primary button-wide-mobile"
                to="/signup/"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
