// Libraries
import React from 'react'
import ReactCookieConsent from 'react-cookie-consent';

const CookieConsent = () => (
	<ReactCookieConsent location="top" disableStyles={true} containerClasses="cookie-consent container"
		buttonClasses="cookie-consent__accept" buttonText="Accept" ariaAcceptLabel="Accept"
		cookieName='cookies-accepted' cookieValue={new Date().toDateString()}>
		<p className="cookie-consent__text">We use cookies to help deliver the best experience possible.</p>
	</ReactCookieConsent>
)

export default CookieConsent