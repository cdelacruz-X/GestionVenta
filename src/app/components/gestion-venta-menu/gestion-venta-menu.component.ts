import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gestion-venta-menu',
  templateUrl: './gestion-venta-menu.component.html',
  styleUrls: ['./gestion-venta-menu.component.scss']
})
export class GestionVentaMenuComponent {
  responsive:string='false';
  @ViewChild('nav')nav!:ElementRef;

  onValidarMenu(event: any){
    this.responsive=event;
    this.nav.nativeElement.dataset.teSidenavHidden=this.responsive;
    this.responsive=this.nav.nativeElement.dataset.teSidenavHidden;
  }
}
