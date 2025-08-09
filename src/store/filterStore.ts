import { create } from 'zustand'

import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

interface FilterState {
	confirmedFilters: SearchRequestFilter
	setConfirmedFilters: (filters: SearchRequestFilter) => void
	setClear: () => void
}

export const useFilterStore = create<FilterState>(set => ({
	confirmedFilters: JSON.parse(
		localStorage.getItem('confirmedFilters') || '[]'
	) as SearchRequestFilter,
	setConfirmedFilters: filters => {
		set({ confirmedFilters: filters })
		localStorage.setItem('confirmedFilters', JSON.stringify(filters))
	},
	setClear: () => {
		localStorage.removeItem('confirmedFilters')
		set({ confirmedFilters: [] })
	}
}))
