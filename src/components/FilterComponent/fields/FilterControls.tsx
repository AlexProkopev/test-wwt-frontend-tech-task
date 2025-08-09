// FilterControls.tsx
import React from 'react'

import { TFunction } from 'i18next'

interface FilterControlsProps {
	onSubmit: React.FormEventHandler
	onReset: React.FormEventHandler
	t: TFunction
}

const FilterControls: React.FC<FilterControlsProps> = ({
	onSubmit,
	onReset,
	t
}) => (
	<div className="flex justify-center relative mt-[64px]">
		<button
			type="submit"
			className="px-16 py-6 bg-orange-600 rounded-2xl inline-flex justify-center items-center text-white text-base font-semibold font-['Inter']"
			onClick={onSubmit}
		>
			{t('submitButtonText')}
		</button>
		<button
			type="reset"
			className="absolute top-[25px] right-[15px] text-center justify-start text-teal-600 text-base font-medium font-['Inter'] underline"
			onClick={onReset}
		>
			{t('clearAllParams')}
		</button>
	</div>
)

export default FilterControls
