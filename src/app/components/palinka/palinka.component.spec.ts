import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalinkaComponent } from './palinka.component';

describe('PalinkaComponent', () => {
  let component: PalinkaComponent;
  let fixture: ComponentFixture<PalinkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalinkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalinkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
