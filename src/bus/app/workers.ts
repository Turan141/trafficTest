import { put } from 'redux-saga/effects'

import { appActions } from '@bus/app/actions'

export function* workerTemplate(action: any) {
	switch (action.payload.targetName) {
		case 'call':
			yield put(appActions.addCellTariff(action.payload))
			break
		case 'message':
			yield put(appActions.addMessageTariff(action.payload))
			break
		case 'internet':
			yield put(appActions.addInternetTariff(action.payload))
			break
		case 'facebook':
			yield put(appActions.additionalFacebook(action.payload))
			break
		case 'vk':
			yield put(appActions.additionalVk(action.payload))
			break
		case 'ok':
			yield put(appActions.additionalOk(action.payload))
			break
		case 'instagram':
			yield put(appActions.additionalInstagram(action.payload))
			break
		case 'tiktok':
			yield put(appActions.additionalTiktok(action.payload))
			break
		case 'whatsapp':
			yield put(appActions.additionalWhatsapp(action.payload))
			break
		case 'viber':
			yield put(appActions.additionalViber(action.payload))
			break
		case 'iy':
			yield put(appActions.additionalIy(action.payload))
			break
		case 'telegram':
			yield put(appActions.additionalTelegram(action.payload))
			break
		case 'discord':
			yield put(appActions.additionalDiscord(action.payload))
			break

		default:
			break
	}
	yield put(appActions.templateRequest(null))
	// yield put(appActions.templateSuccess(action.payload))
	yield put(appActions.templateFailed(null))
}
