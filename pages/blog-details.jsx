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
                      The Hidden Costs of Poor Driveway Design
                    </h3>
                    <p>
                      Many homeowners see a driveway as a simple surface. If it looks neat and supports a vehicle, it feels fit for purpose. In reality, poor driveway design is one of the most expensive mistakes a homeowner can make. The problems rarely appear straight away. Instead, they emerge gradually through structural failure, ongoing repairs, drainage issues and reduced property value. <br></br>
                    </p>
                    <p>
                      A driveway is not just a finished surface. It is a layered system that must manage weight, water, weather and access every day. When these fundamentals are overlooked, the costs become unavoidable.{" "}
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    <h4 className="title">
                      1. Drainage Problems                    
                    </h4>
                    <p>
                      Inadequate drainage is one of the most common and damaging consequences of poor driveway design. When water is not directed away correctly, it sits on the surface or runs toward the property. Over time, moisture penetrates joints and weakens the sub-base beneath.
                    </p>
                    <p>
                      During colder months, trapped water expands and contracts, causing cracks and surface movement. In more severe cases, poor drainage can contribute to damp issues near foundations or thresholds. Rectifying drainage after installation often requires lifting sections of the driveway, making it far more expensive than addressing the issue during the design stage.
                    </p>
                    <h4 className="title">
                      2. Weak Foundations                  
                    </h4>
                    <p>
                      The performance of a driveway depends almost entirely on what lies beneath it. Poor excavation depth, incorrect sub-base materials, or insufficient compaction all lead to structural weakness.
                    </p>
                    <p>
                      At first, the driveway may appear stable. As vehicles use the surface repeatedly, weight exposes these flaws. The result is sinking, rutting and cracking, particularly in high-stress areas such as turning points or wheel tracks. These failures are not cosmetic. They usually require full reconstruction rather than simple repairs, adding significant long-term cost.
                    </p>
                    <h4 className="title">
                      3. Incorrect Levels                  
                    </h4>
                    <p>
                      Driveway levels must be carefully calculated to ensure safe access and effective water management. Poor driveway design often results in surfaces that slope the wrong way, create trip hazards or allow water to flow toward the house.
                    </p>
                    <p>
                      Even small level errors can cause daily inconvenience. Doors may catch, steps feel awkward and transitions become uncomfortable. Over time, these issues affect usability and safety. Correcting levels after installation almost always involves removing and rebuilding the surface, increasing disruption and expense.
                    </p>
                    <h4 className="title">
                      4. Material Misuse                 
                    </h4>
                    <p>
                      Selecting materials based on price rather than suitability leads to long-term maintenance issues. Some driveway surfaces look appealing when new but perform poorly under regular vehicle use or in local weather conditions.
                    </p>
                    <p>
                      Low quality block paving may fade, shift or become uneven. Poorly specified tarmac can soften, crack or stain. Inappropriate gravel installations often migrate and require constant topping up. These ongoing issues increase maintenance costs and reduce the lifespan of the driveway.
                    </p>
                    <h4 className="title">
                      5. Visual Impact                 
                    </h4>
                    <p>
                      A driveway plays a major role in kerb appeal. Poor design choices, visible deterioration or awkward layouts can undermine the appearance of an otherwise well maintained property.
                    </p>
                    <p>
                      Potential buyers often notice the driveway first. Cracks, standing water and uneven surfaces suggest neglect and future expense. This can negatively affect property value and buyer confidence. A well-designed driveway, by contrast, enhances first impressions and supports long term value.
                    </p>
                    <h4 className="title">
                      6. Compliance Issues                
                    </h4>
                    <p>
                      Another hidden cost comes from ignoring planning and drainage regulations. Poor driveway design may fail to account for permeable surface requirements or correct water management.
                    </p>
                    <p>
                      Non-compliant driveways can result in enforcement action or the need for costly alterations. Retrofitting compliance measures is almost always more expensive than designing correctly from the outset.
                    </p>
                    <h4 className="title">
                      7. Long Term Costs                
                    </h4>
                    <p>
                      Good driveway design considers structure, drainage, materials and access from the beginning. It anticipates how the surface will perform over many years, not just how it looks on completion day.
                    </p>
                    <p>
                      A properly designed driveway requires less maintenance, performs reliably in all weather conditions and lasts significantly longer. While the initial investment may be higher, the long term cost is considerably lower.
                    </p>
                    <h4 className="title">
                      Final Thoughts               
                    </h4>
                    <p>
                      The true cost of a driveway is not the installation price alone. It is the cost of repairs, maintenance, inconvenience and lost value over time. Poor driveway design hides these costs until they become unavoidable.
                    </p>
                    <p>
                      Investing in proper design from the start protects your home, your finances and your peace of mind. A driveway built on sound principles will continue to perform long after cheaper alternatives have failed.
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
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
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
