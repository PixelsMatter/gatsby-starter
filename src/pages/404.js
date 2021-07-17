
// Libraries
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'

const IndexPage = () => (
	<Layout>
		<SEO title='404 | PixelsMatter'/>
		<Container>
			<h1>Nothing To See Here</h1>
			<p>Sorry, we can't seem to find the page you're looking for.</p>
			<p>Click the button below and we'll take you back to the home page.</p>
			<Link className='btn' to='/'>Home</Link>
		</Container>
	</Layout>
)

export default IndexPage
