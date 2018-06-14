import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestamodComponent } from './respuestamod.component';

describe('RespuestamodComponent', () => {
  let component: RespuestamodComponent;
  let fixture: ComponentFixture<RespuestamodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestamodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestamodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
