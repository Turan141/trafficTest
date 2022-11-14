import { createReducer } from '@reduxjs/toolkit'

import { appActions } from '@bus/app/actions'
import { call } from 'redux-saga/effects'

interface InitialState {
	[x: string]: any
	call: number
	message: number
	internet: number
	facebook: number
	vk: number
	ok: number
	instagram: number
	tiktok: number
	whatsapp: number
	viber: number
	iy: number
	telegram: number
	discord: number
}

const initialState: InitialState = {
	call: 0,
	message: 0,
	internet: 0,
	facebook: 0,
	vk: 0,
	ok: 0,
	instagram: 0,
	tiktok: 0,
	whatsapp: 0,
	viber: 0,
	iy: 0,
	telegram: 0,
	discord: 0,
}

export const appReducer = createReducer(initialState, builder => {
	builder.addCase(appActions.templateRequest, (state, action) => ({
		...state,
	}))

	builder.addCase(appActions.addCellTariff, (state, action) => ({
		...state,
		call: +action.payload.value,
	}))
	builder.addCase(appActions.addInternetTariff, (state, action) => ({
		...state,
		internet: +action.payload.value,
	}))
	builder.addCase(appActions.addMessageTariff, (state, action) => ({
		...state,
		message: +action.payload.value,
	}))

	//==//

	builder.addCase(appActions.additionalFacebook, (state, action) => ({
		...state,
		facebook: +action.payload.value,
	}))
	builder.addCase(appActions.additionalVk, (state, action) => ({
		...state,
		vk: +action.payload.value,
	}))
	builder.addCase(appActions.additionalOk, (state, action) => ({
		...state,
		ok: +action.payload.value,
	}))
	builder.addCase(appActions.additionalInstagram, (state, action) => ({
		...state,
		instagram: +action.payload.value,
	}))
	builder.addCase(appActions.additionalTiktok, (state, action) => ({
		...state,
		tiktok: +action.payload.value,
	}))
	builder.addCase(appActions.additionalWhatsapp, (state, action) => ({
		...state,
		whatsapp: +action.payload.value,
	}))
	builder.addCase(appActions.additionalViber, (state, action) => ({
		...state,
		viber: +action.payload.value,
	}))
	builder.addCase(appActions.additionalIy, (state, action) => ({
		...state,
		iy: +action.payload.value,
	}))
	builder.addCase(appActions.additionalTelegram, (state, action) => ({
		...state,
		telegram: +action.payload.value,
	}))
	builder.addCase(appActions.additionalDiscord, (state, action) => ({
		...state,
		discord: +action.payload.value,
	}))
	//==//

	builder.addCase(appActions.templateFailed, (state, action) => ({
		...state,
	}))
})
