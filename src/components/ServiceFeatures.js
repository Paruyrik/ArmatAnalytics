import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";


const FeatureGrid = ({ gridItems }) => (
  <div>
    <div className="card-deck d-block d-lg-flex">
      {gridItems.map((item, index) => (
        <div key={item.text} className="card card-frame mb-4 mb-lg-0">
          <a className="card-body p-4" href="#">
            <span className="d-block text-muted text-right font-weight-medium mb-3">              
              {index + 1}
            </span>
            <PreviewCompatibleImage imageInfo={item} />
            <h4 className="h6 text-dark mb-1">{item.category}</h4>
            <p className="mb-0">{item.text}</p>
          </a>
        </div>
      ))}
    </div>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
