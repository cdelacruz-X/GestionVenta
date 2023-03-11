import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren:() => import("./external-components/external-components.module")
      .then(m => m.ExternalComponentsModule)
  },
  {
    path: "gestion-ventas",
    loadChildren:() => import("./components/components.module")
      .then(m => m.ComponentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
