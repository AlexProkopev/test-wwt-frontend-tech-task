import React from 'react'

interface TravelQuoteProps {
	text: string
}

export const TravelQuote: React.FC<TravelQuoteProps> = ({ text }) => (
	<p className="mt-10 max-w-4xl text-center text-gray-300 italic">{text}</p>
)
