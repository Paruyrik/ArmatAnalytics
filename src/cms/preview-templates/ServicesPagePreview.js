import React from "react";
import PropTypes from "prop-types";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  //   if (data) {
  //     return (
  //       <ServicesPageTemplate
  //       // images={getAsset(data.images)}
  //       // intro={data.intro || { blurbs: [] }}
  //       // mainpitch={data.mainpitch || {}}
  //         featuredimage={getAsset(data.featuredimage)}
  //         title={entry.getIn(["data", "title"])}
  //         subheading={data.subheading}
  //         heading={data.heading}
  //         sortDescription={data.sortDescription}
  //         longDescription={data.longDescription}
  //         content={widgetFor("body")}
  //       />
  //     );
  //   } else {
  //     return <div>Loading...</div>;
  //   }
  // };

  return (
    <ServicesPageTemplate
      featuredimage={getAsset(data.featuredimage)}
      subheading={entry.getIn(["data", "subheading"])}
      heading={entry.getIn(["data", "heading"])}
      sortDescription={entry.getIn(["data", "sortDescription"])}
      longDescription={entry.getIn(["data", "longDescription"])}
      content={widgetFor("body")} 
      title={entry.getIn(["data", "title"])}
    />
  );
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default ServicesPagePreview;
