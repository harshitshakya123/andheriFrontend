import { FacebookOutlined, InstagramFilled, FacebookFilled, TwitterSquareFilled } from "@ant-design/icons";
import "./styles.css";

const Footer = () => {
  return (
    <section>
      <footer className="top">
        <FacebookOutlined style={{ fontSize: "44px", cursor: "pointer" }} />
        <div className="links">
          <div className="links-column">
            <h2>Get Started</h2>
            <p>Introduction</p>
            <p>Documentation</p>
            <p>Usage</p>
            <p>Globals</p>
            <p>Elements</p>
          </div>
          <div className="links-column">
            <h2>Resources</h2>
            <p>API</p>
            <p>Visibility</p>
            <p>Accessibility</p>
            <p>Community</p>
            <p>Marketplace</p>
          </div>
          <div className="links-column socials-column">
            <h2>Social Media</h2>
            <p>Follow us on social media to find out the latest updates on our progress.</p>
            <div className="socials">
              <FacebookFilled style={{ fontSize: "24px", cursor: "pointer" }} />
              <InstagramFilled style={{ fontSize: "24px", cursor: "pointer" }} />
              <TwitterSquareFilled style={{ fontSize: "24px", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <p className="copyright">© 2023 All rights reserved</p>
        <div className="legal">
          <a> License </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
