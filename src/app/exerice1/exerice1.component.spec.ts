import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerice1Component } from './exerice1.component';

describe('Exerice1Component', () => {
  let component: Exerice1Component;
  let fixture: ComponentFixture<Exerice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
