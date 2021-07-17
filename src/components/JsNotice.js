
// Libraries
import React from 'react'

// Components
import Container from './Container'

const JsNotice = () => (
	<noscript>
		<div className='js-notice'>
			<Container>
				<p className='js-notice__text'>You appear to have JavaScript disabled, please enable it for the best
					experience possible.</p>
			</Container>
		</div>
	</noscript>
)

export default JsNotice
