// Libraries
import React from 'react'

// Images
import facebookPath from '../img/social/facebook.svg'
import twitterPath from '../img/social/twitter.svg'
import instagramPath from '../img/social/instagram.svg'
import linkedInPath from '../img/social/linkedin.svg'
import gitHubPath from '../img/social/github.svg'

const Social = () => (
	<ul className='social'>
		<li className='social__item'>
			<a className='social__link' href='https://facebook.com/pixelsmatter' target='_blank' rel='noreferrer'
			   title='Facebook'>
				<img className='social__icon' width='24' height='24' src={facebookPath} alt='Facebook logo'/>
			</a>
		</li>
		<li className='social__item'>
			<a className='social__link' href='https://twitter.com/pixelsmatter' target='_blank' rel='noreferrer'
			   title='Twitter'>
				<img className='social__icon' width='24' height='24' src={twitterPath} alt='Twitter logo'/>
			</a>
		</li>
		<li className='social__item'>
			<a className='social__link' href='https://instagram.com/pixelsmatter' target='_blank' rel='noreferrer'
			   title='Instagram'>
				<img className='social__icon' width='24' height='24' src={instagramPath} alt='Instagram logo'/>
			</a>
		</li>
		<li className='social__item'>
			<a className='social__link' href='https://linkedin.com/company/pixelsmatter' target='_blank'
			   rel='noreferrer' title='LinkedIn'>
				<img className='social__icon' width='24' height='24' src={linkedInPath} alt='LinkedIn logo'/>
			</a>
		</li>
		<li className='social__item'>
			<a className='social__link' href='https://github.com/pixelsmatter' target='_blank' rel='noreferrer'
			   title='GitHub'>
				<img className='social__icon' width='24' height='24' src={gitHubPath} alt='GitHub logo'/>
			</a>
		</li>
	</ul>
)

export default Social