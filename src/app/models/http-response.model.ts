export interface IGnomeDataResponse {
	Brastlewark: IGnomeData[];
}

export interface IGnomeData {
	age: number;
	friends: string[];
	hair_color: string;
	height: number;
	id: number;
	name: string;
	professions: string[];
	thumbnail: string;
	weight: number;
}

export interface IGnome extends IGnomeData {
	isOpen: boolean;
}
