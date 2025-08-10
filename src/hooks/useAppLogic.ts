import { useTranslation } from 'react-i18next'

import useModal from '@/hooks/useModal'

import { useFilterStore } from '../store/filterStore'

export const useAppLogic = () => {
	const { t, i18n } = useTranslation()
	const { isOpen, onClick } = useModal()
	const { confirmedFilters } = useFilterStore()

	const toggleLanguage = (lang: 'en' | 'ru' | 'ua') => {
		i18n.changeLanguage(lang)
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
