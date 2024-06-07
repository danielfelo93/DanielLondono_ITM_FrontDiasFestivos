import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FestivoService } from '../../servicios/festivo.service';
import { MatDialog } from '@angular/material/dialog';
import { FestivoVerificarComponent } from '../festivo-verificar/festivo-verificar.component';


@Component({
  selector: 'app-festivo',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})

export class FestivoComponent {
  public anobusqueda: number = 2024;
  public textobusqueda: Date = new Date();
  public festivos: Festivo[] = [];
  public columnas = [
    { name: "Dia festivo", prop: "nombre" },
    { name: "Dia", prop: "dia" },
    { name: "Mes", prop: "mes" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(
    private servicio: FestivoService,
    private servicioDialogo: MatDialog
  ) {
    /* this.listar(); */
    this.listarAno();
  }

  listar() {
    this.servicio.listar().subscribe({
      next: response => {
        this.festivos = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

  listarAno() {
    this.servicio.listarAno(this.anobusqueda).subscribe({
      next: response => {
        this.festivos = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

  /* buscar() {
    window.alert(this.textobusqueda);
  } */

  validar() {
    const fechaSeleccionada = new Date(this.textobusqueda);
    const dia = fechaSeleccionada.getDate();
    const mes = fechaSeleccionada.getMonth() + 1; // Los meses en JavaScript son 0-indexados
    const ano = fechaSeleccionada.getFullYear();

    this.servicio.validar(dia, mes, ano).subscribe({
      next: isFestivo => {
        this.servicioDialogo.open(FestivoVerificarComponent, {
          width: "400px",
          height: "250px",
          disableClose: true,
          data: {
            encabezado: "La fecha que introdujiste es: ",
            fecha: this.textobusqueda,
            festivo: {
              dia: dia,
              mes: mes,
              ano: ano,
              nombre: isFestivo ? 'Es festivo' : 'No es festivo'
            }
          }
        });
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

}
