import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAngularComponent } from './diretivas-angular.component';

describe('DiretivasAngularComponent', () => {
  let component: DiretivasAngularComponent;
  let fixture: ComponentFixture<DiretivasAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
