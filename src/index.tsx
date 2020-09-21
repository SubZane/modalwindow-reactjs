import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimationType } from './Components/Types/Types'
import ModalWindow from './Components/App'
import Button from './Components/MWButton'
import CloseButton from './Components/CloseButton'
import { ThemeProvider, theme } from './Components/theme'

function ModalWindowContainer() {
	const [effect, setEffect] = useState<AnimationType>('effect-1')
	const [open, setOpen] = useState<boolean>(false)

	function closeModalWindow() {
		setOpen(false)
	}

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<ModalWindow closeHandler={closeModalWindow} animation={effect} open={open}>
					<img alt="Code" src="./img/code.png" className="img-fluid" />

					<p>Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
					<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.</p>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem
						malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
					</p>
					<p>Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
					<CloseButton handleEvent={() => closeModalWindow()} text={'Close'} />
				</ModalWindow>
				<div className="select">
					<select onChange={(e) => setEffect(e.currentTarget.value as AnimationType)}>
						<option value="effect-1">Fade and Zoom</option>
						<option value="effect-2">Slide from right</option>
						<option value="effect-3">Pop from bottom</option>
						<option value="effect-4">Newspaper</option>
						<option value="effect-5">Fall</option>
						<option value="effect-6">Side fall</option>
						<option value="effect-7">Sticky up</option>
						<option value="effect-8">Side flip</option>
						<option value="effect-9">Top flip</option>
						<option value="effect-10">3D sign</option>
						<option value="effect-11">Scale</option>
						<option value="effect-12">3D slit</option>
						<option value="effect-13">3D rotate bottom</option>
						<option value="effect-14">3D rotate in left</option>
					</select>
				</div>
				<Button handleEvent={() => setOpen(true)} text={'Open Modal'} />
			</ThemeProvider>
		</React.Fragment>
	)
}
ReactDOM.render(<ModalWindowContainer />, document.getElementById('root'))
