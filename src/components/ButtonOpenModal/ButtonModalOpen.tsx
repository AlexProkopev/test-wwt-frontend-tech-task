interface ButtonModalOpenProps {
	onClick: () => void
	content: string
}

export const ButtonModalOpen = ({ content, onClick }: ButtonModalOpenProps) => {
	return (
		<button
			className="px-16 py-6 bg-orange-600 rounded-2xl text-white hover:cursor-pointer hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out"
			onClick={onClick}
		>
			{content}
		</button>
	)
}
