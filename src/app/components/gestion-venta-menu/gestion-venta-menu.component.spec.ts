import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentaMenuComponent } from './gestion-venta-menu.component';

describe('GestionVentaMenuComponent', () => {
  let component: GestionVentaMenuComponent;
  let fixture: ComponentFixture<GestionVentaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionVentaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionVentaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
