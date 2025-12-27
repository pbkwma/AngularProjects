import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringcomponentComponent } from './stringcomponent.component';

describe('StringcomponentComponent', () => {
  let component: StringcomponentComponent;
  let fixture: ComponentFixture<StringcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
