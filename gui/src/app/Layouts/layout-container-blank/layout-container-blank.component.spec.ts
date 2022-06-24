import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContainerBlankComponent } from './layout-container-blank.component';

describe('LayoutContainerBlankComponent', () => {
  let component: LayoutContainerBlankComponent;
  let fixture: ComponentFixture<LayoutContainerBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutContainerBlankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutContainerBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
