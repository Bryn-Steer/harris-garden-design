import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Landscaping"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Landscaping</h2>
                <p>
                  Landscaping isn’t just about planting a few shrubs and laying turf - it’s about shaping outdoor spaces into living, breathing environments that suit your home, lifestyle, and vision. At Harris Garden Design & Landscaping, we build with purpose. From hardscaping to planting structure, we combine craftsmanship, horticultural knowledge, and smart planning to deliver outdoor spaces that endure.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-1.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>How to Benefit</h3>
                <p>
                  Our landscaping service is comprehensive. We don’t just deliver one part - we manage everything from groundwork to finishing touches, ensuring seamless execution and cohesive aesthetics.
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Clearing, grading, drainage, soil improvements
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Walls, steps, retaining structures, pathways
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Layered planting schemes, seasonal interest, native species
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Premium turf installation or alternative low-maintenance surfaces
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/small1.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/small2.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                <h3>Working Process</h3>
                <p>
                  We believe in a process that keeps you informed, involved, and confident from start to finish. Here’s how our landscaping delivery works:
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
                          <p>Here we discuss your aspirations, constraints and desired usage.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-industry" />
                        </div>
                        <div className="text">
                          <h6>Sketches &amp; Design</h6>
                          <p>Early ideas and plans are developed, developing it into detailed drawings and virtual designs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-bus-stop" />
                        </div>
                        <div className="text">
                          <h6>Build &amp; Execution</h6>
                          <p>Our skilled team takes care of excavation, construction, planting, and finishing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/big2.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>Craftsmanship In Every Detail</h3>
                <p>
                  Every garden we design tells its own story. From contemporary courtyards to large family spaces, our portfolio showcases the diversity of projects we’ve delivered and the pride we take in every finish. Our projects highlight the creativity of our designs, the quality of our materials, and the expertise of our team.
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
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/tiny1.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/service-driveways">Driveways</a>
                        </h3>
                        <a href="/service-driveways" className="btn-link">
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
