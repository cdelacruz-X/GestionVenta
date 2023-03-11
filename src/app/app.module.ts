import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { GestionVentaContainerComponent } from './components/gestion-venta-container/gestion-venta-container.component';
// import { GestionVentaFooterComponent } from './components/gestion-venta-footer/gestion-venta-footer.component';
// import { GestionVentaHeaderComponent } from './components/gestion-venta-header/gestion-venta-header.component';
// import { GestionVentaMenuComponent } from './components/gestion-venta-menu/gestion-venta-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // GestionVentaContainerComponent,
    // GestionVentaFooterComponent,
    // GestionVentaHeaderComponent,
    // GestionVentaMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
