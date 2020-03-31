import React from 'react'
import ReactDOM from 'react-dom'
import ModalWindow from './Components/App'
import { ThemeProvider, theme } from './Components/theme'

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={theme}>
			<ModalWindow state={''} animation={'door-left'}></ModalWindow>
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById('root')
)
