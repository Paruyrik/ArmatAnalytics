import React from "react";
import Layout from "../components/Layout";
import Typed from "react-typed";

const Home = () => (
  <Layout>
    <main id="content">
      <div
        className="bg-img-hero-center"
        style={{
          backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`, backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
        }}
      >
        <div className="container space-2 space-4-top--lg space-3-bottom--lg">
          <div className="w-md-75">
            <div className="mb-7">
              <span className="d-block text-white text-uppercase mb-2">
                Make difference
              </span>
              <h1 className="display-2 font-size-48--md-down text-white">
                We are &nbsp;
                <Typed
                  strings={["creative", "funny", "Space"]}
                  typeSpeed={60}
                  loop={true}
                  backSpeed={25}
                  backDelay={3000}
                />
              </h1> 
            </div>
          </div>
        </div>
      </div>
      <div className="container space-2 servicesCards">
        <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
          <span className="u-label u-label--sm u-label--purple mb-3">
            Space features
          </span>
          <h2 className="h3">Key features of Space template</h2>
          <p>
            Space creative technology company providing key digital services.
            Focused on helping our clients to build a successful business on web
            and mobile.
          </p>
        </div>

        <div className="card-deck d-block d-lg-flex">
          <div className="card card-frame mb-4 mb-lg-0">
            <a className="card-body p-4" href="#">
              <span className="d-block text-muted text-right font-weight-medium mb-3">
                01
              </span>
              <img
                className="max-width-9 mb-2"
                src="..\..\assets\svg\components\creative-primary-icon.svg"
                alt="Image Description"
              />
              <h4 className="h6 text-dark mb-1">Creative</h4>
              <p className="mb-0">
                This is where we sit down, grab a cup of coffee and dial in the
                details.
              </p>
            </a>
          </div>

          <div className="card card-frame mb-4 mb-lg-0">
            <a className="card-body p-4" href="#">
              <span className="d-block text-muted text-right font-weight-medium mb-3">
                02
              </span>
              <img
                className="max-width-9 mb-2"
                src="..\..\assets\svg\components\services-primary-icon.svg"
                alt="Image Description"
              />
              <h4 className="h6 text-dark mb-1">Features</h4>
              <p>
                Now that we've aligned the details, it's time to get things
                mapped out and organized.
              </p>
            </a>
          </div>

          <div className="card card-frame mb-4 mb-lg-0">
            <a className="card-body p-4" href="#">
              <span className="d-block text-muted text-right font-weight-medium mb-3">
                03
              </span>
              <img
                className="max-width-9 mb-2"
                src="..\..\assets\svg\components\responsive-primary-icon.svg"
                alt="Image Description"
              />
              <h4 className="h6 text-dark mb-1">Responsive</h4>
              <p>The time has come to bring those ideas and plans to life.</p>
            </a>
          </div>

          <div className="card card-frame">
            <a className="card-body p-4" href="#">
              <span className="d-block text-muted text-right font-weight-medium mb-3">
                04
              </span>
              <img
                className="max-width-9 mb-2"
                src="..\..\assets\svg\components\develop-primary-icon.svg"
                alt="Image Description"
              />
              <h4 className="h6 text-dark mb-1">Develop</h4>
              <p>
                Whether through commerce or just an experience to tell your
                brand's story.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="container space-2-bottom space-3-bottom--lg">
        <div
          className="gradient-overlay-half-dark-v1 bg-img-hero-center"
          style={{
            backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
          }}
        >
          <div className="w-lg-50 p-9">
            <div className="mb-7">
              <span className="u-label u-label--sm u-label--light mb-2">
                Space on the go
              </span>
              <h2 className="text-white">Space on mobile</h2>
              <p className="text-white">
                Don't miss anything out because you're on the move. Stay
                connected.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-xs btn-dark text-left mb-2 mb-md-0 mr-md-2"
            >
              <span className="media align-items-center">
                <i className="fab fa-apple fa-3x mr-3"></i>
                <span className="d-block">
                  <span className="d-block">Download on the</span>
                  <strong className="d-block font-size-14">App Store</strong>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="btn btn-xs btn-dark text-left mb-2 mb-md-0"
            >
              <span className="media align-items-center">
                <i className="fab fa-google-play fa-3x mr-3"></i>
                <span className="d-block">
                  <span className="d-block">Get it on</span>
                  <strong className="d-block font-size-14">Google Play</strong>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container space-2 space-3--lg">
          <div className="row justify-content-lg-between align-items-lg-center">
            <div className="col-lg-5 order-lg-2 mb-9 mb-lg-0">
              <div className="mb-5">
                <span className="u-label u-label--sm u-label--purple mb-3">
                  About Us
                </span>
                <h2 className="h3">
                  We always welcome keen to learn folks to our team
                </h2>
                <p>
                  The time has come to bring those ideas and plans to life. This
                  is where we really begin to visualize your napkin sketches and
                  make them into beautiful pixels.
                </p>
                <p>
                  Now that your brand is all dressed up and ready to party, it's
                  time to release it to the world. By the way, let's celebrate
                  already.
                </p>
              </div>

              <a className="btn btn-sm btn-primary" href="index.html">
                Learn More <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>

            <div className="col-lg-6 order-lg-1">
              <div
                className="cbp"
                data-layout="mosaic"
                data-animation="quicksand"
                data-x-gap="15"
                data-y-gap="15"
                data-load-more-selector="#cubeLoadMore"
                data-load-more-action="auto"
                data-load-items-amount="4"
                data-media-queries='[
                {"width": 1500, "cols": 4},
                {"width": 1100, "cols": 4},
                {"width": 800, "cols": 3},
                {"width": 480, "cols": 2},
                {"width": 400, "cols": 2}
            ]'
              >
                <div className="cbp-item">
                  <div className="cbp-caption">
                    <img
                      src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>
                <div className="cbp-item">
                  <div className="cbp-caption">
                    <img
                      src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>
                <div className="cbp-item">
                  <div className="cbp-caption">
                    <img
                      src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>

                <div className="cbp-item">
                  <div className="cbp-caption">
                    <img
                      src="https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    <div className="container space-2 space-3--lg">
      <div className="row justify-content-lg-between">
        <div className="col-md-6 mb-9 mb-md-0">
 
          <div className="mb-7">
            <span className="u-label u-label--sm u-label--purple mb-3">Contact Us</span>
            <h2 className="h3">Should you have questions or concerns, contact us</h2>
            <p>We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.</p>
          </div> 
          <div className="bg-white shadow-sm rounded p-2 mb-5">
            <div id="GMapCustomized-light" className="js-g-map embed-responsive embed-responsive-21by9 min-height-280 rounded" data-type="custom" data-lat="40.674" data-lng="-73.946" data-zoom="12" data-title="Agency" data-styles='[["", "", [{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]], ["", "labels", [{"visibility":"on"}]], ["water", "", [{"color":"#bac6cb"}]] ]' data-pin="true" data-pin-icon="../../assets/img/map-markers/map-marker1.png"></div>
          </div> 
          <div className="media">
            <h5 className="h6 d-flex mr-3">Office hours:</h5>
            <div className="media-body">
              <small className="d-block text-muted">Monday - Friday: 09:00 AM - 06:00 PM</small>
              <small className="d-block text-muted">Closed on Sunday &amp; Holidays</small>
            </div>
          </div> 
        </div>

        <div className="col-md-6 col-lg-5 d-flex align-items-end gradient-overlay-half-dark-v2 bg-img-hero height-600 px-0" data-bg-img-src="../../assets/img/500x700/img1.jpg">
          <div className="w-100 text-center shadow-sm p-5">
 
            <div className="mb-5">
              <h3 className="text-white">London, <strong className="text-primary">England</strong></h3>
              <p className="text-white">Unit 25 Suite 3, 925 Prospect PI, Beach Resort, 23001</p>
            </div> 
            <div className="mb-5">
              <h4 className="h6 text-primary">Phone number</h4>
              <span className="d-block text-white">+01 (0) 333 444 55</span>
            </div> 
            <form className="js-validate js-form-message">
              <div className="js-focus-state input-group form form--no-brd form--no-addon-brd">
                <input type="email" className="form-control form__input" name="email" required="" placeholder="Enter your email address" aria-label="Enter your email address" />
                <span className="input-group-append form__append">
                  <button type="submit" className="btn btn-sm btn-primary">Subscribe</button>
                </span>
              </div>
            </form> 
          </div>
        </div>
      </div>
    </div> 

    </main>
  </Layout>
);

export default Home;
