import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Driveways"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Driveways</h2>
                <p>
                  At Harris Garden Design & Landscaping, we see driveways as more than just a practical surface. A well-designed driveway frames your home, sets the first impression, and balances durability with refined aesthetics. The right materials, layout, and detailing ensure your driveway performs beautifully while enhancing the character and value of your property.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service2.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>How to Benefit</h3>
                <p>
                  From the first site visit, our driveway process is led by clarity and precision. We assess levels, drainage, access, and visual impact before a single decision is made. Ensuring the finished driveway feels intentional, proportionate, and built to last.
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Drainage, gradients, and ground preparation
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Vehicle access, turning space, and usability
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Material selection and surface finishes
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Edging, transitions, and integration with planting
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/small3.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/small4.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                <h3>Working Process</h3>
                <p>
                  Every driveway project is carefully planned and professionally executed. We avoid shortcuts and generic solutions, focusing instead on robust groundwork, quality materials, and craftsmanship that stands up to daily use and the British climate.
                </p>
                <div className="process-wrapper p-r z-1 wow fadeInUp">
                  <div className="shape line-shape">
                    <span>
                      <img
                        src="assets/images/shape/process-line.png"
                        alt="line"
                      />
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-landscape" />
                        </div>
                        <div className="text">
                          <h6>Private Consultation</h6>
                          <p>We assess your site, usage needs, and aesthetic preferences in detail.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-industry" />
                        </div>
                        <div className="text">
                          <h6>Design &amp; Specification</h6>
                          <p>Layouts, materials, and construction details are developed to suit your home and lifestyle.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-bus-stop" />
                        </div>
                        <div className="text">
                          <h6>Client Approval</h6>
                          <p>Final plans are refined with your input before construction begins.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/big3.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>Craftsmanship In Every Detail</h3>
                <p>
                  From elegant block paving and contemporary resin-bound finishes to traditional stone driveways, our work reflects the same attention to detail found across all our projects. Each driveway is built with care, precision, and pride, delivering a finish that feels solid underfoot and refined at first glance.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/service-gardenDesign">
                        <a>
                          Garden Design
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-walls-turfing">
                        <a>
                          Landscaping 
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-driveways">
                        <a>
                          Driveways
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Hassle Free Experience?!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
                <div className="sidebar-widget widget-newsletter gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="sidebar-content">
                    <p>
                      Subscribe now to learn more about garden design and try our seasonal tips & tricks in your outdoor space{" "}
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn primary-btn">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
                <div className="row">
                  <div className="col-md-6">
                    <div className="navigation-item prev-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/tiny3.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/service-walls-turfing">Landscape</a>
                        </h3>
                        <a href="/service-driveways" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/tiny2.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/service-gardenDesign">Garden Design</a>
                        </h3>
                        <a href="/service-gardenDesign" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default ServiceDetails;
