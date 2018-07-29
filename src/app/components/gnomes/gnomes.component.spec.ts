import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomesComponent } from './gnomes.component';

describe('GnomesComponent', () => {
  let component: GnomesComponent;
  let fixture: ComponentFixture<GnomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
