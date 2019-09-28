import React from 'react';

import Project from './Project/Project';

import PortfolioWebPic from '../../../imgs/portfolioWebsitePic.png';
import SocialApe from '../../../imgs/socialApe.PNG';

const projs = [
  {
    image: PortfolioWebPic,
    imgAlt: 'PortfolioWebsitePic',
    imgDes: 'Portfolio Website',
    link: 'https://thenelsonhsu.com'
  },
  {
    image: SocialApe,
    imgAlt: 'SocialApe',
    imgDes: 'Social Ape',
    link: 'https://socialape-ce300.firebaseapp.com'
  },
  {
    image: 'https://picsum.photos/600/300',
    imgAlt: 'randomImage',
    imgDes: 'Coming Soon...',
    link: 'https://socialape-ce300.firebaseapp.com'
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
            link={proj.link}
          />
        </div>
      ))}
    </div>
  </div>
);

export default projectGallery;
