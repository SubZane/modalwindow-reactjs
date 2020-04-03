import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimationType, ModalWindowSettingsType } from './Components/Types/Types'
import ModalWindow from './Components/App'
import Button from './Components/MWButton'
import CloseButton from './Components/CloseButton'
import { ThemeProvider, theme } from './Components/theme'

function ModalWindowContainer() {
	const [ModalWindowSettings, setModalWindowSettings] = useState<ModalWindowSettingsType>({
		open: false,
		animation: 'effect-1'
	})

	function openModalWindow(animation: AnimationType) {
		setModalWindowSettings({
			open: true,
			animation: animation
		})
		console.log('open modal')
	}

	function closeModalWindow() {
		setModalWindowSettings({
			...ModalWindowSettings,
			open: false
		})
	}
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<ModalWindow closeHandler={closeModalWindow} settings={ModalWindowSettings}>
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
				<Button handleEvent={() => openModalWindow('effect-1')} text={'Fade and Zoom'} />
				<Button handleEvent={() => openModalWindow('effect-2')} text={'Slide from right'} />
				<Button handleEvent={() => openModalWindow('effect-3')} text={'Pop from bottom'} />
				<Button handleEvent={() => openModalWindow('effect-4')} text={'Newspaper'} />
				<Button handleEvent={() => openModalWindow('effect-5')} text={'Fall'} />
				<Button handleEvent={() => openModalWindow('effect-6')} text={'Side fall'} />
				<Button handleEvent={() => openModalWindow('effect-7')} text={'Sticky up'} />
				<Button handleEvent={() => openModalWindow('effect-8')} text={'Side flip'} />
				<Button handleEvent={() => openModalWindow('effect-9')} text={'Top flip'} />
				<Button handleEvent={() => openModalWindow('effect-10')} text={'3D sign'} />
				<Button handleEvent={() => openModalWindow('effect-11')} text={'Scale'} />
				<Button handleEvent={() => openModalWindow('effect-12')} text={'3D slit'} />
				<Button handleEvent={() => openModalWindow('effect-13')} text={'3D rotate bottom'} />
				<Button handleEvent={() => openModalWindow('effect-14')} text={'3D rotate in left'} />
			</ThemeProvider>
		</React.Fragment>
	)
}
ReactDOM.render(<ModalWindowContainer />, document.getElementById('root'))
