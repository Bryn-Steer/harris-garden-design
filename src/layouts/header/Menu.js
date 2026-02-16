import Link from "next/link";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
            <li className="menu-item">
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li>
        <li className="menu-item">
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="service">
              Our Services
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/project-grid-2-column">
              Case Studies
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/blog-standard">
              Articles
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="careers">
            Careers
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/contact">
            Contact
          </Link>
        </li>
        {/*<li className="menu-item has-children">
          <a href="#">
            Pages
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="team">
                Our Team
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="shop">
                Our Shop
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="product-details">
                Product Details
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="testimonials">
                Testimonial
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="faqs">
                Faq
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="contact">
                Contact
              </Link>
            </li> 
          </ul>
        </li> */}
      </ul>
    </nav>
  );
};
export default Menu;
