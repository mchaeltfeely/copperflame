import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContainerLoggedInComponent } from './layout-container-logged-in.component';

describe('LayoutContainerLoggedInComponent', () => {
  let component: LayoutContainerLoggedInComponent;
  let fixture: ComponentFixture<LayoutContainerLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutContainerLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutContainerLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
