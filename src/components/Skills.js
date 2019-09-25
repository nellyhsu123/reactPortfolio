import React from 'react'

import Section from './UI/Section'
import Card from './UI/Card'
import H1 from './UI/H1'
import { codingCardDescription, reactCardDescription, bootstrapCardDescription } from '../utility/descriptions.js'

import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const sectionId = 'skill-set'
const sectionDesign = 'p-5'
const cardDesign = 'bg-light text-secondary mb-4'

const cardItems = [
	{ fontA: faCode, cardTitle: 'Coding', cardDescription: codingCardDescription },
	{ fontA: faReact, cardTitle: 'ReactJS', cardDescription: reactCardDescription },
	{ fontA: faBootstrap, cardTitle: 'Bootstrap', cardDescription: bootstrapCardDescription }
]

const skills = () => (
	<Section design={sectionDesign} sectionId={sectionId}>
		<div className="col-md-12 text-center text-secondary">
			<H1>What I do</H1>
		</div>
		{cardItems.map(cardItem => (
			<div className='col-lg-4' key={cardItem.cardTitle}>
				<Card design={cardDesign} fontIcon={cardItem.fontA} title={cardItem.cardTitle} >
					<p className="pt-3">{cardItem.cardDescription}</p>
				</Card>
			</div>
		))}
	</Section>
)

export default skills