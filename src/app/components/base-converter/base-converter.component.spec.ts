import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConverterComponent } from './base-converter.component';

describe('BaseConverterComponent', () => {
  let component: BaseConverterComponent;
  let fixture: ComponentFixture<BaseConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseConverterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
