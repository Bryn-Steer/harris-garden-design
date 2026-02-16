import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Project2GridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className="gallery-section pt-95 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            {/*====== Section Title ======*/}
            <div className="section-title mb-40">
              <span className="sub-title">
                <i className="flaticon-plant" />
                Photo Gallery
              </span>
              <h2>Take a look at our landscapes!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/*====== Filter Button ======*/}
            <ul className="project-filter mb-50">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Show All
              </li>
              <li
                onClick={handleFilterKeyChange("cat-1")}
                className={activeBtn("cat-1")}
              >
                Garden Design
              </li>
              <li
                onClick={handleFilterKeyChange("cat-2")}
                className={activeBtn("cat-2")}
              >
                Walls
              </li>
              <li
                onClick={handleFilterKeyChange("cat-3")}
                className={activeBtn("cat-3")}
              >
                Turf
              </li>
              <li
                onClick={handleFilterKeyChange("cat-4")}
                className={activeBtn("cat-4")}
              >
                Pergolas
              </li>
              <li
                onClick={handleFilterKeyChange("cat-5")}
                className={activeBtn("cat-5")}
              >
                Water Features
              </li>
              <li
                onClick={handleFilterKeyChange("cat-6")}
                className={activeBtn("cat-6")}
              >
                Paving
              </li>
              <li
                onClick={handleFilterKeyChange("cat-7")}
                className={activeBtn("cat-7")}
              >
                Decking
              </li>
              <li
                onClick={handleFilterKeyChange("cat-8")}
                className={activeBtn("cat-8")}
              >
                Driveways
              </li>
            </ul>
          </div>
        </div>
        <div className="row gallery-active">
          <div className="col-md-6 item cat-1 cat-3 cat-6">
            {/*====== Single Gallery Item ======*/}
            <div className="single-project-item mb-30 wow fadeInLeft">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-17.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Refined Porcelain Patio and Lawn Garden for a Terraced Property</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/project-details">
                      <a>Find out more!</a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 item cat-1 cat-3 cat-7">
            {/*====== Single Gallery Item ======*/}
            <div className="single-project-item mb-30 wow fadeInRight">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-18.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Contemporary Multi-Level Urban Garden With Architectural Planting</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/project-details">
                      <a>Find out more!</a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 item cat-1 cat-6">
            {/*====== Single Gallery Item ======*/}
            <div className="single-project-item mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-19.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Transforming a Tricky Plot into a Lush Family Garden</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/project-details">
                      <a>Find out more!</a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 item cat-1 cat-3 cat-6">
            {/*====== Single Gallery Item ======*/}
            <div className="single-project-item mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-20.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Turning a tired garden into a family friendly retreat.</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/project-details">
                      <a>Find out more!</a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 item cat-1 cat-3 cat-6">
            {/*====== Single Gallery Item ======*/}
            <div className="single-project-item mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-21.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>From Builders Rubble to a Refined Garden Retreat</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/project-details">
                      <a>Find out more!</a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project2GridIsotope;
