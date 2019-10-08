import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarUsuarioComponent } from './Usuarios/agregar-usuario/agregar-usuario.component';
import { AgregarLibroComponent} from './Libros/agregar-libro/agregar-libro.component';
import { AgregarAutorComponent} from './Autor/agregar-autor/agregar-autor.component';
import {AgregarPrestamoComponent} from './Prestamo/agregar-prestamo/agregar-prestamo.component';
import { AgregarEditorialComponent} from './Editorial/agregar-editorial/agregar-editorial.component';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [
  {path:'agregarLibro', component:AgregarLibroComponent},
  {path:'agregarUsuario', component:AgregarUsuarioComponent},
  {path:'agregarAutor', component:AgregarAutorComponent},
  {path:'agregarEditorial', component:AgregarEditorialComponent},
  {path:'agregarPrestamo', component:AgregarPrestamoComponent},
  {path:'iniComponent', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
