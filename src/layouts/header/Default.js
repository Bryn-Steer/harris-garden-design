import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Default = () => {
  const [show, setShow] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  return (
    <Fragment>
      <SearchModal show={searchModal} handleClose={() => setSearchModal(false)} />

      <header className="header-area header-two header-clean">
        <div className="container-fluid">
          {/* ===== Header Top Bar ===== */}
          <div className="header-top-bar text-white main-bg d-none d-xl-block">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="top-left">
                  <div className="single-information-item">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <h5 className="mb-0">
                        <a href="mailto:adam@harrisgardendesign.co.uk">adam@harrisgardendesign.co.uk</a>
                      </h5>
                    </div>
                  </div>

                  <div className="single-information-item">
                    <div className="icon">
                      <i className="far fa-phone-plus" />
                    </div>
                    <div className="info">
                      <h5 className="mb-0">
                        <a href="tel:+08000016797">+0800 0016 797</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="top-right float-lg-right">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Header Navigation ===== */}
          <div className="header-navigation d-xl-block d-none">
            <div className="nav-overlay" />

            <div className="primary-menu">
              <div className="site-branding">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-white-two.png" alt="Site Logo" />
                  </a>
                </Link>

                <Link legacyBehavior href="/">
                  <a className="sticky-logo">
                    <img src="assets/images/logo/logo-white.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>

              <div className="nav-menu">
                <div className="mobile-logo mb-30 d-block d-xl-none">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img src="assets/images/logo/logo-black.png" alt="Site Logo" />
                    </a>
                  </Link>
                </div>

                <div className="nav-search mb-30 d-block d-xl-none">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required
                      />
                      <button className="search-btn" type="submit" aria-label="Search">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>

                <Menu />

                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Request a Quote</a>
                  </Link>
                </div>
              </div>

              <div className="nav-right-item">
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Request a Quote</a>
                  </Link>
                </div>

                <button
                  type="button"
                  className="navbar-toggler"
                  aria-label="Open Menu"
                  onClick={() => setShow(true)}
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>

          <MobileMenu handleShow={() => setShow(true)} logo="assets/images/logo/logo-black.png" />
        </div>
      </header>

      <Sidebar show={show} handleClose={() => setShow(false)} />
    </Fragment>
  );
};

export default Default;
