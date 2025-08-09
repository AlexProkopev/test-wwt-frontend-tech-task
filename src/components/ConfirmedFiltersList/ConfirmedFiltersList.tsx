import React from 'react'

import { TFunction } from 'i18next'

interface Filter {
	id: string
	optionsIds: string[]
}

interface ConfirmedFiltersListProps {
	filters: Filter[]
	t: TFunction
}

const ConfirmedFiltersList: React.FC<ConfirmedFiltersListProps> = ({
	filters,
	t
}) => (
	<div>
		<h2>{t('titlePage')}</h2>
		<ul>
			{filters.map(filter => (
				<li key={filter.id}>
					<h3>{t(`filters.${filter.id}`)}</h3>
					<ul>
						{filter.optionsIds.map(optionId => (
							<li key={optionId}>{t(`filters.${optionId}`)}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</div>
)

export default ConfirmedFiltersList
