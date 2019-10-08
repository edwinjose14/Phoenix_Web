import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarUsuarioComponent } from './Usuarios/agregar-usuario/agregar-usuario.component';
import { ConsultarUsuarioComponent } from './Usuarios/consultar-usuario/consultar-usuario.component';
import { EditarUsuarioComponent } from './Usuarios/editar-usuario/editar-usuario.component';
import { EditarAutorComponent } from './Autor/editar-autor/editar-autor.component';
import { ConsultarAutorComponent } from './Autor/consultar-autor/consultar-autor.component';
import { AgregarAutorComponent } from './Autor/agregar-autor/agregar-autor.component';
import { AgregarEditorialComponent } from './Editorial/agregar-editorial/agregar-editorial.component';
import { ConsultarEditorialComponent } from './Editorial/consultar-editorial/consultar-editorial.component';
import { EditarEditorialComponent } from './Editorial/editar-editorial/editar-editorial.component';
import { AgregarLibroComponent } from './Libros/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './Libros/editar-libro/editar-libro.component';
import { ConsultarLibroComponent } from './Libros/consultar-libro/consultar-libro.component';
import { ConsultarPrestamoComponent } from './Prestamo/consultar-prestamo/consultar-prestamo.component';
import { EditarPrestamoComponent } from './Prestamo/editar-prestamo/editar-prestamo.component';
import { AgregarPrestamoComponent } from './Prestamo/agregar-prestamo/agregar-prestamo.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ConsultarUsuarioComponent,
    EditarUsuarioComponent,
    EditarAutorComponent,
    ConsultarAutorComponent,
    AgregarAutorComponent,
    AgregarEditorialComponent,
    ConsultarEditorialComponent,
    EditarEditorialComponent,
    AgregarLibroComponent,
    EditarLibroComponent,
    ConsultarLibroComponent,
    ConsultarPrestamoComponent,
    EditarPrestamoComponent,
    AgregarPrestamoComponent,
    InicioComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NgModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
