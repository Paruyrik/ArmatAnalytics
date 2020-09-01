import React from "react";

import Layout from "../../components/Layout";
import Service from "../../components/service";
import Gallery from "react-grid-gallery";

export default class ServiceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <!-- Hero Section --> */}
        <div className="gradient-half-primary-v1">
          <div
            className="bg-img-hero"
            style={{
              backgroundImage: `url(https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg)`,
              backgroundPosition: `top left`,
              backgroundAttachment: `fixed`,
            }}
          >
            <div className="container space-2 space-4-top--lg space-3-bottom--lg">
              <div className="w-md-80 w-lg-60 text-center mx-auto">
                {/* <!-- Title --> */}
                <div className="mb-5">
                  <h1 className="display-4 font-size-48--md-down text-white">
                    Services
                  </h1>
                  <p className="lead text-white">
                    We help startups and digital agencies launch projects on
                    time, with no pain.
                  </p>
                </div>
                {/* <!-- End Title --> */}

                {/* <!-- Buttons --> */}
                <a
                  className="btn btn-light btn-wide mb-2 mb-md-0 mr-sm-2"
                  href="../pages/hire-us.html"
                >
                  Hire Us
                </a>
                <a
                  className="btn btn-dark btn-wide mb-2 mb-md-0"
                  href="../pages/contacts-agency.html"
                >
                  Contact Us
                </a>
                {/* <!-- End Buttons --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Hero Section --> */}

        <div className="container space-2 space-3--lg">
          <div className="row justify-content-lg-between align-items-lg-center">
            <div className="col-lg-5 mb-9 mb-lg-0">
              <div className="mb-5">
                <h2>The power of Armat</h2>
                <p className="lead">
                  The time has come to bring those ideas and plans to life. This
                  is where we really begin to visualize your napkin sketches and
                  make them into beautiful pixels.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <Gallery images={IMAGES} />
            </div>
          </div>
        </div>
        <hr className="my-0" />

        <section className="section">
          <div className="container">
            <div className="content">
              <div className="text-center">
                <span className="u-label u-label--sm u-label--purple mb-3">
                  Services
                </span>
              </div>
              <Service />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    // isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 200,
  },
  {
    src: "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
    thumbnail:
      "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];
