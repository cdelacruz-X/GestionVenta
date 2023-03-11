import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalComponentsRoutingModule } from './external-components-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ExternalComponentsRoutingModule
  ]
})
export class ExternalComponentsModule { }
