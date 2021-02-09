
import React, { Component } from 'react'
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import Cookies from 'js-cookie'
import classNames from 'classnames';

import Container from '../components/container'

class CookieConsent extends Component {
	handleClick() {
		var dateTime = new Date();

		Cookies.set('cookies-accepted', dateTime);
		Cookies.set('google-analytics-accepted', dateTime);
		Cookies.set('google-tag-manager-accepted', dateTime);
		Cookies.set('facebook-pixel-accepted', dateTime);

		initializeAndTrack(useLocation);
	}

	render() {
		return (
			<div className={classNames('cookie-consent', { 'cookie-consent--accepted': false })}>
				<Container>
					<p className="cookie-consent__text">We use cookies to help deliver the best experience possible.</p>
					<button className="cookie-consent__accept" onclick={this.handleClick}>Accept</button>
				</Container>
			</div>
		)
	}
}

export default CookieConsent
