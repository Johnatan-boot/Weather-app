import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheaterHomeComponent } from './pages/wheater/components/wheater-home.component';

//configuração de Rotas da Aplicação
const routes: Routes = [
  {
    path:'',
    redirectTo:'weather',
    pathMatch:'full'
  },
  {
    path:'weather',
    component:WheaterHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
