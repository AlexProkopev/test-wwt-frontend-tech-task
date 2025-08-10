import { ReactNode } from 'react'

export const ApplyModalHeader = ({ children }: { children: ReactNode }) => (
	<h2 className='text-neutral-700 text-4xl text-center font-medium font-["Inter"]'>
		{children}
	</h2>
)
