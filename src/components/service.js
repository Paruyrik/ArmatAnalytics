import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Moment from "react-moment";

class Service extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    //  const IMAGES = [
    //     {
    //       src: mainImage.childImageSharp.fluid.src,
    //       thumbnail: mainImage.childImageSharp.fluid.src,
    //       thumbnailWidth: 320,
    //       thumbnailHeight: 200,
    //       // isSelected: true,
    //       caption: "After Rain (Jeshu John - designerspics.com)",
    //     },
    //   ];

    return (
      <main id="content">
        <div className="card-deck d-block d-lg-flex">
          {posts &&
            posts.map(({ node: post, index:index }) => (
              <div key={index} className="card card-frame mb-4 mb-lg-0">
                <Link className="card-body p-4" to={post.fields.slug}> 
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                    }}
                  />
                  <h4 className="h6 text-dark mb-1">
                    {post.frontmatter.title}
                  </h4>
                  <p className="mb-0">
                    {" "}
                    <p className="mb-0">{post.frontmatter.sortDescription}</p>
                  </p>
                </Link> 
              </div>
            ))}
        </div>
      </main>
    );
  }
}

Service.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ServiceQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "services-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date
                sortDescription
                longDescription
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
        }
      }
    `}
    render={(data, count) => <Service data={data} count={count} />}
  />
);
