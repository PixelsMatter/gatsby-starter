
// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from '../components/SEO'
import CookieConsent from './CookieConsent'
import Footer from './Footer'
import JsNotice from './JsNotice'

const Layout = ({ children }) => {

	return (
		<>
			<SEO/>
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
