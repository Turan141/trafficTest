import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '@redux/store'

import App from './App'

import './index.scss'

const rootElement = document.getElementById('app')

if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>
)
