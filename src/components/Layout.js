/*
* Layout component that queries for data
* with Gatsby's useStaticQuery component
*
* See: https://www.gatsbyjs.com/docs/use-static-query/
*/

// Libraries
import React from 'react'
import PropTypes from 'prop-types';

// Components
import CookieConsent from './CookieConsent'
import Footer from './Footer'
import JsNotice from './JsNotice'

const Layout = ({children}) => {

	return (
		<>
			<CookieConsent/>
			<main>{children}</main>
			<JsNotice/>
			<Footer/>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout