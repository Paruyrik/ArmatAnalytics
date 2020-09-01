import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <main id="content">
          <div
            className="gradient-overlay-half-dark-v2 bg-img-hero"
            style={{
              backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
              backgroundPosition: `center`,
              backgroundAttachment: `fixed`,
              // backgroundImage: `url(${
              //   !!featuredimage.childImageSharp
              //     ? featuredimage.childImageSharp.fluid.src
              //     : featuredimage
              // })`,
              // backgroundPosition: `top left`,
              // backgroundAttachment: `fixed`,
            }}
          >
            <div className="container space-2 space-4-top--lg space-3-bottom--lg">
              <div className="w-lg-60 text-center mx-lg-auto">
                <h1 className="display-2 font-size-48--md-down text-white mb-0">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>

          <div className="container space-2 contactTextFont">
            <div className="row">
              <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
                <h2 className="h4">London, England</h2>
                <span className="d-block text-secondary">Office</span>

                <hr className="my-5" />
                <address>
                  <ul className="list-unstyled text-secondary">
                    <li className="media align-items-center pb-2">
                      <img
                        className="max-width-5 mr-2"
                        src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                        alt="Image Description"
                      />
                      <div className="media-body">
                        153 Williamson Plaza, Maggieberg, MT 09514
                      </div>
                    </li>

                    <li className="media align-items-center py-2">
                      <img
                        className="max-width-5 mr-2"
                        src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                        alt="Image Description"
                      />
                      <div className="media-body">Mon-Fri: 9 AM to 6 PM</div>
                    </li>

                    <li className="media align-items-center py-2">
                      <img
                        className="max-width-5 mr-2"
                        src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                        alt="Image Description"
                      />
                      <div className="media-body">(0161) 347 8854</div>
                    </li>
                  </ul>
                </address>
              </div>
              <div className="col-sm-6 col-md-4 mb-7 mb-sm-0">
                <h3 className="h4">Los Angeles, US</h3>
                <span className="d-block text-secondary">Office</span>

                <hr className="my-5" />

                <address>
                  <ul className="list-unstyled text-secondary">
                    <li className="media align-items-center pb-2">
                      <img
                        className="max-width-5 mr-2"
                        src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                        alt="Image Description"
                      />
                      <div className="media-body">
                        728 Dooley Branch, Beckershire, LA 63598-2909
                      </div>
                    </li>

                    <li className="media align-items-center py-2">
                      <img
                        className="max-width-5 mr-2"
                        src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                        alt="Image Description"
                      />
                      <div className="media-body">Mon-Fri: 9 AM to 6 PM</div>
                    </li>

                    <li className="media align-items-center py-2">
                      <img
                        className="max-width-5 mr-2"
                        src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                        alt="Image Description"
                      />
                      <div className="media-body">(364) 106-7572</div>
                    </li>
                  </ul>
                </address>
              </div>
            </div>
          </div>

          <hr className="my-0" />

          <div className="container space-2 space-3--lg">
            <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
              <span className="u-label u-label--sm u-label--purple mb-3">
                Leave a Message
              </span>
              <h2 className="h3">Tell us about yourself</h2>
              <p>
                Whether you have questions or you would just like to say hello,
                contact us.
              </p>
            </div>

            <section className="section">
              <div className="container">
                <form
                  name="file-upload"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="file-upload" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mb-6">
                      <div className="input-group form">
                        <input
                          className="form-control form__input"
                          type={"text"}
                          name={"name"}
                          onChange={this.handleChange}
                          id={"name"}
                          required={true}
                          placeholder="Your name"
                          aria-label="Your name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-6">
                      <div className="input-group form">
                        <input
                          className="form-control form__input"
                          type={"email"}
                          name={"email"}
                          onChange={this.handleChange}
                          id={"email"}
                          required={true}
                          placeholder="Your email"
                          aria-label="Your email"
                        />
                      </div>
                    </div>

                    <div className="w-100"></div>

                    <div className="col-sm-6 mb-6">
                      <div className="input-group form">
                        <input
                          className="form-control form__input"
                          type={"text"}
                          name={"subject"}
                          onChange={this.handleChange}
                          id={"subject"}
                          required={true}
                          placeholder="Subject"
                          aria-label="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-6">
                      <div className="input-group form">
                        <input
                          className="form-control form__input"
                          type={"number"}
                          name={"phone"}
                          onChange={this.handleChange}
                          id={"phone"}
                          required={true}
                          placeholder="Your phone number"
                          aria-label="Your phone number"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 mb-9">
                      <div className="input-group form">
                        <textarea
                          rows="6"
                          className="form-control form__input"
                          type={"text"}
                          name={"message"}
                          onChange={this.handleChange}
                          id={"message"}
                          required={true}
                          placeholder="How can we help you?"
                          aria-label="How can we help you?"
                        ></textarea>
                      </div>
                    </div>

                    <div className="field">
                      <div className="file">
                        <label className="file-label">
                          <input
                            className="file-input"
                            type="file"
                            name="attachment"
                            onChange={this.handleAttachment}
                          />
                          <span className="file-cta">
                            <span className="file-label">Choose a file…</span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-wide mb-4"
                        type="submit"
                      >
                        Send
                      </button>
                      <p className="small">
                        We'll get back to you in 1-2 business days.
                      </p>
                    </div>
                  </div>
                </form>
              </div> 
          </section>
          <hr className="my-0" />

          <div className="container space-2 space-3--lg">
            <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
              <span className="u-label u-label--sm u-label--purple mb-3">
                Our location
              </span>
              <h2 className="h3">Find our location through Map</h2>
            </div>

            <div
              id="GMapCustomized-light"
              className="js-g-map embed-responsive embed-responsive-21by9"
              data-type="custom"
              data-lat="40.674"
              data-lng="-73.946"
              data-zoom="12"
              data-title="Agency"
              data-styles='[["", "", [{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]], ["", "labels", [{"visibility":"on"}]], ["water", "", [{"color":"#bac6cb"}]] ]'
              data-pin="true"
              data-pin-icon="../../assets/img/map-markers/map-marker1.png"
            ></div>
          </div>
          </div>
        </main>
      </Layout>
    );
  }
}
