import React from 'react';

const section = ({ sectionId, design, children }) => (
  <section id={sectionId} className={design}>
    <div className="container">
      <div className="row">{children}</div>
    </div>
  </section>
);

export default section;
