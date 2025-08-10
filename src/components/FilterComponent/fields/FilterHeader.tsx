import React from 'react'

import { TFunction } from 'i18next'

import { SvgClose } from '../../ButtonClose/ButtonClose'

interface FilterHeaderProps {
	title: string
	onClose: () => void
	t: TFunction
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ title, onClose, t }) => (
	<div className="relative">
		<h2 className="text-center text-neutral-700 text-4xl font-medium">
			{title}
		</h2>
		<button
			onClick={onClose}
			type="button"
			className="absolute top-[9px] right-5"
			aria-label={t('close')}
		>
			<SvgClose />
		</button>

		<div className="h-0 outline-2 outline-offset-[-1px] outline-zinc-400 mt-[25px]" />
	</div>
)

export default FilterHeader
