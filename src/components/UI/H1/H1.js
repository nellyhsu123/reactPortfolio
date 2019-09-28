import React, { Fragment } from 'react';

import './H1.css';

const h1 = ({ children }) => (
  <Fragment>
    <h1 className="mb-3">{children}</h1>
    <hr />
  </Fragment>
);

export default h1;
