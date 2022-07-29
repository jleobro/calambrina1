import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  
  usuario: any='';
  passwordU: any='';
  flagE: boolean=false;
  opcion: any='';
  empleado!: Empleado;
  empleados!: Empleado[];

  constructor(private servi:ServiciosService) { }

  ngOnInit(): void {
    // this.flagE = true;
    this.opcion = 'listar';
    this.empleado = new Empleado();
    this.empleados= [];
    this.obtenerEmpleados();

  }

  obtenerEmpleados() {
    this.servi.getEmpleados().subscribe(res => {
      this.empleados = res;
    });
  }

  loginUsuario() {
    this.servi.getEmpleados().subscribe(res=>{
      console.log(res);
      const usu = res.find((ele : any)=>{
        return ele.cedula==this.usuario && ele.passwordU===this.passwordU
      });
        
        if (usu) 
        {
          this.flagE=true;
          this.empleados=[];
          this.empleados.push(usu);
        } 
        else
        {
            alert('USURIO NO VALIDO');
        }  
    });
  }

  crearEmpleado(){
    this.servi.crearEmpleado(this.empleado).subscribe(res=>{
      if (res){
        this.obtenerEmpleados();
        this.opcion = 'listar';
      }
    });
  }
  editarEmpleadoServicio(){
    this.servi.editarEmpleadoServicio(this.empleado).subscribe(res=>{
      if (res){
        this.obtenerEmpleados();
        this.opcion = 'listar';
      }
    });
  }
  eliminarEmpleadoServicio(){
    this.servi.eliminarEmpleadoServicio(this.empleado).subscribe(res=>{
      if (res){
        this.obtenerEmpleados();
        this.opcion = 'listar';
      }
    });
  }

  editarEmpleado(empleado: Empleado) {
    console.log(empleado);
    this.empleado = empleado;
  }

}
