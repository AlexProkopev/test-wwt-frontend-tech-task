import React from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageToggleProps {
	onToggle: (lang: 'en' | 'ru' | 'ua') => void
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ onToggle }) => {
	const { t } = useTranslation()
	return (
		<div className="flex gap-[5px]">
			<button
				onClick={() => onToggle('ru')}
				className="font-[10px] text-base mb-4 px-2 py-1 border rounded md:mb-6 md:px-4 md:py-2 md:text-lg lg:text-xl hover:bg-gray-200 hover:transition-colors hover:cursor-pointer"
			>
				{t('languages.ru')}
			</button>
			<button
				onClick={() => onToggle('en')}
				className="font-[10px] text-base mb-4 px-2 py-1 border rounded md:mb-6 md:px-4 md:py-2 md:text-lg lg:text-xl hover:bg-gray-200 hover:transition-colors hover:cursor-pointer"
			>
				{t('languages.en')}
			</button>
			<button
				onClick={() => onToggle('ua')}
				className="font-[10px] text-base mb-4 px-2 py-1 border rounded md:mb-6 md:px-4 md:py-2 md:text-lg lg:text-xl hover:bg-gray-200 hover:transition-colors hover:cursor-pointer"
			>
				{t('languages.ua')}
			</button>
		</div>
	)
}
