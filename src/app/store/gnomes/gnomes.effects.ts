import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as GnomeActions from './gnomes.actions';
import { map, switchMap, publishReplay, refCount } from 'rxjs/operators';
import * as fromGnomes from './gnomes.reducers';
import { HttpService } from '../../services/http.service';
import { IGnomeDataResponse, IGnomeData, IGnome } from '../../models/http-response.model';

@Injectable()
export class GnomeEffects {

	constructor(private actions$: Actions, private httpService: HttpService, private store: Store<fromGnomes.State>) { }

	@Effect()
	gnomeFetch = this.actions$
		.ofType(GnomeActions.FETCH_GNOME_DATA)
		.pipe(
			switchMap((action: GnomeActions.FetchGnomeData) => this.httpService.getGnomeData()),
			publishReplay(1),
			refCount(),
			map(
				(data: IGnomeDataResponse) => data.Brastlewark.map((gnome: IGnomeData) => {
					return {
						...gnome,
						isOpen: false
					};
				}),
				(error: any) => ({ type: GnomeActions.SET_ERROR_MESSAGE, payload: error })
			),
			map((data: IGnome[]) => ({ type: GnomeActions.SET_GNOME_DATA, payload: data }))
		);
}
