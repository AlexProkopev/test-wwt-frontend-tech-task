import { ReactNode } from 'react'

export const ApplyModalHeader = ({ children }: { children: ReactNode }) => (
	<h2 className="text-center text-xl md:text-2xl xl:text-4xl xl:font-medium ">
		{children}
	</h2>
)
