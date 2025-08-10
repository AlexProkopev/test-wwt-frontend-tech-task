import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Notiflix from 'notiflix'

import { FilterItem, FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import filtersData from '../shared/temp/filterData.json'
import { useFilterStore } from '../store/filterStore'

export const useFilterLogic = () => {
	const data = filtersData.filterItems as FilterItem[]
	const { t } = useTranslation()
	const { confirmedFilters, setConfirmedFilters, setClear } = useFilterStore()
	const [isOpen, setIsOpen] = useState(false)
	const [draftFilters, setDraftFilters] = useState<SearchRequestFilter>(
		confirmedFilters || []
	)

	useEffect(() => {
		setDraftFilters(confirmedFilters || [])
	}, [confirmedFilters])

	const toggleOption = (groupId: string, optionId: string) => {
		setDraftFilters(prev => {
			const group = prev.find(gr => gr.id === groupId)

			if (!group) {
				return [
					...prev,
					{ id: groupId, type: FilterType.OPTION, optionsIds: [optionId] }
				]
			}
			const isSelected = group.optionsIds.includes(optionId)
			const updatedGroup = {
				...group,
				optionsIds: isSelected
					? group.optionsIds.filter(id => id !== optionId)
					: [...group.optionsIds, optionId]
			}

			return prev.map(gr => (gr.id === groupId ? updatedGroup : gr))
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (draftFilters.length > 0) {
			setIsOpen(true)
		} else {
			Notiflix.Notify.failure(t('noFiltersSelected'), {
				position: 'center-center',
				timeout: 3000
			})
		}
	}

	const handleConfirmApply = () => {
		setConfirmedFilters(draftFilters)
		setIsOpen(false)
	}

	const handleReset = () => {
		setDraftFilters([])
		setClear()
	}

	return {
		t,
		data,
		isOpen,
		draftFilters,
		setIsOpen,
		toggleOption,
		handleSubmit,
		handleReset,
		handleConfirmApply
	}
}
