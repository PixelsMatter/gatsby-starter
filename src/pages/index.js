
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Logo from '../components/logo'

const IndexPage = () => (
	<Layout>
		<SEO />
		<Container>
			<Logo />
			<p>This is a fresh instance of the PixelsMatter Gatsby starter which includes Preact, SCSS using a variant of 7-1 architecture, BEM, perfect Lighthouse scores, offline support, Google Analytics, sitemaps &amp; plenty more good stuff!</p>
			<a className="btn" href="https://github.com/PixelsMatter/gatsby-template" target="_blank" rel="noreferrer">GitHub Repo</a>
			<a className="btn btn--alt" href="https://pixelsMatter.io" target="_blank" rel="noreferrer">Website</a>
		</Container>
	</Layout>
)

export default IndexPage
