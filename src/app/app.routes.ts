import { Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { FestivoComponent } from './features/componentes/festivo/FestivoComponent';

export const routes: Routes = [
    { path: "inicio", component: InicioComponent},
    { path: "festivo", component: FestivoComponent}
];
