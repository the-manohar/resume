import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <div id="profile__ripple">
      <nav>
        <div className="container inner">
          <div className="logo">
            <i className="uil uil-cell"></i>
            MANOHAR'S CV
          </div>
          <div>
            <button style={{ cursor: "pointer" }}>
              <i className="uil uil-print"></i>
              <span onClick={window.print}>Print</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        <section className="profile" id="profile__ripple">
          <div className="left">
            <div className="avatar__block">
              <img src="./images/user.jpg" alt="" />
              <span>
                <i className="uil uil-comment-dots"></i>
              </span>
            </div>
            <div>
              <h2>Manohar Sirvi</h2>
              <p className="cd-headline loading-bar">
                <span className="cd-words-wrapper">
                  <b className="is-visible">UI/UX Designer</b>
                  <b>Node Js Developer</b>
                  <b>React Developer</b>
                </span>
              </p>
            </div>
          </div>
          <div className="right">
            <ul className="contact">
              <li>
                <i className="uil uil-phone-volume"></i>
                <strong>Phone : </strong> +91 9057585161
              </li>
              <li>
                <i className="uil uil-envelope"></i>
                <strong>Email : </strong> Manoharsirvi786@gmail.com
              </li>
            </ul>
            <ul className="socials">
              <li>
                <a
                  href="https://www.facebook.com/manoharsirvi786"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sirvi_manohar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the.manohar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919057585161?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="about">
          <h1 className="section__heading">About US !</h1>
          <div className="content">
            <div className="left">
              <h2>I'm Manohar Sirvi</h2>
              <p>
                Enthusiastic <b>FULL STACK DEVELOPER </b> eager to contribute to
                team success through hard work, attention to detail and
                excellent organization skills. Clear understanding of Frontend
                and Backend and training in full stack developer. Motivated to
                learn, frow and excel in Web Development.
              </p>
              {/* <button>Download CV</button> */}
            </div>
            <div className="right">
              <p>
                <span>Name</span>
                <span>Manohar Sirvi</span>
              </p>
              <p>
                <span>Date of birth</span>
                <span>14 April 2000</span>
              </p>
              <p>
                <span>Languages</span>
                <span>English - Hindi</span>
              </p>
              <p>
                <span>Nationality</span>
                <span>India</span>
              </p>
              <p>
                <span>Interest</span>
                <span>Music, Travelling, Coding, Cricket</span>
              </p>
            </div>
          </div>
        </section>

        <section className="skills">
          <h1 className="section__heading">Education & Skills</h1>
          <div className="content">
            <div className="left">
              <div className="inner__left">
                <div className="heading">
                  <i className="uil uil-graduation-cap"></i>
                  <h5>Education</h5>
                </div>
                <div className="timeline__wrapper">
                  <div className="item">
                    <p>2003 - 2015</p>
                    <p className="center">School</p>
                    <p>Secondary Education</p>
                  </div>
                  <div className="item">
                    <p>2015 - 2017</p>
                    <p className="center">High School</p>
                    <p>Senior Secondary Education</p>
                  </div>
                  <div className="item">
                    <p>2017 - 2020</p>
                    <p className="center">University</p>
                    <p>Bachelor of computer application</p>
                  </div>
                </div>
              </div>
              <div className="inner__right">
                <div className="heading">
                  <i className="uil uil-suitcase-alt"></i>
                  <h5>Experience</h5>
                </div>
                <div className="timeline__wrapper">
                  <div className="item">
                    <p>2018 - 2020</p>
                    <p className="center">Ui/Ux Designer</p>
                  </div>
                  {/* <div className="item">
                    <p>2013 - 2015</p>
                    <p className="center">Senior Developer</p>
                    <p>Apple Co.</p>
                  </div>
                  <div className="item">
                    <p>2015 - 2019</p>
                    <p className="center">Web Designer - Freelancer</p>
                    <p>Coder's Gyan</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="right">
              <div className="skills__wrapper">
                <div className="skill-box">
                  <h4>Html & Css3</h4>
                  <div className="progress__wrap">
                    <span data-percent="78" className="progress__bar">
                      <span className="tooltip">78%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>PHOTOSHOP & XD</h4>
                  <div className="progress__wrap">
                    <span data-percent="65" className="progress__bar">
                      <span className="tooltip">78%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>MERN Stack</h4>
                  <div className="progress__wrap">
                    <span data-percent="69" className="progress__bar">
                      <span className="tooltip">69%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>WEB DESIGN</h4>
                  <div className="progress__wrap">
                    <span data-percent="90" className="progress__bar">
                      <span className="tooltip">78%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>UI/UX DESIGN</h4>
                  <div className="progress__wrap">
                    <span data-percent="82" className="progress__bar">
                      <span className="tooltip">78%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter__section">
          <div>
            <div>
              <i className="uil uil-cell"></i>
            </div>
            <div>
              <h3>
                <span className="counter" data-count="15">
                  15
                </span>
                +
              </h3>
              <h5>Completed projects</h5>
            </div>
          </div>

          <div>
            <div>
              <i className="uil uil-smile"></i>
            </div>
            <div>
              <h3>
                <span className="counter" data-count="10">
                  10
                </span>
                +
              </h3>
              <h5>Happy clients</h5>
            </div>
          </div>

          <div>
            <div>
              <i className="uil uil-trophy"></i>
            </div>
            <div>
              <h3>
                <span className="counter" data-count="5">
                  5
                </span>
                +
              </h3>
              <h5>Awards received</h5>
            </div>
          </div>
        </section>

        <section className="work">
          <h1 className="section__heading">My Works & Review</h1>

          <div className="wrapper">
            <div className="slider__wrapper">
              <div className="icon__wrap">
                <i className="uil uil-feedback"></i>
              </div>

              <div className="slider">
                <div className="slide">
                  <p>
                    Feel very good to work with Manohar .He is very skilled
                    developer
                  </p>
                  <div>{/* <img src="./images/1.jpg" alt="" /> */}</div>
                  <h2>Aditya Jain</h2>
                  {/* <h6>Custoe</h6> */}
                </div>

                {/* <div className="slide">
                  <p>
                    Where does it come from? Contrary to popular belief, Lorem
                    Ipsum is not simply random text. It has roots in a piece of
                    classNameical Latin literature from 45 BC.
                  </p>
                  <div>
                    <img src="./images/1.jpg" alt="" />
                  </div>
                  <h2>- Michael C. Rios</h2>
                  <h6>CEO Facebook</h6>
                </div> */}
              </div>
            </div>
            <div className="portfolio">
              <div className="tabs">
                <ul>
                  <li>
                    <a className="active" href="#" data-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".design">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".frontend">
                      Frontend
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".backend">
                      Backend
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portfolio__wrapper">
                <div className="item backend">
                  <a
                    className="magnify"
                    href="./images/1.png"
                    title="https://mleo-chat-app.netlify.app/"
                  >
                    <img src="./images/1.png" alt="" />
                  </a>
                </div>
                <div className="item backend">
                  <a
                    className="magnify"
                    href="./images/2.jpg"
                    title="https://mleo.netlify.app/"
                  >
                    <img src="./images/2.jpg" alt="" />
                  </a>
                </div>
                <div className="item frontend">
                  <a
                    className="magnify"
                    href="./images/3.jpg"
                    title="https://mleo-reminder.netlify.app/"
                  >
                    <img src="./images/3.jpg" alt="" />
                  </a>
                </div>
                <div className="item design">
                  <a
                    className="magnify"
                    href="./images/4.png"
                    title="https://mleo-gallery.netlify.app/"
                  >
                    <img src="./images/4.png" alt="" />
                  </a>
                </div>
                <div className="item frontend">
                  <a
                    className="magnify"
                    href="./images/5.png"
                    title="https://mleo-covid19.netlify.app/"
                  >
                    <img src="./images/5.png" alt="" />
                  </a>
                </div>
                <div className="item frontend">
                  <a
                    className="magnify"
                    href="./images/6.png"
                    title="https://mleo-movies.netlify.app/"
                  >
                    <img src="./images/6.png" alt="" />
                  </a>
                </div>
                <div className="item design">
                  <a
                    className="magnify"
                    href="./images/7.png"
                    title="https://mleo-music.netlify.app/"
                  >
                    <img src="./images/7.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners">
          <div className="brands__wrapper">
            <img src="./images/8.png" alt="" />
            <img src="./images/9.png" alt="" />
            <img src="./images/10.png" alt="" />
            <img src="./images/11.png" alt="" />
            <img src="./images/12.png" alt="" />
          </div>
        </section>

        <section className="contact">
          <h1 className="section__heading">Contact Me</h1>
          <div className="wrapper">
            <div className="left">
              <div>
                <div>
                  <i className="uil uil-phone-volume"></i>
                </div>
                <div>
                  <h4>Free Call To Me:</h4>
                  <span>(+91) 9057585161 </span>
                </div>
              </div>

              <div>
                <div>
                  <i className="uil uil-envelope"></i>
                </div>
                <div>
                  <h4>Mail Me:</h4>
                  <span>Manoharsirvi786@gmail.com</span>
                </div>
              </div>

              <div>
                <div>
                  <i className="uil uil-map-marker"></i>
                </div>
                <div>
                  <h4>Find Me:</h4>
                  <span>Jagatpura, Jaipur</span>
                </div>
              </div>
            </div>
            {<Form />}
          </div>
        </section>
      </main>

      <footer className="container">
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=7555304&style=0007&nbdigits=4&type=ip&initCount=150"
          title="Web Counter"
          Alt="counter free"
          className="cc"
          border="0"
        />
        <span>© 2020. All rights reserved</span>

        <img
          src="https://hitwebcounter.com/counter/counter.php?page=7555303&style=0007&nbdigits=4&type=page&initCount=150"
          title="Web Counter"
          Alt="counter free"
          className="cc-1"
          border="0"
        />
      </footer>
    </div>
  );
}

export default App;
