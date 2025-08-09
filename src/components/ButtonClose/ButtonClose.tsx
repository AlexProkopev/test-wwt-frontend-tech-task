import { SVGProps } from 'react'

export const SvgClose = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width="24px"
			height="24px"
			{...props}
		>
			<g
				fill="none"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
			>
				<path d="M14 14L34 34"></path>
				<path d="M14 34L34 14"></path>
			</g>
		</svg>
	)
}
