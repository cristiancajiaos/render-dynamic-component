import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderAlertComponent } from './render-alert.component';

describe('RenderAlertComponent', () => {
  let component: RenderAlertComponent;
  let fixture: ComponentFixture<RenderAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
