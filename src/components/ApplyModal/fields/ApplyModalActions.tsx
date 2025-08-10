import { useTranslation } from 'react-i18next'

interface ApplyModalActionsProps {
	onCancel: () => void
	onSubmit: () => void
}

export const ApplyModalActions = ({
	onCancel,
	onSubmit
}: ApplyModalActionsProps) => {
	const { t } = useTranslation()
	return (
		<div className="flex flex-col md:justify-center gap-[15px] mt-[60px] md:mt-[120px] md:gap-[32px] md:flex-row">
			<button
				onClick={onCancel}
				className=" p-[5px] rounded-2xl outline-2 outline-offset-[-2px] outline-zinc-400 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out hover:cursor-pointer md:px-[90px] md:py-[26px]"
			>
				{t('useOldFilters')}
			</button>
			<button
				onClick={onSubmit}
				className=" flex items-center justify-center p-[5px] rounded-2xl bg-orange-600 outline-zinc-400 text-white text-base font-semibold hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out hover:cursor-pointer md:px-[90px] md:py-[26px]"
			>
				{t('submitButtonText')}
			</button>
		</div>
	)
}
