import React from 'react'

interface LanguageToggleProps {
	currentLang: string
	onToggle: () => void
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
	currentLang,
	onToggle
}) => {
	return (
		<button
			onClick={onToggle}
			className="mb-6 px-4 py-2 border rounded"
		>
			{currentLang === 'en' ? 'Русский' : 'English'}
		</button>
	)
}

export default LanguageToggle
