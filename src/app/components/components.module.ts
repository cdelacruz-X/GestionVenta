import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { GestionVentaMenuComponent } from './gestion-venta-menu/gestion-venta-menu.component';
import { GestionVentaHeaderComponent } from './gestion-venta-header/gestion-venta-header.component';
import { GestionVentaContainerComponent } from './gestion-venta-container/gestion-venta-container.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';


@NgModule({
  declarations: [
    GestionVentaMenuComponent,
    GestionVentaHeaderComponent,
    GestionVentaContainerComponent,
    VendedorComponent,
    ClienteComponent,
    ProductoComponent,
    VentaComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
