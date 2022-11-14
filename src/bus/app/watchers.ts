import { all, takeLatest, takeEvery, call } from 'redux-saga/effects'

import { appTypes } from '@bus/app/types'
import { workerTemplate } from '@bus/app/workers'

function* watchTemplate() {
	yield takeEvery(appTypes.TEMPLATE_ASYNC, workerTemplate)
}

export function* watchApp() {
	yield all([call(watchTemplate)])
}
