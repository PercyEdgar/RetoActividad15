import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto15Component } from './reto15.component';

describe('Reto15Component', () => {
  let component: Reto15Component;
  let fixture: ComponentFixture<Reto15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reto15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
