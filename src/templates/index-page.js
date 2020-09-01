import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import ServiceFeatures from "../components/ServiceFeatures";
import BlogRoll from "../components/BlogRoll";
import Typed from "react-typed";
import Service from '../components/service'
import Gallery from "react-grid-gallery";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <main id="content">
    <div
      className="bg-img-hero-center"
      style={{
        //backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
      }}
    >
      <div className="container space-2 space-4-top--lg space-3-bottom--lg">
        <div className="w-md-75">
          <div className="mb-7">
            <span className="d-block text-white text-uppercase mb-2">
              {title}
            </span>
            <h1 className="display-2 font-size-48--md-down text-white">
              {subheading} &nbsp;
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
               <Gallery images={IMAGES} />
              </div>
            </div>
          </div>
        </div> 


    <div className="container space-2 servicesCards">
      <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
        <span className="u-label u-label--sm u-label--purple mb-3">
          {mainpitch.title}
        </span>
        <h2 className="h3">{mainpitch.subTitle}</h2>
        <p>{mainpitch.description}</p>
      </div>
       <Service />
      {/* <ServiceFeatures gridItems={intro.blurbs} /> */}
    </div>

    {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <ServiceFeatures gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div> */}
  </main>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        TypedStrings {
          text
        }
        heading
        subheading
        mainpitch {
          title
          subTitle
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            category
          }
          heading
          description
        }
      }
    }
  }
`;


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
  {
    src: "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
    thumbnail:
      "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 200,
  },
];