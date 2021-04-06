
/*
* Implement Gatsby's Browser APIs in this file.
*
* See: https://www.gatsbyjs.com/docs/browser-apis/
*/

// Libraries
import React from 'react'

// Styles
import './src/scss/style.scss'

// Components
import App from './src/components/App'

// Wrap root with App component
export const wrapRootElement = ({ element }) => (
	<App>{element}</App>
)