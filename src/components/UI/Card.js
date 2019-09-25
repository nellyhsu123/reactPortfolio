import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const card = ({design, fontIcon, title, children}) => (
		<div className={`card text-center mb-3 ${design}`}>
			<div className="card-body">
				<FontAwesomeIcon icon={fontIcon} size="4x"/>
				<h3 className="pt-3">{title}</h3>
				{children}
			</div>
		</div>
)

export default card