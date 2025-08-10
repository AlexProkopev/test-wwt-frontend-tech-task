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
			className="mb-6 px-4 py-2 border rounded hover:bg-gray-200 hover:transition-colors hover:cursor-pointer"
		>
			{currentLang === 'en' ? 'Русский' : 'English'}
		</button>
	)
}
