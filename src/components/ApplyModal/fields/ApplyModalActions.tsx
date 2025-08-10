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
		<div className="mt-[120px] flex justify-center gap-[32px]">
			<button
				onClick={onCancel}
				className="px-[90px] py-[26px] rounded-2xl outline-2 outline-offset-[-2px] outline-zinc-400 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out hover:cursor-pointer"
			>
				{t('useOldFilters')}
			</button>
			<button
				onClick={onSubmit}
				className="px-[90px] py-[26px] rounded-2xl bg-orange-600 outline-zinc-400 text-white text-base font-semibold hover:bg-orange-700 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out hover:cursor-pointer"
			>
				{t('submitButtonText')}
			</button>
		</div>
	)
}
