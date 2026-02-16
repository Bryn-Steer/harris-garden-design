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
                      Small Garden Design Ideas for Terraced Homes in Bolton
                    </h3>
                    <p>
                      Many homeowners living in terraced properties across Bolton believe that a small garden automatically limits what is possible. The most common misconception is that compact outdoor spaces must remain basic, cluttered, or purely functional. Lawns become patchy, patios feel cramped, and planting often looks forced rather than intentional. In reality, small garden design is not about compromise. It is about precision, planning, and understanding how to make every square metre work harder.
                    </p>
                    <p>
                      Terraced homes present unique challenges, but they also offer unique opportunities. When designed properly, a small terraced garden can feel calm, generous, and beautifully connected to the home. The key lies in understanding scale, flow, planting, and structure, and in avoiding the mistakes that so often undermine compact spaces.
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    <h4 className="title">
                      1. Understanding the challenges                    
                    </h4>
                    <p>
                      Terraced gardens in Bolton tend to share several defining characteristics. They are often long and narrow, enclosed by neighbouring fences or walls, and overlooked from multiple angles. Light levels can vary significantly, with shade at the rear and stronger sun closer to the house. Drainage can also be inconsistent, particularly in older properties with heavy clay soils.
                    </p>
                    <p>
                      Many design problems arise when these realities are ignored. Oversised features dominate the space, planting becomes overcrowded, and circulation feels awkward. Good small garden design starts with acknowledging the limitations of the space and using them to guide smarter decisions rather than fighting against them.
                    </p>
                    <p>
                      Bolton’s climate also plays a role. Frequent rainfall, cooler temperatures, and seasonal shifts mean materials, planting, and layout choices must prioritise durability and year-round usability. A garden that looks good in summer but feels unusable for the rest of the year is rarely a success.
                    </p>
                    <h4 className="title">
                      2. Start with structure                 
                    </h4>
                    <p>
                      Before choosing plants or finishes, begin with creating a layout. Structure defines how the space is used and how it feels when viewed from the house.
                    </p>
                    <p>
                      In narrow gardens, a common mistake is placing everything along the edges. This creates a corridor effect that exaggerates the length and highlights the lack of width. Instead, breaking the space into subtle zones can dramatically improve balance.
                    </p>
                    <p>
                      A small garden might include a seating area near the house, a secondary space further down the garden, and a simple focal point at the end. These zones do not need to be physically separated. Changes in surface material, level, or planting density are often enough to create distinction without clutter.
                    </p>
                    <p>
                      Straight lines can work well in contemporary terraced gardens, but introducing slight offsets or diagonal elements can help soften the space and make it feel less rigid. The key is to maintain visual clarity while avoiding unnecessary complexity.
                    </p>
                    <h4 className="title">
                      3. Choosing the right surfaces                  
                    </h4>
                    <p>
                      Hard landscaping plays a major role in how a small garden functions. In Bolton’s climate, surfaces must be practical, safe, and visually appropriate for a compact setting.
                    </p>
                    <p>
                      Porcelain paving is often a strong choice for terraced homes. It offers a clean, contemporary finish, performs well in wet conditions, and requires minimal maintenance. Using larger format paving can reduce visual noise by limiting grout lines, which helps the space feel more expansive.
                    </p>
                    <p>
                      Composite decking can also work well, particularly in gardens where levels need to be adjusted or where drainage is an issue. Its consistent finish and durability make it suitable for small gardens that need to perform year-round.
                    </p>
                    <p>
                      Limiting the number of surface materials is essential. Too many textures and colours can overwhelm a small space. A restrained palette creates cohesion and allows planting to provide contrast and interest.
                    </p>
                    <h4 className="title">
                      4. Planting principles that work in small garden design                 
                    </h4>
                    <p>
                      The most effective small garden design schemes rely on layered planting rather than volume. Structural plants provide backbone, while softer planting fills in around them. Evergreen shrubs or pleached trees can define boundaries and screen neighbouring properties without taking up valuable floor space.
                    </p>
                    <p>
                      Vertical planting is particularly valuable in terraced gardens. Climbing plants, wall-mounted planters, and trained shrubs draw the eye upward, reducing the focus on limited ground area. This technique also increases privacy and adds depth without narrowing the garden.
                    </p>
                    <p>
                      Choosing plants suited to Bolton’s conditions is critical. Shade-tolerant species perform far better in enclosed spaces, while hardy plants cope better with fluctuating moisture levels. When plants are well matched to their environment, they require less intervention and maintain their shape more effectively.
                    </p>
                    <h4 className="title">
                      5. Using levels and height to add interest                 
                    </h4>
                    <p>
                      Introducing subtle level changes can transform a small terraced garden, but only when handled carefully. A single raised bed, step, or platform can create definition and interest without fragmenting the space.
                    </p>
                    <p>
                      Raised planters along boundaries can serve multiple purposes. They improve drainage, provide opportunities for deeper planting, and visually lift the garden. They also help prevent the garden from feeling flat or one-dimensional.
                    </p>
                    <p>
                      Height variation should always feel intentional. Random steps or raised areas often make small gardens feel disjointed. A clear hierarchy of levels, supported by strong lines and consistent materials, enhances both function and aesthetics.
                    </p>
                    <h4 className="title">
                      6. Lighting as a design tool in small gardens               
                    </h4>
                    <p>
                      Lighting is often overlooked in small garden design, yet it has a significant impact on how the space is experienced. Well-placed lighting extends usability into the evening and adds depth after dark.
                    </p>
                    <p>
                      In terraced gardens, subtle lighting works best. Low-level lights along paths, integrated step lighting, and gentle uplighting on planting can transform the atmosphere without overwhelming the space.
                    </p>
                    <p>
                      Lighting also improves safety, particularly in narrow gardens with steps or changes in level. A thoughtfully lit garden feels more welcoming and visually connected to the home when viewed from inside.
                    </p>
                    <h4 className="title">
                      7. Furniture choices                
                    </h4>
                    <p>
                      Outdoor furniture must be carefully selected in small terraced gardens. Oversised sets dominate the space and restrict movement, while flimsy furniture can make the garden feel temporary.
                    </p>
                    <p>
                      Built-in seating is often an effective solution. Bench seating integrated into planters or walls provides functionality without clutter. It also reinforces the structure of the garden, making it feel designed rather than furnished.
                    </p>
                    <p>
                      Where freestanding furniture is used, lighter designs with open frames help maintain visual flow. Folding or stackable options can be useful in gardens that need to adapt to different uses.
                    </p>
                    <h4 className="title">
                      Our approach               
                    </h4>
                    <p>
                      Designing small gardens requires discipline, experience, and a deep understanding of how people actually use their outdoor space. Harris Garden Design and Landscaping approaches terraced gardens with the same level of care and precision as larger projects, recognising that compact spaces often demand more thoughtful solutions.
                    </p>
                    <p>
                      Their process begins with understanding the property and the client’s lifestyle. How the garden is accessed, how it is viewed from inside, and how it needs to function all inform the design. Rather than forcing trends into small spaces, Harris focuses on proportion, longevity, and usability.
                    </p>
                    <p>
                      Planting schemes are tailored to the specific conditions of each garden, ensuring plants thrive rather than merely survive. Materials are selected for durability and visual balance, and layouts are refined to maximise flow and comfort.
                    </p>
                    <p>
                      This considered approach results in terraced gardens that feel calm, cohesive, and deceptively spacious. Each element has a clear purpose, and the finished space works seamlessly with the home rather than feeling like an afterthought.
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
