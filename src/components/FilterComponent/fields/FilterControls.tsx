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
	<div className="flex justify-start md:justify-center relative mt-[64px]">
		<button
			type="button"
			className="px-8 py-2 font-semibold   text-white  rounded-2xl  bg-orange-600 hover:cursor-pointer hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out md:px-16 md:py-6 md:font-semibold "
			onClick={onSubmit}
		>
			{t('submitButtonText')}
		</button>
		<button
			type="reset"
			className="md:absolute md:top-[25px] md:right-[15px] text-teal-600 font-medium  underline hover:cursor-pointer hover:text-teal-700 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out"
			onClick={onReset}
		>
			{t('clearAllParams')}
		</button>
	</div>
)

export default FilterControls
