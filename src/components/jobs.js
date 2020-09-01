import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Moment from "react-moment";

class Jobs extends React.Component {
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
        <div className="container space-2 space-3--lg">
          <p className="col-sm-6 text-primary text-sm-right">Jobs</p>
          {posts &&
            posts.map(({ node: post, index }) => (
              <div className="mb-7">
                <Link
                  className="d-block text-dark card-frame rounded p-4"
                  to={post.fields.slug}
                >
                  <span className="row justify-content-sm-between align-items-sm-center">
                    <span className="col-sm-6 mb-2 mb-sm-0">
                      <p>{post.frontmatter.title}</p>
                      {post.frontmatter.sortDescription}
                      <small className="d-block text-muted">
                        Sydney, Australia
                      </small>
                    </span>
                    <span className="col-sm-6 text-primary text-sm-right">
                      Full time
                    </span>
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </main>
    );
  }
}

Jobs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query JobsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "jobs-page" } } }
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
    render={(data, count) => <Jobs data={data} count={count} />}
  />
);
