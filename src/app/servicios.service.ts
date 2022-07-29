import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './modelos/empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private urldbservice = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }

  public getAdministrador():Observable<any>{
    return this.http.get(this.urldbservice+'/administrador');
  }
  public getEmpleados():Observable<any>{
    return this.http.get(this.urldbservice+'/empleados');
  }
  public crearEmpleado(data:Empleado):Observable<Empleado>{
    return this.http.post(this.urldbservice+'/empleados',data);
  }
  public editarEmpleadoServicio(data:Empleado):Observable<Empleado>{
    return this.http.put(this.urldbservice+'/empleados/'+data.id,data);
  }
  public eliminarEmpleadoServicio(data:Empleado):Observable<any>{
    return this.http.delete(this.urldbservice+'/empleados/'+data.id);
  }
}
