import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisfPageComponent } from './gisf-page.component';

describe('GisfPageComponent', () => {
  let component: GisfPageComponent;
  let fixture: ComponentFixture<GisfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GisfPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GisfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
