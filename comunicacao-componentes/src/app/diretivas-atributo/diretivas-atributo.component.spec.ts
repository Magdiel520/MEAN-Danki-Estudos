import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAtributoComponent } from './diretivas-atributo.component';

describe('DiretivasAtributoComponent', () => {
  let component: DiretivasAtributoComponent;
  let fixture: ComponentFixture<DiretivasAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasAtributoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
