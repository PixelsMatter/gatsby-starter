
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
* Example of an image component using gatsby-image
* Benefits include image sizing, lazy loading, Webp...
*/

const Image = () => {
 	const data = useStaticQuery(graphql`
 		query {
 			placeholderImage: file(relativePath: { eq: "logo-icon.png" }) {
 				childImageSharp {
 					fluid(maxWidth: 512) {
 						...GatsbyImageSharpFluid_withWebp
 					}
 				}
 			}
 		}
 	`)

 	if (!data?.placeholderImage?.childImageSharp?.fluid) {
 		return <div>Image not found</div>
 	}

 	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
