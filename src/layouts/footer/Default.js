import Link from "next/link";
const Default = () => {
  return (
    <footer className="footer-area text-white main-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logo/logo-white-two3.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                    We build gardens that grow with the seasons and are built to last.
                  </p>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn filled-btn filled-white">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>623 Halliwell Rd, Bolton BL1 8BZ</li>
                    <li>
                      <a href="mailto:adam@harrisgardendesign.co.uk">adam@harrisgardendesign.co.uk</a>
                    </li>
                    <li>
                      <a href="tel:+0800 0016 797">+0800 0016 797</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Quick Link</h4>
                <div className="widget-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="/about">About Company</a>
                    </li>
                    <li>
                      <a href="/service">Popular Services</a>
                    </li>
                    <li>
                      <a href="/careers">Need a Career?</a>
                    </li>
                    <li>
                      <a href="/team">Meet Our Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-experience-widget float-lg-right mb-40 wow fadeInDown">
                <div className="widget-content">
                  <div className="experience-box-two">
                    <h2 className="number">
                      <span className="count">10</span>+
                    </h2>
                    <h6>Years Of Experience</h6>
                    <a href="/about" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>VAT Number: 377918832 | Company Reg: 12576517</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              <div className="copyright-nav float-lg-right">
                <ul>
                  <li className="menu-item">
                    <Link legacyBehavior href="/careers">
                      Careers
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="/service-gardenDesign">
                      Garden Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Default;
