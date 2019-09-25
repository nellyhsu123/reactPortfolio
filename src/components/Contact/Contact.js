import React from 'react'


import Section from '../UI/Section'
import H1 from '../UI/H1'

import './Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import ProfilePic from '../../imgs/profile_pic.jpg'


const sectionId = 'contact'
const sectionDesign = 'text-secondary text-center p-5'

const contact = () => (
	<Section design={sectionDesign} sectionId={sectionId}>
		<div className='col-md-12'>
			<H1>CONTACT ME</H1>
		</div>
		<div className='col-sm-4 offset-sm-4'>
			<img src={ProfilePic} className='img-fluid rounded-circle' alt='profile_pic' />
		</div>
		<div className='col-sm-4' />
		<div className='col-md-12 mt-3'>
			<a href='https://www.linkedin.com/in/nelson-hsu-6a35a510b/' target='_blank' rel="noopener noreferrer" className='btn px-2 changeOnHover'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
			<a href='https://github.com/nellyhsu123' target='_blank' rel="noopener noreferrer" className='btn px-2 changeOnHover'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
			<a href='mailto:nellyhsu123@gmail.com' className='btn px-2 changeOnHover'><FontAwesomeIcon icon={faEnvelope} size='2x' /></a>
		</div>
	</Section>
)

export default contact