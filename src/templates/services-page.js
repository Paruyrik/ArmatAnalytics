import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "react-grid-gallery";
import ServiceFeatures from "../components/ServiceFeatures";

export const ServicesPageTemplate = ({
  mainImage,
  images,
  heading,
  subheading,
  title,
  content,
  contentComponent,
  intro,
  mainpitch,
  sortDescription,
  longDescription,
  featuredimage,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <main id="content"> 
        <div
          className="bg-img-hero-center"
          style={{
            // backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
            backgroundImage: `url(${
              !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="container space-2 space-4-top--lg space-3-bottom--lg">
            <div className="w-md-75">
              <div className="mb-7">
                <span className="d-block text-white text-uppercase mb-2">
                  {heading}
                </span>
                <h1 className="display-2 font-size-48--md-down text-white">
                  {subheading} &nbsp;
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container space-2-bottom space-3-bottom--lg serviceSingePage">
          <div className="card-deck d-block d-lg-flex card-lg-gutters-2">
            <div className="card card-frame mb-3">
              <span className="card-body p-4">
                <div className="media">
                  <img
                    className="max-width-9 mb-2"
                    src={featuredimage.childImageSharp.fluid.src}
                    alt="Image Description"
                  />
                  <div className="media-body px-4">
                    <h4 className="h6 text-dark mb-1">{title}</h4>
                    <p className="mb-0">{sortDescription}</p>
                    <p className="mb-0">{longDescription}</p>
                    <p className="mt-10"><PageContent content={content} /></p>
                  </div> 
                </div>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

ServicesPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  sortDescription: PropTypes.string,
  longDescription: PropTypes.string,
};

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ServicesPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        sortDescription={post.frontmatter.sortDescription}
        longDescription={post.frontmatter.longDescription}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ServicesPage;

export const servicesPageQuery = graphql`
  query ServiceId($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        sortDescription
        longDescription
        tags
        subheading
        heading
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

// const IMAGES = [
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 200,
//     // isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 200,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     caption: "Boats (Jeshu John - designerspics.com)",
//   },

//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     thumbnail:
//       "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 200,
//   },
//   {
//     src: "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
//     thumbnail:
//       "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//   },
// ];
