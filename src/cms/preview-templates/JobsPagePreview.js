import React from "react";
import PropTypes from "prop-types";
import { JobsPageTemplate } from "../../templates/jobs-page";

const JobsPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
//   if (data) {
//     return (
//       <JobsPageTemplate
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
  <JobsPageTemplate
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

JobsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default JobsPagePreview;
