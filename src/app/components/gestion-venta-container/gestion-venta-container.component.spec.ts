import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentaContainerComponent } from './gestion-venta-container.component';

describe('GestionVentaContainerComponent', () => {
  let component: GestionVentaContainerComponent;
  let fixture: ComponentFixture<GestionVentaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionVentaContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionVentaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
