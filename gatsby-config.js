
module.exports = {
	siteMetadata: {
		title: `PixelsMatter`,
		description: `PixelsMatter Gatsby starter`,
		author: `@pixelsmatter`,
		siteUrl: `https://pixelsmatter.io`,
		humans: `/humans.txt`,
	},
	plugins: [
		`gatsby-plugin-preact`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-offline`,
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
				short_name: `<PM/>`,
				start_url: `/`,
				background_color: `#110719`,
				theme_color: `#110719`,
				display: `minimal-ui`,
				icon: `src/img/logo-icon.png`,
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
		/* Uncomment for Google Analytics
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
			    trackingIds: [
			        `GA-TRACKING_ID`, // Google Analytics
			        `AW-CONVERSION_ID`, // Google Ads / Adwords
			        `DC-FLOODIGHT_ID`, // Marketing Platform advertising products
			    ],
			    gtagConfig: {
			       	optimize_id: `OPT_CONTAINER_ID`,
			        anonymize_ip: true,
			       	cookie_expires: 0,
			    },
				pluginConfig: {
			        head: false,
			        respectDNT: true,
			        exclude: [],
			    },
			},
		}, */
	],
}
