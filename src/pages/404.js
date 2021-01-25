
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const IndexPage = () => (
	<Layout>
		<SEO title="404" />
		<Container>
			<h1>Nothing To See Here</h1>
			<p>Sorry, we can't seem to find the page you're looking for.</p><p>Click the button below and we'll take you back to the home page.</p>
			<Link className="btn" to="/" target="_blank" rel="noreferrer">Home</Link>
		</Container>
	</Layout>
)

export default IndexPage
