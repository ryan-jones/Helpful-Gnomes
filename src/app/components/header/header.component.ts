import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IGnomeDataResponse, IGnome } from '../../models/http-response.model';
import { Store, select } from '@ngrx/store';
import * as fromGnomes from '../../store/gnomes/gnomes.reducers';
import * as GnomeActions from '../../store/gnomes/gnomes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public filters: string[] = ['Names', 'Professions', 'Friends'];
  public navStatus = false;
  public searchValue = '';
  public selectedFilter = 'Names';
  public placeholder = `Filter by ${this.selectedFilter}`;

  constructor(private httpService: HttpService, private store: Store<fromGnomes.State>) { }

  ngOnInit(): void {
    this.resetInput();
  }

  public onKeyup(event: any): void {
    this.store.dispatch(new GnomeActions.UpdateSearchTerm(event.target.value));
  }

  public setFilterBy(filter: string): void {
    const input = filter.toLowerCase();
    this.selectedFilter = filter;
    this.placeholder = `Filter by ${this.selectedFilter}`;
    this.store.dispatch(new GnomeActions.ResetSearchTerm);
    this.store.dispatch(new GnomeActions.UpdateFilterBy(input));
  }

  public onToggleCollapse = (): boolean => this.navStatus = !this.navStatus;

  private resetInput(): void {
    this.store
      .pipe(select('gnomesData'))
      .subscribe((data: fromGnomes.State) => {
        if (data && !data.searchTerm) {
          this.searchValue = null;
        }
      });
  }
}
