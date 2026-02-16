import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Paving"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Paving</h2>
                <p>
                  At Harris Garden Design & Landscaping, we believe that thoughtful design is the foundation of every great garden. Good design balances aesthetics, functionality, and the way you live - creating outdoor spaces that don’t just look beautiful, but feel right for you and your home.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-1.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>How to Benefit</h3>
                <p>
                  From the moment you say “yes” to exploring your garden’s potential, our design stage sets the tone: we listen carefully, sketch boldly, and refine precisely - so what you see on paper feels like it was always meant to be there in real life.
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Light and shade patterns through the year
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Flow, access, and user paths
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Views, focal points, and layering
                  </li>
                  <li>
                    <i className="far fa-check" />
                    The relationship between hardscape and planting
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/single-service-2.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/single-service-3.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                <h3>Working Process</h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue
                  and equal blame belongs
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
                          <h6>Client Approval</h6>
                          <p>We gather your feedback and adjust designs until perfect, ready to build!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-4.jpg"
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
                          Walls & Turfing
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-pergolas-waterFeatures">
                        <a>
                          Pergolas & Water Features
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-paving">
                        <a>
                          Paving
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
                    <li>
                      <Link legacyBehavior href="/service-decking">
                        <a>
                          Decking
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
                          src="assets/images/service/prev.jpg"
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
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/next.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/service-decking">Decking</a>
                        </h3>
                        <a href="/service-decking" className="btn-link">
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
