import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Team = () => {
  return (
    <Layout>
      <PageBanner pageName={"Meet The Experts"} />
      
      {/*====== End Skills Section  ======*/}
      {/*====== Start Team Section  ======*/}
      <section className="team-section pt-125 pb-100">
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
                {/*====== Section-title ======*/}
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Need a Expert
                  </span>
                  <h2>Looking For a Garden Specialist</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium
                </p>
                <Link legacyBehavior href="/team">
                  <a className="main-btn golden-btn">Find Specialist</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
      
      <Partners />
    </Layout>
  );
};
export default Team;
