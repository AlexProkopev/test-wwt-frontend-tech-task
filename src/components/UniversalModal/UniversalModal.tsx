import { ReactElement } from 'react'

interface UniversalModalProps {
	children: ReactElement
	onClose: () => void
}

const UniversalModal = ({ children, onClose }: UniversalModalProps) => {
	return (
		<div
			onClick={onClose}
			className="  fixed top-0 left-0 w-full h-full  bg-zinc-900/30 backdrop-blur-md"
		>
			<div
				className="w-[1280px] relative mx-auto mt-[80px]"
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default UniversalModal
