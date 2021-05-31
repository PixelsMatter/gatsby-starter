
module.exports = {
	siteMetadata: {
		title: `PixelsMatter`,
		description: `Gatsby starter`,
		author: `@pixelsmatter`,
		siteUrl: `https://pixelsmatter-gatsby-starter.netlify.app`,
		domain: `pixelsmatter.io`,
		humans: `humans.txt`,
	},
	plugins: [
		`gatsby-plugin-preact`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/img`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `PixelsMatter`,
				short_name: `PixelsMatter`,
				start_url: `/`,
				background_color: `#0E0417`,
				theme_color: `#0E0417`,
				display: `standalone`,
				icon: `src/img/logo-icon.png`,
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
  		{
    		resolve: `gatsby-plugin-sass`,
    		options: {
      			sassOptions: {
      				data: `@import "${__dirname}/src/scss/vendor/vendor";`,
					includePaths: [`node_modules`],
      			},
    		},
    	},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				usePreconnect: true,
				fonts: {
					google: [
						{
							family: `Montserrat`,
							variants: [
								`400`,
								`500`,
								`700`,
							],
						},
					],
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: `GOOGLE_TAG_MANAGER_ID`,
			},
		},
	],
}