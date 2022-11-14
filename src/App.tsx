import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MainSliders } from '@components/MainServices'
import { AdditionalServices } from '@components/AdditionalServices'
import { TotalPrice } from '@components/TotalPrice'
import { appActions } from '@bus/app/actions'
import { getApp } from '@bus/app/selector'

const App = () => {
	return (
		<>
			<div className='main_section'>
				<MainSliders />
				<AdditionalServices />
			</div>
			<TotalPrice />
		</>
	)
}

export default App
