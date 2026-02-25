import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog"} />
      {/*====== Start Blog Details section ======*/}
      <section className="blog-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              {/*=== Blog Details Wrapper ===*/}
              <div className="blog-details-wrapper">
                {/*=== Blog Post ===*/}
                <div className="blog-post wow fadeInUp">
                  <div className="post-meta">
                    <span className="author">
                      <img
                        src="assets/images/blog/author-thumb-4.jpg"
                        alt="author"
                      />
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <span>By</span> Adam Harris
                        </a>
                      </Link>
                    </span>
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        25 January 2026
                      </Link>
                    </span>
                  </div>
                  <div className="entry-content">
                    <h3 className="title">
                      Why Details Matter: Elevating Garden Design Through Exceptional Workmanship and Customer Experience
                    </h3>
                    <p>
                      The difference between an average garden and a truly exceptional one is found in the details you do not always see.
                    </p>
                    <ul>
                      <li>The hidden structural work beneath your patio.</li>
                      <li>The precision of every cut in your decking.</li>
                      <li>The height of each step.</li>
                      <li>The way a boundary line aligns with a sightline from the kitchen.</li>
                      <li>The customer experience that ensures the process feels effortless, not stressful.</li>
                    </ul>
                    <p>
                      In the world of professional landscaping, there is a myth that “as long as it looks good at the end, the details behind it do not matter.” But at Harris Garden Design and Landscaping, we believe that outstanding results are built on the foundations of exceptional workmanship and customer experience, ensuring every project not only looks extraordinary but performs flawlessly for years.
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    <h4 className="title">
                      Workmanship That Protects Your Investment                   
                    </h4>
                    <p>
                      A garden is only as strong as the craftsmanship behind it. Harris Garden Design and Landscaping prioritises exceptional workmanship at every stage, from the sub-base of the patio to the construction of retaining walls and the precision installation of porcelain paving. This level of care prevents issues such as sinking surfaces, drainage failures or uneven steps, problems that commonly arise from rushed or low-cost builds. By focusing on structural integrity and meticulous detail, Harris ensures your garden remains safe, durable and low maintenance, protecting your investment long after the project is complete.                    </p>
                    
                    <h4 className="title">
                      Precision That Creates Cohesive, Beautiful Design                  
                    </h4>
                    <p>
                      The visual harmony of a garden comes from precision, and this is where Harris Garden Design and Landscaping excels. Clean mitred corners, perfectly aligned sightlines, consistent grout joints and smooth transitions between materials all contribute to a refined, cohesive finish. These details may seem small, but they elevate the entire design, creating a space that feels intentional, balanced and beautifully crafted. Harris also applies this precision to planting, using structured, layered arrangements that mature gracefully and enhance the garden throughout the seasons.
                    </p>
                    <h4 className="title">
                      Customer Experience That Shapes the Entire Process                 
                    </h4>
                    <p>
                      Exceptional results are achieved not only through technical skill but also through a seamless and supportive client journey. Harris Garden Design and Landscaping places customer experience at the centre of every project, offering clear communication, transparent timelines, respectful site behaviour and proactive problem-solving. Clients always know what is happening and why. This clarity reduces stress, builds trust and allows homeowners to feel fully involved in shaping their garden. A positive experience leads to clearer decision-making and a final result that reflects both expert craftsmanship and the client’s lifestyle.
                    </p>
                    <h4 className="title">
                      A Garden That Performs, Endures and Inspires                 
                    </h4>
                    <p>
                      When exceptional workmanship and customer experience come together, the final garden becomes far more than a finished project. It becomes a space that feels welcoming, cohesive and deeply connected to the homeowner’s needs. Harris Garden Design and Landscaping delivers gardens that not only perform well today but continue to offer beauty, functionality and enjoyment for many years. The commitment to detail ensures every feature is built to last, every surface is set with precision and every design choice contributes to a space that inspires pride and everyday enjoyment.
                    </p>
                    <p>
                      If you want a garden that is not only beautiful today but reliable, functional and impressive for years to come, choose a landscaping team that values the details. It is the smartest investment you can make in your home.
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    
                  </div>
                </div>
                {/*===  Post Author Box  ===*/}
                <div className="post-author-box d-flex pb-60 mb-60 wow fadeInUp">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/author-2.jpg"
                      alt="post author"
                    />
                  </div>
                  <div className="author-content">
                    <h5>Adam Harris</h5>
                    <span className="position">Author</span>
                    <p>
                      A great garden is designed not on pen and paper. its design begins through interviewing you. Finding out how you want to emotionally connect with the garden when using it. We shape a garden by finding outs it's ideal uses and purpose and design it so it fits your property both oractically and asthetically
                    </p>
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
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              {/*=== Sidebar widget Area ===*/}
              <div className="sidebar-widget-area">
                {/*=== Author Widget ===*/}
                <div className="sidebar-widget widget-post-author mb-40 wow fadeInUp">
                  <div className="author-img">
                    <img
                      src="assets/images/blog/author-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-content text-center">
                    <div className="author-title-box">
                      <h4>Adam Harris</h4>
                      <span className="posiiton">Director &amp; Founder</span>
                    </div>
                    <p>
                      Garden design is something I'm passionate about. Landscaping isn't just my career, its my hobby. That's why in every project I can assure you will aim to make your garden another one of our award winners.
                    </p>
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
                {/*=== Category Widget ===*/}
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
                {/*=== Recent Post Widget ===*/}
                {/*===<div className="sidebar-widget widget-recent-post mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">25 Dec 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Build Progre Enhany Acces Filterable
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">25 Dec 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            JavaScript Requirem For Acces ponen
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">25 Dec 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Build Progre Enhany Acces Filterable
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>===*/}
                {/*=== Banner Widget ===*/}
                <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Hassle Free Experience?!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                  </div>
                </div>
                {/*=== Newsletter ===*/}
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
        </div>
      </section>
      {/*====== End Blog Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default BlogDetails;
