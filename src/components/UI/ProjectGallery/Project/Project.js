import React, { Fragment } from 'react';

import './Project.css';

const project = ({ imgSrc, imgAlt, imgDes }) => (
  <Fragment>
    <img src={imgSrc} className="img-fluid w-100 h-100" alt={imgAlt} />
    <div className="overlay">
      <h4 className="overlay-header">{imgDes}</h4>
      <a href="#" className="overlay-text btn btn-secondary">
        See Website
      </a>
    </div>
  </Fragment>
);

export default project;
