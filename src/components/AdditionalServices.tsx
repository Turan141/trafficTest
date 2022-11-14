import React, { useEffect, useState } from 'react'
import { messengers, socialNetworks } from '@enums/constants'

import styles from '../assets/styles/global.scss'
import { getApp } from '@bus/app/selector'
import { useSelector, useDispatch } from 'react-redux'
import { appActions } from '@bus/app/actions'

const SingleService = ({ icon, title, cost }: any) => {
	const store = useSelector(getApp)
	const [isActive, setIsActive] = useState(false)
	const dispatch = useDispatch()

	const iconToggle = (e: any) => {
		setIsActive(!isActive)
		dispatch(appActions.templateAsync({ targetName: e.target.id, value: isActive ? 0 : 1 }))
	}

	useEffect(() => {
		for (let key in store) {
			if (key === title) {
				setIsActive(store[key])
			}
		}
	}, [store])

	useEffect(() => {
		if (store?.internet >= 2) {
			dispatch(appActions.templateAsync({ targetName: 'whatsapp', value: 1 }))
		} else {
			setIsActive(false)
			dispatch(appActions.templateAsync({ targetName: 'whatsapp', value: 0 }))
		}
	}, [store?.internet])

	return (
		<div className='single_service'>
			<div
				id={title}
				onClick={iconToggle}
				className='icon'
				style={{ backgroundColor: isActive && icon }}
			></div>
			<p>{cost} P</p>
		</div>
	)
}

export const AdditionalServices = () => {
	return (
		<div className='main_icons_section'>
			<h2>Соцсети</h2>
			<div className='social_section'>
				{messengers.length &&
					messengers.map((item: any) => <SingleService key={item.title} {...item} />)}
			</div>
			<h2>Мессенджеры</h2>
			<div className='social_section'>
				{socialNetworks.length &&
					socialNetworks.map((item: any) => <SingleService key={item.title} {...item} />)}
			</div>
		</div>
	)
}
