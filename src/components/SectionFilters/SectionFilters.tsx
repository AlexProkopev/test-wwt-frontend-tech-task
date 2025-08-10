import React from 'react'

import { TFunction } from 'i18next'

import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import { ButtonModalOpen } from '../ButtonOpenModal/ButtonModalOpen'
import { ConfirmedFiltersList } from '../ConfirmedFiltersList/ConfirmedFiltersList'
import { LanguageToggle } from '../LanguageToggle/LanguageToggle'
import { TravelQuote } from '../TravelQuote/TravelQuote'

interface SectionFiltersProps {
	toggleLanguage: (lang: 'en' | 'ru' | 'ua') => void
	confirmedFilters: SearchRequestFilter
	t: TFunction
	onClick: () => void
}

export const SectionFilters: React.FC<SectionFiltersProps> = ({
	toggleLanguage,
	confirmedFilters,
	t,
	onClick
}) => {
	return (
		<section className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-rgba(49, 57, 60, 1)">
			<LanguageToggle onToggle={toggleLanguage} />

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
