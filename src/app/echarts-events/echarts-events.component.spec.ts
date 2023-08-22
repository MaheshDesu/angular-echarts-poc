import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsEventsComponent } from './echarts-events.component';

describe('EchartsEventsComponent', () => {
  let component: EchartsEventsComponent;
  let fixture: ComponentFixture<EchartsEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EchartsEventsComponent]
    });
    fixture = TestBed.createComponent(EchartsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
