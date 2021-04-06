// Libraries
import React from 'react'

// Images
import facebookPath from '../img/social/facebook.svg'
import twitterPath from '../img/social/twitter.svg'
import instagramPath from '../img/social/instagram.svg'
import linkedInPath from '../img/social/linkedin.svg'
import gitHubPath from '../img/social/github.svg'

// Social media platforms
const items = [
	{
		title: 'Facebook',
		url: 'https://facebook.com/pixelsmatter',
		icon: facebookPath,
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/pixelsmatter',
		icon: twitterPath,
	},
	{
		title: 'LinkedIn',
		url: 'https://linkedin.com/company/pixelsmatter',
		icon: linkedInPath,
	},
	{
		title: 'Instagram',
		url: 'https://instagram.com/pixelsmatter',
		icon: instagramPath,
	},
	{
		title: 'GitHub',
		url: 'https://github.com/pixelsmatter',
		icon: gitHubPath,
	},
]

const Social = () => (
	<ul className='social'>
		{items.map((item, key) =>
			<li className='social__item' key={key}>
				<a className='social__link' href={item.url} target='_blank' rel='noreferrer'
				   title={item.title}>
					<img className='social__icon' width='24' height='24' src={item.icon} alt={`${item.title} logo`}/>
				</a>
			</li>
		)}
	</ul>
)

export default Social