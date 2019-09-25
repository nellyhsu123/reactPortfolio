import React from 'react';

import Project from './Project/Project';

import PortfolioWebPic from '../../../imgs/portfolioWebsitePic.png';
import SocialApe from '../../../imgs/socialApe.PNG';

const projs = [
  {
    image: PortfolioWebPic,
    imgAlt: 'PortfolioWebsitePic',
    imgDes: 'Portfolio Website'
  },
  { image: SocialApe, imgAlt: 'SocialApe', imgDes: 'Social Ape' },
  {
    image: 'https://picsum.photos/600/300',
    imgAlt: 'randomImage2',
    imgDes: 'Coming Soon...'
  }
];

const projectGallery = () => (
  <div className="container-fluid p-0">
    <div className="row no-gutters">
      {projs.map(proj => (
        <div key={proj.imgDes} className="col-lg-4">
          <Project
            imgSrc={proj.image}
            imgAlt={proj.imgAlt}
            imgDes={proj.imgDes}
          />
        </div>
      ))}
    </div>
  </div>
);

export default projectGallery;
