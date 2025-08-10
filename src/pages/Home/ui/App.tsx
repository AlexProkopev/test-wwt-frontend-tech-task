import { AnimatePresence } from 'framer-motion'

import { useAppLogic } from '@/hooks/useAppLogic'

import { FilterComponent } from '../../../components/FilterComponent/FilterComponent'
import { SectionFilters } from '../../../components/SectionFilters/SectionFilters'
import { UniversalModal } from '../../../components/UniversalModal/UniversalModal'

export const App = () => {
	const { t, i18n, onClick, confirmedFilters, toggleLanguage, isOpen } =
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

			<AnimatePresence>
				{isOpen && (
					<UniversalModal onClose={onClick}>
						<FilterComponent onClick={onClick} />
					</UniversalModal>
				)}
			</AnimatePresence>
		</>
	)
}
