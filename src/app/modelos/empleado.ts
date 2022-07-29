import { DatosVacuna } from "./datos-vacuna";

export class Empleado {
    public id?: number;
    public cedula?: string;
    public nombres?: string;
    public apellidos?: string;
    public correo?: string;
    public fecha?: Date;
    public direccion?: string;
    public telefono?: number;
    public vacuna?: boolean;
    public datosVacuna?: DatosVacuna;
    public passwordU?: string;
}