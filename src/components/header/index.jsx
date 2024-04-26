import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>ndheri
            <span>S</span>uper
          </h2>
        </div>

        {/* 2nd menu part  */}
        {/* <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a href="#" to="/">
                Home
              </a>
            </li>
            <li>
              <a href="about" to="/about">
                about
              </a>
            </li>
          </ul>
        </div> */}

        {/* 3rd social media links */}
        <div className="social-media">
          <button className="button-34" role="button">
            Get App
          </button>

          {/* <Button type="primary">Primary Button</Button> */}
          {/* <ul className="social-media-desktop">
            <li>
              <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thapatechnical/" target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <MenuFoldOutlined />
            </a>
          </div> */}
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
