// Libraries
import React from 'react'
import ReactCookieConsent from 'react-cookie-consent'
import Classnames from 'classnames'

class CookieConsent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loaded: true,
			accepted: false,
		}

		this.accept = this.accept.bind(this)
	}

	accept() {
		this.setState({accepted: true})
	}

	render() {
		let classes = Classnames([
			'cookie-consent',
			'container',
			{
				'cookie-consent--loaded': this.state.loaded,
				'cookie-consent--accepted': this.state.accepted,
			},
		])

		return (
			<ReactCookieConsent hideOnAccept={false} disableStyles={true} containerClasses={classes}
			buttonClasses='cookie-consent__accept' buttonText='Accept' ariaAcceptLabel='Accept'
			cookieName='cookies-accepted' cookieValue={new Date().toDateString()} onAccept={this.accept}>
				<p className='cookie-consent__text'>We use cookies to help deliver the best experience possible.</p>
			</ReactCookieConsent>
		)
	}
}

export default CookieConsent