import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffPage } from './tariff.page';

describe('TariffPage', () => {
  let component: TariffPage;
  let fixture: ComponentFixture<TariffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
