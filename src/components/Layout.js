import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import "./Layout.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import BackToTop from "react-back-to-top-button";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
      <BackToTop 
        showOnScrollUp={false}
        showAt={10}
        speed={100}
        easing="easeOutSine"
        style={{
          fontSize: ".8125rem",
          borderRadius: "0.25rem",
          backgroundColor: "#21c87a",
          // opacity: .5,
          // display: "inline-flex",
          // justifyContent: "center",
          // alignItems: "center",
          color: "#fff",
          width: "2.5rem",
          height: "2.5rem",
          transition: "0.3s ease-out",
        }}
      >
        <span>
          <i className="fa fa-arrow-up u-go-to__inner"></i>
        </span>
      </BackToTop> 
    </div>
  );
};

export default TemplateWrapper;
