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
                      7 Small Garden Design Ideas that Feel Spacious and Luxurious
                    </h3>
                    <p>
                      One of the biggest misconceptions homeowners have is that a small garden limits what’s possible. In reality, some of the most elegant and luxurious gardens are compact. The difference lies not in size, but in design quality. Poorly planned small gardens often feel cramped, cluttered, and impractical, while professionally designed spaces can feel calm, expansive, and refined. 
                    </p>
                    <p>
                      At Harris Garden Design, we regularly work with compact outdoor spaces and see first-hand how thoughtful design transforms them. With the right layout, materials, and planting strategy, a small garden can feel like a seamless extension of the home rather than an afterthought.{" "}
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    <h4 className="title">
                      1. Designing for perception                    
                    </h4>
                    <p>
                      Luxury in small garden design is about perception. The way a space feels is far more important than its actual measurements. When a garden is overcrowded with features or poorly organised, the eye stops short, making the space feel tight and uncomfortable. By contrast, a well-composed garden encourages the eye to travel naturally, creating a sense of openness.
                    </p>
                    <p>
                      A key principle is restraint. Rather than trying to fit everything into a limited footprint, successful small garden design focuses on clarity and purpose. Each element should earn its place. Open space is not wasted space; it is what allows the garden to breathe and feel balanced.
                    </p>
                    <h4 className="title">
                      2. Simplifying the layout                  
                    </h4>
                    <p>
                      In small gardens, complex layouts work against you. Multiple zones, competing shapes, and unnecessary changes in level often make a garden feel broken up and smaller than it really is. A more luxurious approach is to simplify the layout and allow one clear design language to dominate.
                    </p>
                    <p>
                      A single, well-defined area that can be used flexibly for dining, relaxing, or entertaining often works better than several cramped zones. Clean lines, consistent geometry, and uninterrupted surfaces help maintain visual flow. When the layout feels calm and intentional, the garden immediately appears larger and more refined.
                    </p>
                    <h4 className="title">
                      3. Choosing materials that elevate the space                  
                    </h4>
                    <p>
                      Material choice plays a major role in how spacious a small garden feels. Too many different finishes create visual clutter, which reduces the sense of scale. Limiting the palette to two or three complementary materials creates cohesion and a high-end look.
                    </p>
                    <p>
                      Large-format paving is particularly effective in compact spaces. Fewer joints mean fewer visual interruptions, allowing the surface to read as one continuous plane. Porcelain and natural stone are popular choices for this reason, offering durability as well as a clean, contemporary aesthetic.
                    </p>
                    <p>
                      Consistency is key. Repeating the same material across steps, seating, or edging reinforces the design and avoids the fragmented look that often makes small gardens feel busy.                    </p>
                    <h4 className="title">
                      4. Using planting to add structure and depth                 
                    </h4>
                    <p>
                      Planting is often where small gardens go wrong. Overloading the space with too many plant varieties creates visual noise and makes the garden feel crowded. A more luxurious approach focuses on structure first and decoration second.
                    </p>
                    <p>
                      Using a limited selection of plants, repeated throughout the garden, creates rhythm and cohesion. Structural planting such as evergreen shrubs, pleached trees, or ornamental grasses provides year-round form and anchors the design. Softer planting can then be layered in to add seasonal interest without overwhelming the space.
                    </p>
                    <p>
                      Vertical planting is especially valuable in small gardens. Drawing the eye upward through climbers, trained trees, or tall planting beds adds depth and makes the garden feel taller and more expansive.
                    </p>
                    <h4 className="title">
                      5. Creating the illusion of depth                 
                    </h4>
                    <p>
                      Depth is one of the most powerful tools in small garden design. Even in a short garden, careful layering can create the impression of distance. This is achieved by arranging elements in a visual sequence, with lower planting or open space in the foreground, medium-height features in the middle, and taller planting or structures at the boundary.
                    </p>
                    <p>
                      Boundaries should be treated with care. Busy fences or multiple finishes draw attention to the garden’s limits. A single, consistent boundary treatment, softened with planting, allows the edges to recede visually. Darker tones are particularly effective, as they make boundaries less prominent and enhance the sense of space.
                    </p>
                    <h4 className="title">
                      6. Selecting furniture and features with intention                
                    </h4>
                    <p>
                      In compact gardens, furniture and features must be chosen carefully. Oversized or poorly proportioned items quickly dominate the space and disrupt balance. Built-in elements such as seating or planters often work better than freestanding furniture, as they feel bespoke and reduce clutter.
                    </p>
                    <p>
                      Luxury is achieved through intention rather than quantity. One well-chosen feature, such as a subtle water element or a statement planting area, creates focus without overwhelming the garden. Everything else should support this focal point, not compete with it.
                    </p>
                    <h4 className="title">
                      7. The role of lighting in small garden luxury                
                    </h4>
                    <p>
                      Lighting has a transformative effect on small gardens, yet it is frequently overlooked. Thoughtful lighting design extends the usability of the space into the evening and adds depth after dark. Low-level lighting, gentle uplighting, and concealed light sources create atmosphere without harsh glare.
                    </p>
                    <p>
                      By highlighting vertical elements and textures, lighting reinforces the illusion of space and enhances the garden’s overall sense of luxury. The aim is subtlety rather than brightness, allowing the garden to feel inviting and sophisticated.
                    </p>
                    <h4 className="title">
                      Ready to Transform Your Small Garden?              
                    </h4>
                    <p>
                      A small garden has the potential to be one of the most beautiful and valuable spaces in your home — when it’s designed properly.
                    </p>
                    <p>
                      Request a quote today and discover how your small garden can feel spacious, elegant, and effortless to maintain.
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
