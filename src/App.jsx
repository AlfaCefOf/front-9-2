import "./App.css";
import logo1 from "./assets/Icon (1).png";

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
              <img
                className="rightSection1Img"
                src="src/assets/Illustration (1).png"
                alt=""
              />
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
                <img src="src/assets/Logo (7).png" alt="" />
              </a>
              <a href="#">
                <img src="src/assets/Logo (8).png" alt="" />
              </a>
              <a href="#">
                <img src="src/assets/Logo (9).png" alt="" />
              </a>
              <a href="#">
                <img src="src/assets/Logo (10).png" alt="" />
              </a>
              <a href="#">
                <img src="src/assets/Logo (11).png" alt="" />
              </a>
              <a href="#">
                <img src="src/assets/Logo (12).png" alt="" />
              </a>
              <a href="#">
                <img src="src/assets/Logo (9).png" alt="" />
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
                <img src="src/assets/Icon (2).png" alt="" />
                <h5>Membership Organisations</h5>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="infoSection4">
                <img src="src/assets/Icon (3).png" alt="" />
                <h5>National Associations</h5>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="infoSection4">
                <img src="src/assets/Icon (4).png" alt="" />
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
                src="src/assets/Frame 35.png"
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
