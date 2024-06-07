import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { Festivo } from '../../../core/entidades/Festivo';

export interface DatosVerificacionFestivo{
  encabezado: string;
  fecha: string;
  festivo: Festivo;
}

@Component({
  selector: 'app-festivo-verificar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule
  ],
  templateUrl: './festivo-verificar.component.html',
  styleUrl: './festivo-verificar.component.css'
})
export class FestivoVerificarComponent {

constructor(
  public DialogRef:MatDialogRef<FestivoVerificarComponent>,
  @Inject(MAT_DIALOG_DATA) public datos:DatosVerificacionFestivo
){

}

public cerrar(){
  this.DialogRef.close();

}

}
