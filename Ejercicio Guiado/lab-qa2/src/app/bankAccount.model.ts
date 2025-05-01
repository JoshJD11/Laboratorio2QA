import { Count } from "./count";

export class bankAccount implements Count {

    numCuenta: number;
    cantidadDinero: number;
    tipo: string;

    constructor(numCuenta: number, cantidadDinero: number, tipo: string) {
        this.numCuenta = numCuenta;
        this.cantidadDinero = cantidadDinero;
        this.tipo = tipo;
    }

    getNumCuenta(): number {
        return this.numCuenta;
    }
    setNumCuenta(numeroCuenta: number): void {
        this.numCuenta = numeroCuenta;
    }
    getCantidadDinero(): number {
        return this.cantidadDinero;
    }
    setCantidadDinero(cantidadDinero: number): void {
        this.cantidadDinero = cantidadDinero;
    }
    getTipo(): string {
        return this.tipo;
    }
    setTipo(tipo: string): void {
        this.tipo = tipo;
    }
    retirar(monto: number): number {
        if(this.cantidadDinero - monto >= 0) {
            this.cantidadDinero -= monto;
            return 1;
        } 
        return 0;
    }
    depositar(monto: number): void {
        this.cantidadDinero += monto;
    }
    liquidar(): number {
        const saldoFinal = this.cantidadDinero;
        this.cantidadDinero = 0;
        return saldoFinal;
    }
    
}
