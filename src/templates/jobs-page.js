import React from "react";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

export const JobsPageTemplate = ({
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
    <Layout>
      <main id="content">
        <div
          className="bg-img-hero-bottom"
          style={{
            // backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
            backgroundImage: `url(${
              !!featuredimage.childImageSharp
                ? featuredimage.childImageSharp.fluid.src
                : featuredimage
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="d-flex align-items-end height-600">
            <div className="container space-2-bottom">
              <div className="row align-items-sm-end">
                <div className="col-sm-6 mb-4 mb-sm-0">
                  <h1 className="text-white">{heading}</h1>
                  <ul className="list-unstyled text-white mb-0">
                    <li className="d-block">{subheading}</li>
                    <li className="d-block">At Space</li>
                    <li className="d-block">Date Posted: June 11, 2018</li>
                  </ul>
                </div>
                <div className="col-sm-6 text-sm-right">
                  <a
                    className="btn btn-primary btn-wide"
                    href="https://themes.getbootstrap.com/product/space-multipurpose-responsive-template/"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container space-2 space-3--lg">
          <div className="row">
            <div className="col-lg-8 offset-2 order-lg-1">
              <div className="pr-lg-4">
                <div className="mb-4">
                  <h2>{title}</h2>
                  <h2 className="h3">Job description</h2>
                </div>

                <p>
                  Our Hardware organization is expanding and growing. From
                  innovative products like Space Home, Chromecast, Pixel Phone,
                  Pixelbook and more, the Product Management team works closely
                  with our engineers to guide products from conception to
                  launch. Product Managers are responsible for guiding products
                  throughout the execution cycle, focusing specifically on
                  analyzing, positioning, packaging, promoting and tailoring our
                  solutions to all the markets where Space does business. As
                  part of the Product Management team, you bridge the technical
                  and business worlds as you design products that our customers
                  love. You have a bias toward action and can break down complex
                  problems into steps that drive product development at Space
                  speed.
                </p>

                <p>
                  Space's mission is to organize the world's information and
                  make it universally accessible and useful. Our Consumer
                  Hardware team researches, designs, and develops new
                  technologies and hardware to make our user's interaction with
                  computing faster, more powerful, and seamless. Whether finding
                  new ways to capture and sense the world around us, advancing
                  form factors, or improving interaction methods, our Consumer
                  Hardware team is making people's lives better through
                  technology.
                </p>

                <div className="mb-5"></div>

                <h3 className="h6 text-secondary">Responsibilities:</h3>

                <ul className="text-secondary">
                  <li>
                    Partner closely with Engineering, Sales, Marketing, Finance
                    and other product teams across Google to understand their
                    vision, objectives and opportunities for strategic
                    alignment.
                  </li>
                  <li>
                    Define overall strategy, product roadmap and
                    technical/feature specifications for new products based on
                    long-term product vision, user needs, technical and market
                    trends, and platform capabilities.
                  </li>
                  <li>
                    Manage product life-cycle from inception through to
                    execution and productization.
                  </li>
                  <li>
                    Manage the product execution working closely with
                    Engineering, R&D, Industrial Design, Product Design and
                    partner teams to engineer the best experience for our users.
                  </li>
                  <li>
                    Evaluate mechanical design, CMF and production decisions as
                    part of the product development lifecycle.
                  </li>
                </ul>

                <div className="mb-5"></div>

                <h3 className="h6 text-secondary">Minimum qualifications:</h3>

                <ul className="text-secondary">
                  <li>
                    BA/BS degree in Electrical Engineering, Mechanical
                    Engineering, Computer Science, or a related technical field,
                    or equivalent practical experience.
                  </li>
                  <li>
                    5 years of Product Management experience, with experience in
                    consumer product launches (e.g. shipping consumer electronic
                    products, etc).
                  </li>
                  <li>
                    Experience in working with cross-functional teams, including
                    Electrical Engineering, Mechanical Engineering,
                    Industrial/Product Design, Sales, Marketing, Finance, Supply
                    Chain, Customer Support, Partnerships, and Legal teams.
                  </li>
                  <li>
                    Experience with consumer hardware development life cycles
                    and ODM/CM working models. Experience with personal, mobile
                    and embedded device operating systems, and SW applications
                    development life cycles.
                  </li>
                </ul>

                <div className="mb-5"></div>

                <h3 className="h6 text-secondary">Preferred qualifications:</h3>

                <ul className="text-secondary">
                  <li>MBA degree.</li>
                  <li>
                    Experience in business operations. Demonstrated passion and
                    talent for building and scaling consumer products that are
                    technically excellent, aesthetically appealing and easy to
                    use.
                  </li>
                  <li>
                    Team-first outlook, with the ability to build great working
                    relationships with peers across functions.
                  </li>
                  <li>
                    Strong technical, analytical and cross-functional
                    collaboration skills.
                  </li>
                  <li>
                    Excellent communication and interpersonal skills, with the
                    ability to champion initiatives internally and externally
                    and communicate with executives and external partners.
                  </li>
                  <li>Ability and willingness to travel.</li>
                </ul>

                <div className="mb-5"></div>

                <p>
                  We're a purpose-driven company whose beliefs are the
                  foundation for how we conduct business every day. We hold
                  ourselves to our One Team Behaviors which demand that we hold
                  the highest ethical standards, to empower an open and diverse
                  workplace, and strive to treat everyone who is touched by our
                  business with dignity and respect. Our employees challenge the
                  status quo, ask questions, and find solutions. We want to
                  break down barriers to financial empowerment. Join us as we
                  change the way the world defines financial freedom.
                </p>

                <div className="mb-5"></div>

                <a
                  className="btn btn-sm btn-primary btn-wide"
                  href="https://themes.getbootstrap.com/product/space-multipurpose-responsive-template/"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <PageContent content={content} /> */}
    </Layout>
  );
};
JobsPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  sortDescription: PropTypes.string,
  longDescription: PropTypes.string,
};

const JobsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <JobsPageTemplate
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

JobsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default JobsPage;

export const JobsPageQuery = graphql`
  query JobId($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
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
