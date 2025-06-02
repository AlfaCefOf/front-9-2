import "./App.css";
import logo1 from "./assets/Icon (1).png";
import logo2 from "./assets/Illustration (1).png";
import logo3 from "./assets/Logo (7).png";
import logo4 from "./assets/Logo (8).png";
import logo5 from "./assets/Logo (9).png";
import logo6 from "./assets/Logo (10).png";
import logo7 from "./assets/Logo (11).png";
import logo8 from "./assets/Logo (12).png";
import logo9 from "./assets/Icon (2).png";
import logo10 from "./assets/Icon (3).png";
import logo11 from "./assets/Icon (4).png";
import logo12 from "./assets/Frame 35.png";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="leftHeader">
              <img src={logo1} alt="" />
              <h5>Nexcent</h5>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <button>Register now →</button>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="section1">
          <div className="container">
            <div className="section1Line">
              <div className="leftSection1">
                <h1>
                  Lessons and insights <span>from 8 years</span>
                </h1>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button>Register</button>
              </div>
              <img className="rightSection1Img" src={logo2} alt="" />
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <div className="infoSection2">
              <h3>Our Clients</h3>
              <h6>We have been working with some Fortune 500+ clients</h6>
            </div>
          </div>
        </section>
        <section className="section3">
          <div className="container">
            <div className="section3Line">
              <a href="#">
                <img src={logo3} alt="" />
              </a>
              <a href="#">
                <img src={logo4} alt="" />
              </a>
              <a href="#">
                <img src={logo5} alt="" />
              </a>
              <a href="#">
                <img src={logo6} alt="" />
              </a>
              <a href="#">
                <img src={logo7} alt="" />
              </a>
              <a href="#">
                <img src={logo8} alt="" />
              </a>
              <a href="#">
                <img src={logo5} alt="" />
              </a>
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="text1">
            <h4>Manage your entire community in a single system</h4>
          </div>
          <div className="container">
            <div className="section4Line">
              <div className="infoSection4">
                <img src={logo9} alt="" />
                <h5>Membership Organisations</h5>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="infoSection4">
                <img src={logo10} alt="" />
                <h5>National Associations</h5>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="infoSection4">
                <img src={logo11} alt="" />
                <h5>Clubs And Groups</h5>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="container">
            <div className="section5Line">
              <div className="leftSection5">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed accumsan quam vitae est varius
                  fringilla. Pellentesque placerat vestibulum lorem sed porta.
                  Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                  risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                  vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button>Learn More</button>
              </div>
              <img
                className="rightSection5Img"
                src={logo12}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
