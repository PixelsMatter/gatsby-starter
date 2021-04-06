
/*
* Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
*
* See: https://www.gatsbyjs.com/docs/ssr-apis/
*/

// Libraries
import React from 'react'

// Components
import App from './src/components/App'

// Wrap root with App component
export const wrapRootElement = ({ element }) => (
	<App>{element}</App>
)