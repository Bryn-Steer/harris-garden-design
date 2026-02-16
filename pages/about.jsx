import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About"} />
      <section className="about-section pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  About Gardening
                </span>
                <h2>We Care Your Garden &amp; Landscaping</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-content-box mb-50 wow fadeInRight">
                <p className="mb-30">
                  We believe every garden has the potential to become something extraordinary. Led by founder Adam Harris, our award-winning team delivers a complete design and build service - managing every stage from the first consultation to the final handover.
                </p>
                <ul className="check-style-one mb-40">
                  <li>
                    <i className="far fa-check" />
                    We’re the #1 Landscapers in Manchester
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Teams
                  </li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/service">
                    <a className="main-btn secondary-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-3.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInDown">
                <img src="assets/images/about/about-4.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-5.jpg" alt="About Image" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/*====== About Wrapper ======*/}
              <div className="about-wrapper-two gray-bg mt-minus-110 p-r wow fadeInDown">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Mission</h3>
                        <p>
                          Our mission is to be the most trusted landscape design group in and around Greater Manchester by 2030. We want our growing client base to advocate for our proffesionalism.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item item-active text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-vision" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Vision</h3>
                        <p>
                          We understand clients trust us with their dreams for their private outdoor spaces. We hounour that trust placed in us. Our vision for the future is to grow with our customer base, becoming the leader in the garden design industry by excelling at customer service and providing a relaxing experience the whole way through.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-management" />
                      </div>
                      <div className="text">
                        <h3 className="title">Plan &amp; Goals</h3>
                        <p>
                          Growth is what we strive for. Tackling bigger more grand designs is our goal. If you can believe in transforming your garden into a grand luxury living space, we can design and build it. Challenge us!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-100">
        <div className="features-wrapper">
          <div
            className="features-bg bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/features-bg-1.jpg)",
            }}
          />
          <div className="features-bgc-content-box main-bg text-white wow fadeInRight">
            <div className="features-content-box">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInUp">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Modern Gardening
                </span>
                <h2>Our expertise is Design</h2>
              </div>
              <p className="mb-40">
                Our designs are driven by purpose. We don’t chase trends - we listen to your needs and the site’s conditions, then translate them into timeless, usable gardens. Whether you favour bold, modern lines or soft, naturalistic planting, we build a design language that resonates with your lifestyle.
              </p>
              <div className="single-features-item mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-pruning-shears" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Interview &amp; Material Samples</h5>
                  <p>
                    Understanding how you want to use your garden is a leading factor in our design. We provide samples of the highest quality materials.
                  </p>
                </div>
              </div>
              <div className="single-features-item mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gardening-1" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Design Process &amp; Review</h5>
                  <p>
                    After our interview, we assemble the garden using computer aided design (CAD). This helps our construction team and you the customer get a clear view of the final product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Members
                </span>
                <h2>Meet Our Expert Designers &amp; Landscapers</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Dave</a>
                    </Link>
                  </h3>
                  <p>Senior Team Leader</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Joseph
                    </Link>
                  </h3>
                  <p>Landscape Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Bryn
                    </Link>
                  </h3>
                  <p>Media & Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Do You Value Trust & Assurance?
                  </span>
                  <h2>Book a Private Consultation</h2>
                </div>
                <p className="mb-30">
                  Industry recognised designs, delivered with clear process and total accountability.
                </p>
                <Link legacyBehavior href="/team">
                  <a className="main-btn golden-btn">Find A Specialist</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Testimonials
                </span>
                <h2>Clients Feedback</h2>
              </div>
            </div>
          </div>
          {/*====== Testimonial Slider  ======*/}
          <Slider
            {...sliderProps.testimonialSliderOne}
            className="testimonial-slider-one wow fadeInUp"
          >
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="ratings-box">
                    <h6>Excellent Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Thank you, Adam and the team, for all the hard work and excellent teamwork for our garden design and renovation. Superb service and quality craftsmanship throughout.
                </p>
                <div className="author-thumb-title">
                  <div className="author-title">
                    <h6 className="title">Sara</h6>
                    <p className="position"></p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Excellent Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  After having our patio done by Adam and Joe we asked them to come back to complete the rest of our garden and we’re so happy with the transformation! They did a fantastic job and everything was finished to such a high standard. Can’t wait to enjoy our beautiful garden.
                </p>
                <div className="author-thumb-title">
                  <div className="author-title">
                    <h6 className="title">Philip</h6>
                    <p className="position"></p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Excellent Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Transformed our garden completely. Adam and team have a truly impressive work ethic and I would recommend to anyone. I am really grateful and delighted with the decision to employ Harris Landscapes. Adam listened to our brief and delivered x10, top lads!
                </p>
                <div className="author-thumb-title">
                  <div className="author-title">
                    <h6 className="title">Michael Sohor</h6>
                    <p className="position"></p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Excellent Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Adam and Joe built me some raised beds and hard standing in my back garden. They did and excellent job and are really nice People who are a pleasure to have working at your house
                </p>
                <div className="author-thumb-title">
                  <div className="author-title">
                    <h6 className="title">Chris Horth</h6>
                    <p className="position"></p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
