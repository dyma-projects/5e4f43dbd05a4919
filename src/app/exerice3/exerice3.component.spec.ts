import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerice3Component } from './exerice3.component';

describe('Exerice3Component', () => {
  let component: Exerice3Component;
  let fixture: ComponentFixture<Exerice3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerice3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
