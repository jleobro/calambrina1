import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  administrador: any='';
  password: any='';
  flag: boolean=false;
  opcion: any='';
  empleado!: Empleado;
  empleados!: Empleado[];
  
  constructor(private servi:ServiciosService) { }

  ngOnInit(): void {
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

  login() {
    this.servi.getAdministrador().subscribe(res=>{
      console.log(res);
      if (res[0].nombre===this.administrador && res[0].contraseña===this.password) 
      {
        this.flag=true;
      } 
      else
      {
          alert('USURIO NO VALIDO');
      }  
    });
  }

  crearEmpleado(){
    this.empleado.passwordU=this.empleado.cedula;
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