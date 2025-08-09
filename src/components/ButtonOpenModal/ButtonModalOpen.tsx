
interface ButtonModalOpenProps {
	onClick: () => void
	content: string
}

const ButtonModalOpen = ({ content, onClick }: ButtonModalOpenProps) => {
	return <button onClick={onClick}>{content}</button>
}

export default ButtonModalOpen
