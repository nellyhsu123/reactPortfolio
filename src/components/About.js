import React from 'react';

import Section from './UI/Section';
import H1 from './UI/H1/H1';
import { aboutDescription } from '../utility/descriptions.js';
import { firstOffsetDesign } from '../utility/sectionDesigns.js';

const secId = 'about';

const about = () => (
  <Section design={firstOffsetDesign} sectionId={secId}>
    <div className="offset-md-3 col-md-6">
      <H1>About</H1>
      <p>{aboutDescription}</p>
    </div>
  </Section>
);

export default about;
