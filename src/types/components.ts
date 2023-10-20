interface IButtonCircle {
	active: number,
	total: number,
	label: string,
	onChange: Function,
	children?: React.ReactElement
}

interface INavigation {
	active: number,
	total: number,
	onChange: Function
}

export type { IButtonCircle, INavigation }