import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplechartComponent } from './simplechart.component';

describe('SimplechartComponent', () => {
  let component: SimplechartComponent;
  let fixture: ComponentFixture<SimplechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplechartComponent]
    });
    fixture = TestBed.createComponent(SimplechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
