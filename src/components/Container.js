
// Libraries
import React from 'react'
import Classnames from 'classnames'

const Container = ({ children, fullWidth }) => (
	<div className={Classnames(['container', {'container--full-width': fullWidth}])}>
		{children}
	</div>
)

export default Container
