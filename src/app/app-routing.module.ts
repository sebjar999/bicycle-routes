import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then(m => m.RegistrarPageModule)
  },
  {
    path: 'iniciar-seccion',
    loadChildren: () => import('./pages/iniciar-seccion/iniciar-seccion.module').then(m => m.IniciarSeccionPageModule)
  },
  {
    path: 'definir',
    loadChildren: () => import('./pages/definir/definir.module').then( m => m.DefinirPageModule)
  },
  {
    path: 'crear-ruta',
    loadChildren: () => import('./pages/crear-ruta/crear-ruta.module').then( m => m.CrearRutaPageModule)
  },
  {
    path: 'rutas-disponibles',
    loadChildren: () => import('./pages/rutas-disponibles/rutas-disponibles.module').then( m => m.RutasDisponiblesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
