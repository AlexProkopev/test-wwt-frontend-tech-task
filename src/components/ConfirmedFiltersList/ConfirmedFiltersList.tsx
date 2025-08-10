// ConfirmedFiltersList.tsx
import React from 'react'

import { TFunction } from 'i18next'
import { FilterItem } from './fields/FilterItem'


interface Filter {
	id: string
	optionsIds: string[]
}

interface ConfirmedFiltersListProps {
	filters: Filter[]
	t: TFunction
}

export const ConfirmedFiltersList: React.FC<ConfirmedFiltersListProps> = ({
	filters,
	t
}) => {
	if (filters.length === 0) {
		return null
	}
	return (
		<div className="mb-5">
			<h2 className="font-medium">{t('titlePage')}:</h2>
			<ul >
				{filters.map((filter, index) => (
					<FilterItem
						key={filter.id}
						filter={filter}
						index={index}
						t={t}
					/>
				))}
			</ul>
		</div>
	)
}
