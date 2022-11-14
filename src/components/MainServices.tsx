import { appActions } from '@bus/app/actions'
import { getApp } from '@bus/app/selector'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../assets/styles/global.scss'

export const MainSliders = () => {
	const dispatch = useDispatch()

	const sliderHandler = (e: any) => {
		console.log(e.target.id, e.target.value)
		dispatch(appActions.templateAsync({ targetName: e.target.id, value: e.target.value }))
	}
	return (
		<div className='main_tariffs'>
			<div className='call_tariff'>
				<h1>Настройте тариф</h1>
				<h2>Минуты</h2>
				<p>
					На Tele2 России безлимитно <br></br>
					на другие мобильные номера домашнего телефона
				</p>
				<div className='slider'>
					<input
						defaultValue={1}
						id='call'
						onChange={sliderHandler}
						type='range'
						min='1'
						max='4'
						step='1'
					/>
					<div className='slider__value'>
						<ul>
							<li>200</li>
							<li>350</li>
							<li>600</li>
							<li>650</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='message_tariff'>
				<h2>СМС</h2>
				<div className='slider'>
					<input
						defaultValue={1}
						onChange={sliderHandler}
						id='message'
						type='range'
						min='1'
						max='4'
						step='1'
					/>
					<div className='slider__value'>
						<ul>
							<li>0</li>
							<li>50</li>
							<li>100</li>
							<li>150</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='internet_tariff'>
				<h2>Интернет</h2>
				<div className='slider'>
					<input
						defaultValue={1}
						onChange={sliderHandler}
						id='internet'
						type='range'
						min='1'
						max='4'
						step='1'
					/>
					<div className='slider__value'>
						<ul>
							<li>5</li>
							<li>10</li>
							<li>15</li>
							<li>25</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
