import { combineReducers } from 'redux'

import { appReducer } from '@bus/app/reducer'

export const rootReducer = () =>
	combineReducers({
		app: appReducer,
	})
