import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Logo from '../components/Logo'

const IndexPage = () => (
	<Layout>
		<SEO/>
		<Container>
			<Logo/>
			<p>This is a fresh instance of the PixelsMatter Gatsby starter which includes Preact, SCSS using a variant
				of 7-1 architecture, BEM, perfect Lighthouse scores, offline support, Google Analytics,
				sitemaps &amp; plenty more good stuff!</p>
			<a className='btn' href='https://github.com/PixelsMatter/gatsby-template' target='_blank' rel='noreferrer'>GitHub
				Repo</a>
			<a className='btn btn--alt' href='https://pixelsMatter.io' target='_blank' rel='noreferrer'>Website</a>
		</Container>
	</Layout>
)

export default IndexPage