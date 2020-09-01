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
                  Hire Us
                </h1>
              </div>
            </div>
          </div>

          <div className="container space-2 contactTextFont">
            <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
              <span className="u-label u-label--sm u-label--purple mb-3">
                Hire us
              </span>
              <h2 className="h3">Got a project for us?</h2>
              <p>
                We help brands and platforms turn big ideas into beautiful
                digital products and experiences.
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
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <label className="h6 small d-block text-uppercase mb-3 mb-lg-0">
                        Your name:
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group form">
                        <input
                          className="form-control form__input"
                          type={"text"}
                          name={"name"}
                          onChange={this.handleChange}
                          id={"name"}
                          required={true}
                          placeholder="Your Full name"
                          aria-label="Your Full name"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <label className="h6 small d-block text-uppercase mb-3 mb-lg-0">
                        Your Email ADDRESS:
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group form">
                        <input
                          className="form-control form__input"
                          type={"email"}
                          name={"email"}
                          onChange={this.handleChange}
                          id={"email"}
                          required={true}
                          placeholder="Your email address"
                          aria-label="Your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />
                  <div class="mb-5">
                    <label className="h6 small d-block text-uppercase mb-3">
                      Your Message:
                    </label>
                    <div className="input-group form">
                      <textarea
                        rows="4"
                        className="form-control form__input"
                        type={"text"}
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                        placeholder="Hi there, I would like to ..."
                        aria-label="Hi there, I would like to ..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary mb-4" type="submit">
                      Let's Start Working Together
                    </button>
                    <p className="small">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    );
  }
}
