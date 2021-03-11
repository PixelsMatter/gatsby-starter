/*
* Layout component that queries for data
* with Gatsby's useStaticQuery component
*
* See: https://www.gatsbyjs.com/docs/use-static-query/
*/

import React from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

// Components
import CookieConsent from './CookieConsent'
import Footer from './Footer'
import JsNotice from './JsNotice'

const Layout = ({children}) => {

	return (
		<>
			<CookieConsent cookiesAccepted={Cookies.get('cookies-accepted')}/>
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