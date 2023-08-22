import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDatasetChartComponent } from './random-dataset-chart.component';

describe('RandomDatasetChartComponent', () => {
  let component: RandomDatasetChartComponent;
  let fixture: ComponentFixture<RandomDatasetChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomDatasetChartComponent]
    });
    fixture = TestBed.createComponent(RandomDatasetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
