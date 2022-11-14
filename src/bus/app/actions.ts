import { createAction } from '@reduxjs/toolkit'

import { appTypes } from '@bus/app/types'

export const appActions = {
	addCellTariff: createAction(appTypes.ADD_CELL_TARIFF, data => ({
		payload: data,
	})),
	addMessageTariff: createAction(appTypes.ADD_MESSAGE_TARIFF, data => ({
		payload: data,
	})),
	addInternetTariff: createAction(appTypes.ADD_INTERNET_TARIFF, data => ({
		payload: data,
	})),
	additionalFacebook: createAction(appTypes.ADD_FACEBOOK, data => ({
		payload: data,
	})),
	additionalVk: createAction(appTypes.ADD_VK, data => ({
		payload: data,
	})),
	additionalOk: createAction(appTypes.ADD_OK, data => ({
		payload: data,
	})),
	additionalInstagram: createAction(appTypes.ADD_INSTAGRAM, data => ({
		payload: data,
	})),
	additionalTiktok: createAction(appTypes.ADD_TIKTOK, data => ({
		payload: data,
	})),
	additionalWhatsapp: createAction(appTypes.ADD_WHATSAPP, data => ({
		payload: data,
	})),
	additionalViber: createAction(appTypes.ADD_VIBER, data => ({
		payload: data,
	})),
	additionalIy: createAction(appTypes.ADD_IY, data => ({
		payload: data,
	})),
	additionalTelegram: createAction(appTypes.ADD_TELEGRAM, data => ({
		payload: data,
	})),
	additionalDiscord: createAction(appTypes.ADD_DISCORD, data => ({
		payload: data,
	})),
	templateRequest: createAction(appTypes.TEMPLATE_REQUEST, data => ({
		payload: data,
	})),
	templateFailed: createAction(appTypes.TEMPLATE_FAILED, error => ({
		payload: error,
	})),
	templateAsync: createAction(appTypes.TEMPLATE_ASYNC, data => ({
		payload: data,
	})),
}
