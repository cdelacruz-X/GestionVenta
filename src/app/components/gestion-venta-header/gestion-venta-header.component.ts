import { Component, Input, Output , OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gestion-venta-header',
  templateUrl: './gestion-venta-header.component.html',
  styleUrls: ['./gestion-venta-header.component.scss']
})
export class GestionVentaHeaderComponent implements OnInit{
  responsive:string='false';

  @Output () valueResponse: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  ocultarMenu(){
    this.responsive=this.responsive=='false'?'true':'false';
    this.valueResponse.emit(this.responsive)
  }
}
