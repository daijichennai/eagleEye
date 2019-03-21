import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseventsPage } from './newsevents.page';

describe('NewseventsPage', () => {
  let component: NewseventsPage;
  let fixture: ComponentFixture<NewseventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewseventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
