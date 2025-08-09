import { useTranslation } from 'react-i18next'

import { SearchRequestFilterBase } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

interface ApplyModalProps {
	dataFilters: SearchRequestFilterBase[]
	onClick: () => void
	setIsOpen: (isOpen: boolean) => void
}

const ApplyModal = ({ dataFilters, onClick, setIsOpen }: ApplyModalProps) => {
	const { t } = useTranslation()
	const handleSubmit = () => {
		localStorage.setItem('confirmedFilters', JSON.stringify(dataFilters))
		onClick()
	}
	const reset = () => {
		setIsOpen(false)
	}

	return (
		<div className=" fixed top-0 left-0 w-full h-full  bg-zinc-900/30 backdrop-blur-md">
			<div className=" relative mx-auto mt-[80px] bg-white rounded-2xl p-8 w-[1280px]">
				<h2 className='text-neutral-700 text-4xl font-medium font-["Inter"]'>
					{t('applyNewFilter')}
				</h2>
				<div className="mt-[120px] flex justify-center gap-[32px]">
					<button
						onClick={reset}
						className="px-[90px] py-[26px] rounded-2xl  outline-2 outline-offset-[-2px] outline-zinc-400"
					>
						{t('useOldFilters')}
					</button>
					<button
						className="px-[90px] py-[26px] rounded-2xl   bg-orange-600 outline-zinc-400 text-white text-base font-semibold font-['Inter']"
						onClick={handleSubmit}
					>
						{t('submitButtonText')}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ApplyModal
