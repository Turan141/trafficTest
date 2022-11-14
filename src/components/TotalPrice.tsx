import { getApp } from '@bus/app/selector'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const TotalPrice = () => {
	const store = useSelector(getApp)
	//@ts-ignore
	const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0)

	const total = useMemo(() => sumValues(store), [store])

	return (
		<footer>
			{/* @ts-ignore */}
			<h2>{total}</h2>
		</footer>
	)
}
