import { Action } from '@ngrx/store';
import { IGnomeData } from '../../models/http-response.model';


export const FETCH_GNOME_DATA = 'FETCH_GNOME_DATA';
export const SET_GNOME_DATA = 'SET_GNOME_DATA';
export const CONCAT_GNOME_DATA = 'CONCAT_GNOME_DATA';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const UPDATE_FILTERBY = 'UPDATE_FILTERBY';
export const RESET_SEARCHTERM = 'RESET_SEARCHTERM';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';


export class FetchGnomeData implements Action {
    readonly type = FETCH_GNOME_DATA;

    constructor() {}
}

export class SetGnomeData implements Action {
    readonly type = SET_GNOME_DATA;

    constructor(public payload: IGnomeData[]) {}
}

export class ConcatGnomeData implements Action {
    readonly type = CONCAT_GNOME_DATA;

    constructor(public payload: number) {}
}

export class UpdateSearchTerm implements Action {
    readonly type = UPDATE_SEARCH_TERM;

    constructor(public payload: string) {}
}

export class UpdateFilterBy implements Action {
    readonly type = UPDATE_FILTERBY;

    constructor( public payload: string) {}
}

export class ResetSearchTerm implements Action {
    readonly type = RESET_SEARCHTERM;
}

export class SetErrorMessage implements Action {
    readonly type = SET_ERROR_MESSAGE;

    constructor(public payload: any) {}
}

export class ClearErrorMessage implements Action {
    readonly type = CLEAR_ERROR_MESSAGE;
}

export type GnomeActions =
    FetchGnomeData
    | SetGnomeData
    | ConcatGnomeData
    | UpdateSearchTerm
    | UpdateFilterBy
    | ResetSearchTerm
    | SetErrorMessage
    | ClearErrorMessage;
