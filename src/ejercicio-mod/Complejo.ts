import {
  assert
} from "chai";
import {
  Arithmeticable
} from "./Arithmeticable"

export class Complejo implements Arithmeticable < Complejo > {

  constructor(private real: number, private imag: number) {}

  get_real(): number {
    return this.real;
  }

  /**
   * Get Denominador
   * @returns Denominador
   */
  get_imag(): number {
    return this.imag;
  }

  /**
   * Set numerador
   * @param a nuevo numerador
   */
  set_num(a: number) {
    this.real = a;
  }

  /**
   * Set denominador
   * @param b Nuevo denominador
   */
  set_den(b: number) {
    this.imag = b;
  }

  /**
   * Suma de Complejos
   * @param other Un complejo
   * @returns Nuevo complejo 
   */
  add(other: Complejo): Complejo {
    return new Complejo(this.real + other.get_real(), this.imag + other.get_imag())
  }

  /**
   * Restar de Complejos
   * @param other Un complejo
   * @returns Nuevo complejo 
   */
  sub(other: Complejo): Complejo {
    return new Complejo(this.real - other.get_real(), this.imag - other.get_imag())
  }

  /**
   * Dividir de Complejos
   * @param other Un complejo
   * @returns Nuevo complejo 
   */
  div(other: Complejo): Complejo {
    let newReal: number = (this.real * other.get_real() + this.imag * other.get_imag()) / (other.get_real() ** 2 + other.get_imag() ** 2)
    let newImag: number = (this.imag * other.get_real() - this.real * other.get_imag()) / (other.get_real() ** 2 + other.get_imag() ** 2)
    return new Complejo(newReal, newImag)
  }

  /**
   * Multiplicar de Complejos
   * @param other Un complejo
   * @returns Nuevo complejo 
   */
  mul(other: Complejo): Complejo {
    return new Complejo(this.real * other.get_real() - this.imag * other.get_imag(), this.real * other.get_imag() + this.imag * other.get_real())
  }
}