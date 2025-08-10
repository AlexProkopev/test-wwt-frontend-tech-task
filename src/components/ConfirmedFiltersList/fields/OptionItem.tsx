// OptionItem.tsx
import React from 'react'

import { TFunction } from 'i18next'

interface OptionItemProps {
	optionId: string
	t: TFunction
}

export const OptionItem: React.FC<OptionItemProps> = ({ optionId, t }) => {
	return <li>{t(`filters.${optionId}`)}</li>
}
