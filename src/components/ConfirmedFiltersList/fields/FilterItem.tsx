// FilterItem.tsx
import React from 'react'

import { TFunction } from 'i18next'

import { OptionItem } from './OptionItem'

interface Filter {
	id: string
	optionsIds: string[]
}

interface FilterItemProps {
	filter: Filter
	index: number
	t: TFunction
}

export const FilterItem: React.FC<FilterItemProps> = ({ filter, index, t }) => {
	return (
		<li
			className="
		        relative
		        p-5
		        rounded-2xl
                mt-2
		        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
		        shadow-[inset_2px_2px_6px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_rgba(0,0,0,0.4)]
		        hover:shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.06)]
		        transition-all duration-300 ease-out
		        transform hover:-translate-y-1 hover:scale-[1.02]
		        backdrop-blur-sm
                text-base md:text-lg lg:text-xl
                "
		>
			<h3
				className="
			  text-gray-200
			    mb-3
			    relative
			    pl-6
                text-base md:text-lg lg:text-xl"
			>
				{index + 1}. {t(`filters.${filter.id}`)}:
			</h3>

			<ul
				className="
			    flex flex-col 
			    mt-2 mb-1 
			    list-disc list-inside 
		    	text-gray-300
			    text-base md:text-lg lg:text-xl"
			>
				{filter.optionsIds.map(optionId => (
					<OptionItem
						key={optionId}
						optionId={optionId}
						t={t}
					/>
				))}
			</ul>
		</li>
	)
}
