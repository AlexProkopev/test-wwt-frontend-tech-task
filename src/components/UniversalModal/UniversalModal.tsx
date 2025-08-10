import { ReactNode } from 'react'

import { motion } from 'framer-motion'

interface UniversalModalProps {
	children: ReactNode
	onClose: () => void
}

export const UniversalModal = ({ children, onClose }: UniversalModalProps) => {
	return (
		<motion.div
			onClick={onClose}
			className="fixed inset-0 bg-zinc-900/30 backdrop-blur-md z-50 flex justify-center items-center p-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div
				className="bg-white rounded-2xl max-w-[1280px] w-full p-8 relative"
				onClick={e => e.stopPropagation()}
				initial={{ opacity: 0, scale: 0.95, y: -20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: -20 }}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
