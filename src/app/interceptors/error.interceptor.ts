import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '../../../node_modules/@ngrx/store';
import * as fromGnomes from '../store/gnomes/gnomes.reducers';
import * as gnomeActions from '../store/gnomes/gnomes.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private store: Store<fromGnomes.State>) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req)
			.pipe(
				tap(
					(event: any) => this.store.dispatch(new gnomeActions.ClearErrorMessage),
					(err: any) => this.store.dispatch(new gnomeActions.SetErrorMessage(err)))
			);
	}
}
