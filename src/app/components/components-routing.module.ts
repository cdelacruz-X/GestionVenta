import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { GestionVentaContainerComponent } from './gestion-venta-container/gestion-venta-container.component';
import { ProductoComponent } from './producto/producto.component';
// import { GestionVentaMenuComponent } from './gestion-venta-menu/gestion-venta-menu.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {
    path: '', component: GestionVentaContainerComponent,
    children: [
      { path: 'vendedor', component: VendedorComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'producto', component: ProductoComponent },
      { path: 'venta', component: VentaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
