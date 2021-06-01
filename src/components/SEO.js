/*
* SEO component that queries for data with
*  Gatsby's useStaticQuery React hook
*
* See: https://www.gatsbyjs.com/docs/use-static-query/
*/

// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

// Images
import socialPreview from '../img/social/preview.jpg'

function SEO({description, lang, meta, title, schemaMarkup}) {
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
	 					orgName
	 					orgAlternateName
	 					socialLinks
	 					logo
	 				}
	 			}
	 		}
 		`
	)

	const metaDescription = description || site.siteMetadata.description,
	defaultTitle = site.siteMetadata?.title,
	humans = site.siteMetadata.humans,
	siteUrl = site.siteMetadata.siteUrl,
	author = site.siteMetadata.author,
	domain = site.siteMetadata.domain,
	orgName = site.siteMetadata.orgName,
	orgAlternateName = site.siteMetadata.orgAlternateName,
	logo = site.siteMetadata.logo,
	socialLinks = site.siteMetadata.socialLinks

	schemaMarkup = schemaMarkup ? schemaMarkup : {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'name': orgName,
		'alternateName': orgAlternateName,
		'description': metaDescription,
		'url': siteUrl,
		'logo': `${siteUrl}/${logo}`,
		'sameAs': socialLinks,
	}

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
		>
			<script type='application/ld+json'>
				{JSON.stringify(schemaMarkup)}
			</script>
		</Helmet>
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