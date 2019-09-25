import React from 'react'

import H1 from './UI/H1'
import ProjectGallery from './UI/ProjectGallery/ProjectGallery'
import { firstOffsetDesign } from '../utility/sectionDesigns'

const secId = 'projects'

const projects = () => (
	<section className={firstOffsetDesign} id={secId}>
		<H1>Projects</H1>
		<ProjectGallery />
	</section>
)

export default projects