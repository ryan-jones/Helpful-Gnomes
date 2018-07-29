import { Component, OnInit } from '@angular/core';
import * as fromGnomes from './store/gnomes/gnomes.reducers';
import * as GnomeActions from './store/gnomes/gnomes.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromGnomes.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new GnomeActions.FetchGnomeData);
  }
}
