
import React, { Component } from 'react'
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import Cookies from 'js-cookie'
import classNames from 'classnames';

import Container from '../components/container'

class CookieConsent extends Component {
	constructor() {
		super()
		this.state = {cookiesAccepted: Cookies.get('cookies-accepted')}
	}

	handleClick() {
		var dateTime = new Date();

		Cookies.set('cookies-accepted', dateTime);
		Cookies.set('google-analytics-accepted', dateTime);
		Cookies.set('google-tag-manager-accepted', dateTime);
		Cookies.set('facebook-pixel-accepted', dateTime);

		initializeAndTrack(useLocation);

		this.setState({cookiesAccepted: true})
	}

	render() {
		return (
			<div className={classNames('cookie-consent', { 'cookie-consent--accepted': this.state.cookiesAccepted })}>
				<Container>
					<p className="cookie-consent__text">We use cookies to help deliver the best experience possible.</p>
					<button className="cookie-consent__accept" onclick={this.handleClick.bind(this)}>Accept</button>
				</Container>
			</div>
		)
	}
}

export default CookieConsent
