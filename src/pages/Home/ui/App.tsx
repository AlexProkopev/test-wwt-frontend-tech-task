import { useAppLogic } from '@/hooks/useAppLogic'

import FilterComponent from '../../../components/FilterComponent/FilterComponent'
import SectionFilters from '../../../components/SectionFilters/sectionfilrets'
import UniversalModal from '../../../components/UniversalModal/UniversalModal'

export const App = () => {
	const { t, i18n, isOpen, onClick, confirmedFilters, toggleLanguage } =
		useAppLogic()

	return (
		<>
			<SectionFilters
				currentLang={i18n.language}
				toggleLanguage={toggleLanguage}
				confirmedFilters={confirmedFilters}
				t={t}
				onClick={onClick}
			/>

			{isOpen && (
				<UniversalModal onClose={onClick}>
					<FilterComponent onClick={onClick} />
				</UniversalModal>
			)}
		</>
	)
}
