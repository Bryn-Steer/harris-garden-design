import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Head from "next/head";
const Index2 = () => {
  return (
    <Layout>
      <Head>
        <title>Garden Design & Landscaping in Bolton | Harris Garden Design</title>
        <meta
          name="description"
          content="Harris Garden Design provides premium garden design and landscaping services in Bolton, creating timeless outdoor spaces tailored to each property."
        />
      </Head>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper One ======*/}
        <div className="hero-wrapper-two">
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroOne} className="hero-slider-one">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero1.png)",
                }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".34"
                      >
                        Transforming Gardens Into
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Timeless Spaces in Bolton
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn filled-btn filled-white mb-10">
                            Book a Call
                          </a>
                        </Link>
                      </div>
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={46} />+
                          </h2>
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
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    {/*======<div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>======*/}
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section  ======*/}
      <section className="features-section gray-bg pt-60 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              {/*====== Features Thumb Item  ======*/}
              <div
                className="features-thumb-item mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="features-inner-item">
                  <div className="thumb">
                    <img
                      src="assets/images/features/features-1.jpg"
                      alt="Features image"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title">Garden Design</h5>
                    <a href="/service-gardenDesign" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Features Thumb Item  ======*/}
              <div
                className="features-thumb-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="features-inner-item">
                  <div className="thumb">
                    <img
                      src="assets/images/features/features-2.jpg"
                      alt="Features image"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title">Landscaping</h5>
                    <a href="service-walls-turfing" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Features Thumb Item  ======*/}
              <div
                className="features-thumb-item mb-40 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <div className="features-inner-item">
                  <div className="thumb">
                    <img
                      src="assets/images/features/features-3.jpg"
                      alt="Features image"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title">Driveways</h5>
                    <a href="service-driveways" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section  ======*/}
      {/*====== Start Choose Section  ======*/}
      <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/choose-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Why Choose Us
                </span>
                <h2>We're An Award Winning Establishment!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Choose Tab  ======*/}
                        <div className="choose-nav-tab">
                          <Nav as={"ul"} className="nav">
                            
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab2"
                              >
                                Lifetime Guarantee
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
                                Recognition in the landscaping industry doesn’t come easy - it takes passion, dedication, and a commitment to quality. That’s why we’re proud to have recently won an award through the Pro Landscaper Project Awards 2025, a testament to the hard work and craftsmanship of our team.                              </p>
                              <div className="thumb-content">
                                <img
                                  src="assets/images/gallery/choose-2.jpg"
                                  alt="Image"
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted Design Systems
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Clarity In No Hidden Fees
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Pro Landscaper Project Awards 2025 winner
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Craftsmanship Aproved by the Association of Professional Landscapers
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane className="tab-pane" eventKey="tab2">
                            <div className="choose-content-box">
                              <p>
                                This award reflects not only the creativity we bring to each design but also the trust our clients place in us to deliver stunning outdoor transformations. Whether it’s a full garden redesign or a bespoke feature such as a water element or decking, our award proves that excellence is at the heart of everything we do.                              </p>
                              <div className="thumb-content">
                                <img
                                  src="assets/images/gallery/choose-3.jpg"
                                  alt="Image"
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Craft over speed
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Confidence through clarity
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Materials with intent
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Aftercare built in
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="assets/images/gallery/choose-1.jpg"
                        alt="Choose Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Choose Section  ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/about/about-1.png"
                  className="about-img-one"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-2.jpg"
                  className="about-img-two"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/tree.png"
                  className="about-img-three"
                  alt="About Image"
                />
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={10} />+
                  </h2>
                  <h4>Years Of Design</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Luxury & Longevity
                  </span>
                  <h2>Refined Design &amp; Lasting Quality.</h2>
                </div>
                <p className="mb-30">
                  For over 10 years, Adam and his team have been transforming outdoor spaces with exceptional garden design and premium paving services. As the #1 landscapers in the area, we take pride in creating stunning patios, pathways, and gardens that our clients love. From the very first sketch through to the final finishing touches, we take care of every detail, ensuring your project runs smoothly and results in a space you’ll love for years to come.                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    Pro Landscaper Project Awards 2025 winner
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Fully Insured &amp; Guaranteed Landscapes
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}
      {/*====== Start Working Process Section ======*/}
      <section className="working-process-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Working Process
                </span>
                <h2>From First sketch To Final Finish</h2>
              </div>
            </div>
          </div>
          <div className="working-process-wrapper wow fadeInUp">
            <div className="row no-lg-gutters">
              {/*====== Working Process Wrapper ======*/}
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 01</div>
                    <div className="text">
                      <h4 className="title">Consultation</h4>
                      <p>We listen to your ideas, goals, and requirements to shape a vision for your space.</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 02</div>
                    <div className="text">
                      <h4 className="title">Design &amp; presentation</h4>
                      <p>Creative concepts are developed and presented so you can see how your garden will take shape.</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 03</div>
                    <div className="text">
                      <h4 className="title">Preperation &amp; Build</h4>
                      <p>Our skilled team handles everything, from groundwork to construction, delivering your project with precision.</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 04</div>
                    <div className="text">
                      <h4 className="title">Sign Off &amp; Aftercare</h4>
                      <p>Once complete, we make sure you’re 100% happy, providing aftercare package &amp; advice to keep your garden looking its best.</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Working Process Section ======*/}
      {/*====== Start Gallery Section 
      <section className="gallery-section-minus p-r z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section Title 
              <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Photo Gallery
                </span>
                <h2>View Proven Work</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Project Content Box 
              <div className="project-content-box mb-50 pl-lg-100 wow fadeInRight">
                <p className="mb-35">
                  Every garden we design tells its own story. From contemporary courtyards to large family spaces, our portfolio showcases the diversity of projects we’ve delivered and the pride we take in every finish. Our projects highlight the creativity of our designs, the quality of our materials, and the expertise of our team.

                </p>
                <Link legacyBehavior href="/project-grid-2-column">
                  <a className="main-btn golden-btn">View More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.projectsSliderOne}
          className="projects-slider-one wow fadeInDown"
        >
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-1.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/pic1.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/pic2.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/pic3.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/pic4.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item 
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/pic5.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Gallery Section 
      {/*====== Start Counter Section  
      <section className="fact-bg-section p-r z-1 main-bg pb-160">
        <div className="circle-wrapper">
          <span />
          <span />
          <span />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={56} />+
                </h2>
                <p>Projects Complete</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  
              <div
                className="single-counter-item mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={99} />%
                </h2>
                <p>Satisfactions Rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={4} />
                </h2>
                <p>Steps To Complete Your Project</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  
              <div
                className="single-counter-item mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={1} />
                </h2>
                <p>Team Fit For The Job</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section  ======*/}
      {/*====== Start Features Section  ======*/}
      <section className="features-section pt-70 p-r z-2">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6">
              {/*====== Features Image Box ======*/}
              <div className="features-one_image-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/features/features-4.png"
                  alt="Features Image"
                />
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== Features Content Box ======*/}
              <div className="features-content-box pl-lg-40 mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Prioritising Design First
                  </span>
                  <h2>Complete Garden Transformations</h2>
                </div>
                <p className="mb-30">
                  Harris Landscapes is a Design led landscaping company that helps our trusting customers achieve their dream garden transformations without the stress of planning and organising the operation yourselves.
                </p>
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    {/*====== Fancy Icon Box ======*/}
                    <div className="fancy-icon-box">
                      <div className="text">
                        <h5 className="title">
                          Design &amp; Visualisation
                        </h5>
                        <p>We bring material samples and sketches to you. Then we construct digital images of your garden so you can visualise the finished design.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/*====== Fancy Icon Box ======*/}
                    <div className="fancy-icon-box">
                      <div className="text">
                        <h5 className="title">
                          Build &amp; Craftsmanship
                        </h5>
                        <p>With a decade of experience and a commitment to quality, we’ve earned a reputation as the leaders in landscaping. Just look at our award winning projects.</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section  ======*/}
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
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 pb-50 p-r z-1"
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
                    Do You Value Trust &amp; Assurance?
                  </span>
                  <h2>Book a Private Consultation</h2>
                </div>
                <p className="mb-35">
                  Industry recognised designs, delivered with clear process and total accountability.
                </p>
                <Link legacyBehavior href="/contact">
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
      {/*====== Start Blog Section  ======*/}
      <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Articles
                </span>
                <h2>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-7.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                  <div className="author-meta">
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-1.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>Post By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Adam Harris</a>
                        </Link>
                      </h6>
                    </div>
                    <Link legacyBehavior href="/blog-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/blog-details">
                    <a className="cat-link">Driveways</a>
                  </Link>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>The Hidden Costs of Poor Driveway Design</a>
                    </Link>
                  </h4>
                  <p>
                    Many homeowners see a driveway as a simple surface. If it looks neat and supports a vehicle, it feels fit for purpose. In reality, poor driveway design is...
                  </p>
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2025</a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post mb-40 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-8.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                  <div className="author-meta">
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-1.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>Post By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Adam Harris</a>
                        </Link>
                      </h6>
                    </div>
                    <Link legacyBehavior href="/blog-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/blog-details">
                    <a className="cat-link">Landscape</a>
                  </Link>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>7 Small Garden Design Ideas that Feel Spacious and Luxurious</a>
                    </Link>
                  </h4>
                  <p>
                    One of the biggest misconceptions homeowners have is that a small garden limits what’s possible. In reality, some of the most elegant...
                  </p>
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2025</a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-10.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                  <div className="author-meta">
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-1.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>Post By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Adam Harris</a>
                        </Link>
                      </h6>
                    </div>
                    <Link legacyBehavior href="/blog-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/blog-details">
                    <a className="cat-link">Gardening</a>
                  </Link>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>A Refined Porcelain Patio and Lawn Garden for a Terraced Home in Bolton</a>
                    </Link>
                  </h4>
                  <p>
                    Small terraced gardens are often underestimated. Many homeowners assume that limited space means limited potential...
                  </p>
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2025</a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index2;
