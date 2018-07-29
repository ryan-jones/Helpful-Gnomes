
import * as fromGnomes from './gnomes/gnomes.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppStore {
	gnomesData: fromGnomes.State;
}

export const reducers: ActionReducerMap<AppStore> = {
	gnomesData: fromGnomes.gnomeReducer
};

