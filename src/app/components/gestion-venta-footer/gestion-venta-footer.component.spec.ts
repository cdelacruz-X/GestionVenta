import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentaFooterComponent } from './gestion-venta-footer.component';

describe('GestionVentaFooterComponent', () => {
  let component: GestionVentaFooterComponent;
  let fixture: ComponentFixture<GestionVentaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionVentaFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionVentaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
