import { useState } from 'react'

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)

	const onClick = (): void => {
		setIsOpen(!isOpen)
	}

	return { isOpen, onClick }
}

export default useModal
