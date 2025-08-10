import { useTranslation } from 'react-i18next'

import { UniversalModal } from '../UniversalModal/UniversalModal'
import { ApplyModalActions } from './fields/ApplyModalActions'
import { ApplyModalHeader } from './fields/ApplyModalHeader'

interface ApplyModalProps {
	onClick: () => void
	setIsOpen: (isOpen: boolean) => void
}

const ApplyModal = ({ onClick, setIsOpen }: ApplyModalProps) => {
	const { t } = useTranslation()

	const reset = () => setIsOpen(false)

	return (
		<UniversalModal onClose={reset}>
			<ApplyModalHeader>{t('applyNewFilter')}</ApplyModalHeader>
			<ApplyModalActions
				onCancel={reset}
				onSubmit={onClick}
			/>
		</UniversalModal>
	)
}

export default ApplyModal
