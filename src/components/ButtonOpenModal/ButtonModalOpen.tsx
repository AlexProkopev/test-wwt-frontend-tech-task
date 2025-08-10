interface ButtonModalOpenProps {
	onClick: () => void
	content: string
}

export const ButtonModalOpen = ({ content, onClick }: ButtonModalOpenProps) => {
	return (
		<button
			className="px-5 py-2 text-base bg-orange-600 rounded-2xl text-white hover:cursor-pointer hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out md:px-8 md:py-5 md:text-lg lg:px-10 lg:py-6 lg:text-xl"
			onClick={onClick}
		>
			{content}
		</button>
	)
}
