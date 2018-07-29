import { Component, AfterContentInit } from '@angular/core';
import { IGnome } from '../../models/http-response.model';
import * as fromGnomes from '../../store/gnomes/gnomes.reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-gnomes',
  templateUrl: './gnomes.component.html',
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements AfterContentInit {
  public gnomes: IGnome[] = [];
  public searchTerm: string;
  public filterBy: string;
  public error: string;

  constructor(private store: Store<fromGnomes.State>) { }

  ngAfterContentInit(): void {
    this.setGnomeValues();
  }

  private setGnomeValues(): void {
    this.store
      .pipe(select('gnomesData'))
      .subscribe((data: fromGnomes.State) => {
        if (data.gnomeData.length) {
          this.gnomes = data.gnomeData;
          this.searchTerm = data.searchTerm;
          this.filterBy = data.filterBy;
          this.error = data.error;
        }
      });
  }

  public onToggleCollapse(selectedGnome: IGnome): void {
    const selected = this.gnomes.find((gnome: IGnome) => gnome === selectedGnome);
    selected.isOpen = !selected.isOpen;
  }
}
