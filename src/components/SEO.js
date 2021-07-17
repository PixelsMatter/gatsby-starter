
// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

function SEO({ meta, title, description, lang, thumbnail, openGraph, twitterCard, schemaMarkup }) {
	const { site, defaultThumbnail } = useStaticQuery(
		graphql`
	 		query {
	 			site {
	 				siteMetadata {
	 					title
	 					description
	 					siteUrl
	 					humansTxt
	 					openGraph {
	 						type
	 						title
	 						description
	 						siteName
	 						url
	 					}
	 					twitterCard {
	 						card
	 						title
	 						description
	 						creator
	 						site
	 						domain
	 						url
	 					}
	 				}
	 			}
	 			defaultThumbnail: file(relativePath: { eq: "thumbnail.jpg" }) {
 					childImageSharp {
 						sizes(maxWidth: 1200) {
 							...GatsbyImageSharpSizes
 						}
 					}
 				}
	 		}
 		`
	)

	const siteMetadata = site?.siteMetadata,
	_title = title || siteMetadata?.title,
	_description = description || siteMetadata?.description,
	_thumbnail = defaultThumbnail.childImageSharp.sizes.src || thumbnail,
	siteUrl = siteMetadata?.siteUrl || '',
	humansTxt = siteMetadata?.humansTxt || ''

	// Get current page Open Graph data or fallback
	const _openGraph = {
		type: openGraph?.type || siteMetadata?.openGraph?.type || '',
		title: openGraph?.title || siteMetadata?.openGraph?.title || _title || '',
		siteName: openGraph?.siteName || siteMetadata?.openGraph?.siteName || '',
		description: openGraph?.description || siteMetadata?.openGraph?.description || _description || '',
		url: openGraph?.url || siteMetadata?.openGraph?.url || '',
		locale: openGraph?.locale || siteMetadata?.openGraph?.locale || 'en_GB',
		image: openGraph?.image || siteMetadata?.openGraph?.image || '',
		imageWidth: openGraph?.imageWidth || siteMetadata?.openGraph?.imageWidth || '1200',
		imageHeight: openGraph?.imageHeight || siteMetadata?.openGraph?.imageHeight || '630',
	}

	// Get current page Twitter Card data or fallback
	const _twitterCard = {
		card: twitterCard?.card || siteMetadata?.twitterCard?.card || 'summary_large_image',
		title: twitterCard?.title || siteMetadata?.twitterCard?.title || _title || '',
		description: twitterCard?.description || siteMetadata?.twitterCard?.description || _description || '',
		creator: twitterCard?.creator || siteMetadata?.twitterCard?.creator || '',
		site: twitterCard?.site || siteMetadata?.twitterCard?.site || '',
		domain: twitterCard?.domain || siteMetadata?.twitterCard?.domain || '',
		url: twitterCard?.url || siteMetadata?.twitterCard?.url || '',
		imageSrc: twitterCard?.imageSrc || siteMetadata?.twitterCard?.imageSrc || '',
	}

	// To-Do: Find a better place for the default data
	const _schemaMarkup = schemaMarkup ? schemaMarkup : {
		'@context': `https://schema.org`,
		'@type': `Organization`,
		name: `PixelsMatter`,
		alternateName: `PM`,
		description: `Gatsby starter`,
		url: `https://pixelsmatter.io`,
		logo: ``,
		sameAs: [
			`https://facebook.com/pixelsmatter`,
			`https://twitter.com/pixelsmatter`,
			`https://linkedin.com/company/pixelsmatter`,
			`https://instagram.com/pixelsmatter`,
			`https://github.com/pixelsmatter`,
		],
	}

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={_title}
			titleTemplate={_title}
			description={_description}
			meta={[
				// Generic meta
				{
					name: `format-detection`,
					content: `telephone=no`,
				},
				{
					name: `description`,
					content: _description,
				},
				{
					name: `author`,
					content: `${siteUrl}/${humansTxt}`,
				},
				// Open Graph
				{
					property: `og:type`,
					content: _openGraph.type,
				},
				{
					property: `og:title`,
					content: _openGraph.title,
				},
				{
					property: `og:description`,
					content: _openGraph.description,
				},
				{
					property: `og:site_name`,
					content: _openGraph.siteName,
				},
				{
					property: `og:url`,
					content: _openGraph.url,
				},
				{
					property: `og:locale`,
					content: _openGraph.locale,
				},
				{
					property: `og:image`,
					content: `${siteUrl}${_thumbnail}`,
				},
				{
					property: `og:image:width`,
					content: _openGraph.imageWidth,
				},
				{
					property: `og:image:height`,
					content: _openGraph.imageHeight,
				},
				// Twitter
				{
					name: `twitter:card`,
					content: _twitterCard.card,
				},
				{
					name: `twitter:title`,
					content: _twitterCard.title,
				},
				{
					name: `twitter:description`,
					content: _twitterCard.description,
				},
				{
					name: `twitter:creator`,
					content: _twitterCard.creator,
				},
				{
					name: `twitter:site`,
					content: _twitterCard.site,
				},
				{
					property: `twitter:domain`,
					content: _twitterCard.domain,
				},
				{
					property: `twitter:url`,
					content: _twitterCard.url,
				},
				{
					property: `twitter:image:src`,
					content: `${siteUrl}${_thumbnail}`,
				},
			].concat(meta)}
		>
			{/* Schema Markup */}
			<script type="application/ld+json">
				{JSON.stringify(_schemaMarkup)}
			</script>
		</Helmet>
	)
}

SEO.defaultProps = {
	meta: [],
	title: '',
	description: '',
	lang: 'en_GB',
}

SEO.propTypes = {
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
	description: PropTypes.string,
	lang: PropTypes.string,
	thumbnail: PropTypes.object,
	openGraph: PropTypes.object,
	twitterCard: PropTypes.object,
	schemaMarkup: PropTypes.object,
}

export default SEO
