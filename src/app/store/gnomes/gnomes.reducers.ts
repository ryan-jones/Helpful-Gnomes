import * as gnomeActions from './gnomes.actions';
import { IGnome } from '../../models/http-response.model';

export interface State {
	gnomeData: IGnome[];
	viewableGnomes: number;
	filterBy: string;
	searchTerm: string;
	error: any;
}

export const initialState = {
	gnomeData: [],
	viewableGnomes: 20,
	filterBy: 'name',
	searchTerm: '',
	error: null
};

export function gnomeReducer(state = initialState, action: gnomeActions.GnomeActions) {
	let newState;
	switch (action.type) {
		case (gnomeActions.SET_GNOME_DATA):
			newState = {
				...state,
				gnomeData: action.payload
			};
			return newState;
		case (gnomeActions.UPDATE_SEARCH_TERM):
			newState = {
				...state,
				searchTerm: action.payload
			};
			return newState;
		case (gnomeActions.UPDATE_FILTERBY):
			newState = {
				...state,
				filterBy: action.payload
			};
			return newState;
		case (gnomeActions.RESET_SEARCHTERM):
			newState = {
				...state,
				searchTerm: ''
			};
			return newState;
		case (gnomeActions.SET_ERROR_MESSAGE):
			newState = {
				...state,
				error: action.payload
			};
			return newState;
		case (gnomeActions.CLEAR_ERROR_MESSAGE):
			newState = {
				...state,
				error: null
			};
			return newState;
		default:
			return state;
	}
}

