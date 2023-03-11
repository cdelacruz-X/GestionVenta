import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentaHeaderComponent } from './gestion-venta-header.component';

describe('GestionVentaHeaderComponent', () => {
  let component: GestionVentaHeaderComponent;
  let fixture: ComponentFixture<GestionVentaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionVentaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionVentaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
