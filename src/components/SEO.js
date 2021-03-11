/*
* SEO component that queries for data with
*  Gatsby's useStaticQuery React hook
*
* See: https://www.gatsbyjs.com/docs/use-static-query/
*/

import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

import socialPreview from '../img/social/preview.jpg'

function SEO({description, lang, meta, title}) {
	const {site} = useStaticQuery(
		graphql`
	 		query {
	 			site {
	 				siteMetadata {
	 					title
	 					description
	 					author
	 					humans
	 					siteUrl
	 					domain
	 				}
	 			}
	 		}
 		`
	)

	const metaDescription = description || site.siteMetadata.description
	const defaultTitle = site.siteMetadata?.title
	const humans = site.siteMetadata.humans
	const siteUrl = site.siteMetadata.siteUrl
	const author = site.siteMetadata.author
	const domain = site.siteMetadata.domain

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title ? title : defaultTitle}
			titleTemplate={title ? `%s | ${defaultTitle}` : `${defaultTitle} | ${metaDescription}`}
			meta={[
				{
					name: `format-detection`,
					content: `telephone=no`,
				},
				{
					name: `author`,
					content: `${siteUrl}/${humans}`,
				},
				{
					name: `description`,
					content: metaDescription || ``,
				},
				{
					property: `og:title`,
					content: title || defaultTitle,
				},
				{
					property: `og:description`,
					content: metaDescription || ``,
				},
				{
					property: `og:url`,
					content: siteUrl || ``,
				},
				{
					property: `og:site_name`,
					content: defaultTitle || ``,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:locale`,
					content: `en_GB`,
				},
				{
					property: `og:image`,
					content: `${siteUrl}${socialPreview}`,
				},
				{
					property: `og:image:width`,
					content: 1200,
				},
				{
					property: `og:image:height`,
					content: 630,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:site`,
					content: author || ``,
				},
				{
					name: `twitter:creator`,
					content: author || ``,
				},
				{
					name: `twitter:title`,
					content: title || defaultTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription || ``,
				},
				{
					property: `twitter:image:src`,
					content: `${siteUrl}${socialPreview}`,
				},
				{
					property: `twitter:domain`,
					content: domain || ``,
				},
				{
					property: `twitter:url`,
					content: siteUrl || ``,
				},
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
}

export default SEO