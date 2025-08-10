// useAppLogic.ts
import { useTranslation } from 'react-i18next'

import i18next from 'i18next'

import useModal from '@/hooks/useModal'

import { useFilterStore } from '../store/filterStore'

export const useAppLogic = () => {
	const { t, i18n } = useTranslation()
	const { isOpen, onClick} = useModal()
	const { confirmedFilters } = useFilterStore()

	const toggleLanguage = () => {
		const nextLang = i18next.language === 'en' ? 'ru' : 'en'
		i18n.changeLanguage(nextLang)
	}

	return {
		t,
		i18n,
		isOpen,
		onClick,
		confirmedFilters,
		toggleLanguage
	}
}
