
/*
* Layout component that queries for data
* with Gatsby's useStaticQuery component
*
* See: https://www.gatsbyjs.com/docs/use-static-query/
*/

import React from 'react'
import PropTypes from 'prop-types'

import CookieConsent from '../components/cookie-consent'
import Footer from './footer'
import JsNotice from './js-notice'

const Layout = ({ children }) => {

	return (
		<>
			<CookieConsent />
			<main>{children}</main>
			<JsNotice />
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
