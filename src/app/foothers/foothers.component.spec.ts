import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoothersComponent } from './foothers.component';

describe('FoothersComponent', () => {
  let component: FoothersComponent;
  let fixture: ComponentFixture<FoothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
