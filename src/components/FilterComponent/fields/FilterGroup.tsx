import React from 'react'

import { TFunction } from 'i18next'

import { FilterItem } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

interface FilterGroupProps {
	group: FilterItem
	draftFilters: SearchRequestFilter
	toggleOption: (groupId: string, optionId: string) => void
	t: TFunction
}

const FilterGroup: React.FC<FilterGroupProps> = ({
	group,
	draftFilters,
	toggleOption,
	t
}) => {
	const selectedOptions =
		draftFilters.find(gr => gr.id === group.id)?.optionsIds || []

	return (
		<div className="mt-[64px]">
			<h3 className="text-base mb-[12px] font-bold md:text-2xl md:font-medium md:mb-[24px]">
				{t(`filters.${group.id}`)}
			</h3>
			{group.type === 'OPTION' && group.options && (
				<div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 md:gap-[16px]">
					{group.options.map(option => (
						<label
							key={option.id}
							className="flex items-center gap-[10px] cursor-pointer md:gap-[16px]"
						>
							<input
								type="checkbox"
								name={group.id}
								value={option.id}
								checked={selectedOptions.includes(option.id)}
								onChange={() => toggleOption(group.id, option.id)}
								className="w-5 h-5"
							/>
							<p className="text-base font-normal">{t(`filters.${option.id}`, option.name)}</p>
						</label>
					))}
				</div>
			)}
			<div className="h-0 outline-2 outline-offset-[-1px] outline-zinc-400 mt-[25px]" />
		</div>
	)
}

export default FilterGroup
