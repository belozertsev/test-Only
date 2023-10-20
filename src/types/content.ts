interface IEvent {
	year: string,
	description: string
}

interface IPeriod {
	field: string,
	years: string,
	events: IEvent[]
}

interface IContent {
	blockName: string,
	periods: IPeriod[]
}

export type { IEvent, IPeriod, IContent }