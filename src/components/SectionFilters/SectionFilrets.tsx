import React from 'react'

import { TFunction } from 'i18next'

import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import ButtonModalOpen from '../../components/ButtonOpenModal/ButtonModalOpen'
import ConfirmedFiltersList from '../../components/ConfirmedFiltersList/ConfirmedFiltersList'
import LanguageToggle from '../../components/LanguageToggle/LanguageToggle'
import TravelQuote from '../../components/TravelQuote/TravelQuote'

interface SectionFiltersProps {
	currentLang: string
	toggleLanguage: () => void
	confirmedFilters: SearchRequestFilter
	t: TFunction
	onClick: () => void
}

const SectionFilters: React.FC<SectionFiltersProps> = ({
	currentLang,
	toggleLanguage,
	confirmedFilters,
	t,
	onClick
}) => {
	return (
		<section className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-rgba(49, 57, 60, 1)">
			<LanguageToggle
				currentLang={currentLang}
				onToggle={toggleLanguage}
			/>

			<ConfirmedFiltersList
				filters={confirmedFilters}
				t={t}
			/>

			<ButtonModalOpen
				content={t('openFilters')}
				onClick={onClick}
			/>

			<TravelQuote text={t('travelQuote')} />
		</section>
	)
}

export default SectionFilters
