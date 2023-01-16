import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad15Component } from './actividad15.component';

describe('Actividad15Component', () => {
  let component: Actividad15Component;
  let fixture: ComponentFixture<Actividad15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actividad15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
