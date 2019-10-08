import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEditorialComponent } from './consultar-editorial.component';

describe('ConsultarEditorialComponent', () => {
  let component: ConsultarEditorialComponent;
  let fixture: ComponentFixture<ConsultarEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
