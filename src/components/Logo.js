
// Libraries
import React from 'react'
import { Link } from 'gatsby'

// Images
import logoPath from '../img/logo.svg'

/*
* gatsby image is not required here as SVG is vector based 
* and doesn't require any optimisation
*/

const Logo = () => (
	<Link className='logo' to='/'>
		<img className='logo__img' width='450' height='56' src={logoPath} alt='PixelsMatter logo'/>
	</Link>
)

export default Logo
