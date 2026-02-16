import { useState } from "react";
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (!r.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />

      {/*====== Start Contact Info section ======*/}
      <section className="contact-info-section pt-100">
        <div className="container">
          <div className="contact-info-wrapper wow fadeInUp">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <h6>623 Halliwell Rd, Bolton BL1 8BZ</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <h6>
                      <a href="mailto:adam@harrisgardendesign.co.uk">
                        adam@harrisgardendesign.co.uk
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Phone No</span>
                    <h6>
                      <a href="tel:08000016797">0800 001 6797</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Info section ======*/}

      {/*====== Start Contact section ======*/}
      <section className="contact-section pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title wow fadeInRight mb-50">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Contact Us
                </span>
                <h2>Ready to Work With Us</h2>
              </div>
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="map-box wow fadeInLeft mb-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303727.84061454586!2d-2.32001985!3d53.506450550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba654d3882eb1%3A0x2cc7d82221c68081!2sGreater%20Manchester!5e0!3m2!1sen!2suk!4v1768763600930!5m2!1sen!2suk"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, width: "100%", height: "450px" }}
                    allowFullScreen
                    title="Google Map"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-form-wrapper mb-50 wow fadeInRight">
                  <form onSubmit={onSubmit} className="contact-form" noValidate>
                    <div className="form_group">
                      <label aria-label="Full name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        autoComplete="name"
                        disabled={loading}
                      />
                    </div>

                    <div className="form_group">
                      <label aria-label="Email address">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        autoComplete="email"
                        disabled={loading}
                      />
                    </div>

                    <div className="form_group">
                      <label aria-label="Phone number">
                        <i className="far fa-phone-plus" />
                      </label>
                      <input
                        type="tel"
                        className="form_control"
                        placeholder="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        required
                        autoComplete="tel"
                        disabled={loading}
                      />
                    </div>

                    <div className="form_group">
                      <label aria-label="Subject">
                        <i className="far fa-map-marker-exclamation" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={onChange}
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="form_group">
                      <label aria-label="Message">
                        <i className="far fa-pen-fancy" />
                      </label>
                      <textarea
                        className="form_control"
                        rows={3}
                        placeholder="Message"
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="form_group">
                      <button
                        className="main-btn primary-btn"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>

                      {status === "success" && (
                        <p style={{ marginTop: 12 }}>
                          Thanks — we’ve received your message.
                        </p>
                      )}
                      {status === "error" && (
                        <p style={{ marginTop: 12 }}>
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact section ======*/}

      {/*====== Start Info Section ======*/}
      <section className="info-section pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-one mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Get Consultations</span>
                  <h4 className="title">
                    Need Any Consultations to Build Gardening ?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-two mb-40 wow fadeInDown">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Request a Consultations</span>
                  <h4 className="title">
                    Get Every Single Update Or 24/7 Support
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Support &amp; Join</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-three mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-2.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Want to start a career?</span>
                  <h4 className="title">
                    Need Any Jobs Or Work With a Team Member?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}

      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};

export default Contact;
