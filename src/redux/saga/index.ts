import { all, call } from 'redux-saga/effects'

import { watchApp } from '@bus/app/watchers'

export function* rootSaga() {
	yield all([
		call(watchApp),
	])
}
