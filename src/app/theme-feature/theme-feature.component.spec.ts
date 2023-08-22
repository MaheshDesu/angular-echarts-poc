import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFeatureComponent } from './theme-feature.component';

describe('ThemeFeatureComponent', () => {
  let component: ThemeFeatureComponent;
  let fixture: ComponentFixture<ThemeFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeFeatureComponent]
    });
    fixture = TestBed.createComponent(ThemeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
