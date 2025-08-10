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
			type="button"
			className="px-16 py-6 bg-orange-600 rounded-2xl  text-white  font-semibold hover:cursor-pointer hover:bg-orange-700 hover:transition-background hover:ease-in-out hover:duration-300"
			onClick={onSubmit}
		>
			{t('submitButtonText')}
		</button>
		<button
			type="reset"
			className="absolute top-[25px] right-[15px] text-teal-600 font-medium  underline hover:cursor-pointer hover:text-teal-700 hover:transition-colors hover:ease-in-out hover:duration-300"
			onClick={onReset}
		>
			{t('clearAllParams')}
		</button>
	</div>
)

export default FilterControls
