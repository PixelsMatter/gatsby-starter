
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

// Leave calling card in console
console.log(`

______ _          _     ___  ___      _   _            
| ___ (_)        | |    |  \\/  |     | | | |           
| |_/ /___  _____| |___ | .  . | __ _| |_| |_ ___ _ __ 
|  __/| \\ \\/ / _ \\ / __|| |\\/| |/ _\` | __| __/ _ \\ '__|
| |   | |>  <  __/ \\__ \\| |  | | (_| | |_| ||  __/ |   
\\_|   |_/_/\\_\\___|_|___/\\_|  |_/\\__,_|\\__|\\__\\___|_|   

Digitise today.

Like our code? Get in touch!
hello@pixelsmatter.io                                                       
                                                       
`);