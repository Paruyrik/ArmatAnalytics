// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// import Content, { HTMLContent } from "../components/Content";

// export const OurWorkPageTemplate = ({
//   title,
//   date,
//   content,
//   contentComponent,
// }) => {
//   const PageContent = contentComponent || Content;

//   return (
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <div className="section">
//               <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
//                 {title}
//               </h2>
//               {date}
//               <PageContent className="content" content={content} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// OurWorkPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// };

// const OurWorkPage = ({ data }) => {
//   const { markdownRemark: post } = data;

//   return (
//     <Layout>
//       <OurWorkPageTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         date={post.frontmatter.date}
//         content={post.html}
//       />
//     </Layout>
//   );
// };

// OurWorkPage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export default OurWorkPage;

// export const OurWorkPageQuery = graphql`
//   query OurWorkPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "react-grid-gallery";
import { Link } from "gatsby";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 650,
    // thumbnailHeight: 480,
    // isSelected: true,
    caption: "See more",
    customOverlay: "some text",
    thumbnailCaption: (
      <a
        class="cbp-lightbox u-icon .u-icon--primar-custom rounded-circle"
        href="#"
      >
        <i class="fa fa-link u-icon__inner"></i>
      </a>
    ),
    rowHeight: 300,
    maxRows: 8,
    margin: 20,
    imageCountSeparator: "of",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 350,
    // thumbnailHeight: 200,
    caption: "Boats (Jeshu John - designerspics.com)",
    thumbnailCaption: (
      <a
        class="cbp-lightbox u-icon .u-icon--primar-custom rounded-circle"
        href="#"
      >
        <i class="fa fa-link u-icon__inner"></i>
      </a>
    ),
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 350,
    // thumbnailHeight: 200,
    thumbnailCaption: (
      <a
        class="cbp-lightbox u-icon .u-icon--primar-custom rounded-circle"
        href="#"
      >
        <i class="fa fa-link u-icon__inner"></i>
      </a>
    ),
  },
  {
    src: "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
    thumbnail:
      "https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg",
    thumbnailWidth: 350,
    // thumbnailHeight: 212,
    thumbnailCaption: (
      <a
        class="cbp-lightbox u-icon .u-icon--primar-custom rounded-circle"
        href="#"
      >
        <i class="fa fa-link u-icon__inner"></i>
      </a>
    ),
  },
];

const OurWorkPage = () => (
  <Layout>
    <main id="content">
      {/* <!-- Hero Section --> */}
      <div class="gradient-half-primary-v1">
        <div
          class="bg-img-hero"
          style={{
            backgroundImage: `url(https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg)`,
          }}
        >
          <div class="container space-2 space-4-top--lg space-3-bottom--lg">
            <div class="w-md-80 w-lg-60 text-center mx-auto">
              {/* <!-- Title --> */}
              <div class="mb-5">
                <h1 class="display-4 font-size-48--md-down text-white">
                  Portfolio grid
                </h1>
                <p class="lead text-white">
                  We help startups and digital agencies launch projects on time,
                  with no pain.
                </p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- Buttons --> */}
              <Link
                class="btn btn-light btn-wide mb-2 mb-md-0 mr-sm-2"
                to="/contact/hireUs"
              >
                Hire Us
              </Link>
              <Link class="btn btn-dark btn-wide mb-2 mb-md-0" to="/contact">
                Contact Us
              </Link>
              {/* <!-- End Buttons --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      {/* <!-- Cubeportfolio --> */}
      <div class="container u-cubeportfolio space-2 space-3--lg">
        {/* <!-- Filter --> */}
        <ul
          id="filterControls"
          class="list-inline cbp-l-filters-alignCenter mb-5"
        >
          <li
            class="list-inline-item cbp-filter-item cbp-filter-item-active u-cubeportfolio__item"
            data-filter="*"
          >
            All
          </li>
          <li
            class="list-inline-item cbp-filter-item u-cubeportfolio__item"
            data-filter=".branding"
          >
            Branding
          </li>
          <li
            class="list-inline-item cbp-filter-item u-cubeportfolio__item"
            data-filter=".abstract"
          >
            Abstract
          </li>
          <li
            class="list-inline-item cbp-filter-item u-cubeportfolio__item"
            data-filter=".graphic"
          >
            Graphic
          </li>
          <li
            class="list-inline-item cbp-filter-item u-cubeportfolio__item"
            data-filter=".illustration"
          >
            Illustration
          </li>
        </ul>
        {/* <!-- End Filter --> */}

        {/* <!-- Content --> */}
        <div class="mb-9">
          {/* <!-- Item --> */}
          <div class="cbp-item graphic">
            <div class="cbp-caption">
              <div
                style={{
                  display: "block",
                  minHeight: "1px",
                  width: "100%",
                  border: "1px solid #ddd",
                  overflow: "auto",
                  textAlign: "center",
                  background: "white",
                }}
              >
                <Gallery images={IMAGES} />
              </div>
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-alignCenter d-flex align-items-start">
                  {/* <div class="mb-auto p-3">
                    <h2 class="h5 mb-0">Remind me more</h2>
                    <p class="small mb-0">by Tiberiu Neamu</p>
                  </div> */}

                  <ul class="list-inline mt-auto ml-auto p-3 mb-0"></ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Item --> */}
        </div>
      </div>
    </main>
  </Layout>
);

export default OurWorkPage;
