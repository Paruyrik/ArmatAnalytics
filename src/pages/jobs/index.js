import React from "react";

import Layout from "../../components/Layout";
import Jobs from "../../components/jobs";
import Typed from 'react-typed'

export default class JobsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="gradient-overlay-half-dark-v1 bg-img-hero"
          style={{
            backgroundImage: `url(https://caso.com/wp-content/uploads/2019/12/Team-Photo-scaled.jpg)`,
            backgroundPosition: "center",
          }}
        >
          <div className="container space-2 space-4-top--lg space-3-bottom--lg">
            <div className="w-md-75">
              <div className="mb-7">
                <h1 className="display-3 font-size-48--md-down text-white mb-4">
                  <strong>
                    &nbsp;
                    <Typed
                      strings={["Build", "Design", "Code"]}
                      typeSpeed={130}
                      loop={true}
                      backSpeed={50}
                      backDelay={3000}
                    />
                  </strong>
                  for everyone
                </h1>
                <div className="w-md-75 w-lg-60 mx-md-auto">
                  <p className="lead text-white">
                    We are driven by this purpose, and we uphold our cultural
                    values of collaboration, innovation, wellness and inclusion
                    as our guide for making decisions and conducting business
                    every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <Jobs />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
