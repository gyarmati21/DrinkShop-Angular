import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorokComponent } from './borok.component';

describe('BorokComponent', () => {
  let component: BorokComponent;
  let fixture: ComponentFixture<BorokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
