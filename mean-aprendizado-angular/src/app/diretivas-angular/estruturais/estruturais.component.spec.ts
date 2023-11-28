import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaisComponent } from './estruturais.component';

describe('EstruturaisComponent', () => {
  let component: EstruturaisComponent;
  let fixture: ComponentFixture<EstruturaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
