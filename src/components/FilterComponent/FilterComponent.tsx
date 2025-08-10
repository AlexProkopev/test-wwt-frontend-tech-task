import { useFilterLogic } from '@/hooks/useFilterLogic'

import ApplyModal from '../ApplyModal/ApplyModal'
import FilterControls from './fields/FilterControls'
import FilterGroup from './fields/FilterGroup'
import FilterHeader from './fields/FilterHeader'

interface FilterComponentProps {
	onClick: () => void
}

export const FilterComponent = ({ onClick }: FilterComponentProps) => {
	const {
		t,
		data,
		isOpen,
		draftFilters,
		setIsOpen,
		toggleOption,
		handleSubmit,
		handleReset,
		handleConfirmApply
	} = useFilterLogic()

	return (
		<div className="rounded-[16px]shadow-md max-h-[80vh] flex flex-col">
			<form
				onSubmit={handleSubmit}
				onReset={handleReset}
				className="flex flex-col flex-1 overflow-hidden p-4"
			>
				<div className="flex-1 overflow-y-auto">
					<FilterHeader
						title={t('filterTitle')}
						onClose={onClick}
						t={t}
					/>

					{data.map(group => (
						<FilterGroup
							key={group.id}
							group={group}
							draftFilters={draftFilters}
							toggleOption={toggleOption}
							t={t}
						/>
					))}

					<FilterControls
						onSubmit={handleSubmit}
						onReset={handleReset}
						t={t}
					/>
				</div>
			</form>

			{isOpen && (
				<ApplyModal
					onClick={handleConfirmApply}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	)
}
