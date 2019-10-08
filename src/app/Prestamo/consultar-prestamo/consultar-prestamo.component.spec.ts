import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPrestamoComponent } from './consultar-prestamo.component';

describe('ConsultarPrestamoComponent', () => {
  let component: ConsultarPrestamoComponent;
  let fixture: ComponentFixture<ConsultarPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
