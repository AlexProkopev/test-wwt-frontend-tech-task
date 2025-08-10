import React from 'react'

interface LanguageToggleProps {
	currentLang: string
	onToggle: () => void
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
	currentLang,
	onToggle
}) => {
	return (
		<button
			onClick={onToggle}
			className="font-[10px] text-base mb-4 px-2 py-1 border rounded md:mb-6 md:px-4 md:py-2 md:text-lg lg:text-xl hover:bg-gray-200 hover:transition-colors hover:cursor-pointer"
		>
			{currentLang === 'en' ? 'Русский' : 'English'}
		</button>
	)
}
