import {
  assert
} from "chai";
import {
  Arithmeticable
} from "./Arithmeticable"

export class Racional implements Arithmeticable < Racional > {

  constructor(private num: number, private den: number) {}

  /**
   * Get Numerador
   * @returns Numerador
   */
  get_num(): number {
    return this.num;
  }

  /**
   * Get Denominador
   * @returns Denominador
   */
  get_den(): number {
    return this.den;
  }

  /**
   * Set numerador
   * @param a nuevo numerador
   */
  set_num(a: number) {
    this.num = a;
  }

  /**
   * Set denominador
   * @param b Nuevo denominador
   */
  set_den(b: number) {
    assert(b != 0);
    this.den = b;
  }

  /**
   * Simplifica la faraccion
   */
  simply() {
    let gcd = this.gcd(this.num, this.den);
    this.set_num(this.num / gcd)
    this.set_den(this.den / gcd)
  }

  /**
   * Maximo comun Divisor
   * @param num Numerador
   * @param den Denominador
   * @returns Maximo comun divisor 
   */
  gcd(num: number, den: number): number {
    return den ? this.gcd(den, num % den) : num;
  };

  /**
   * Invierte la fraccion
   */
  invert() {
    let tmp: number = this.get_num();
    this.set_num(this.get_den());
    assert(tmp != 0);
    this.set_den(tmp);
  }

  /**
   * Suma de racionales
   * @param a Un racional
   * @returns Nuevo racional 
   */
  add(a: Racional): Racional {
    let res: Racional = new Racional((this.get_num() * a.get_den()) + (this.get_den() * a.get_num()), (this.get_den() * a.get_den()))
    res.simply()
    return (res);
  }

  /**
   * Resta de racionales
   * @param a Un racional
   * @returns Nuevo racional 
   */
  sub(a: Racional): Racional {
    let res: Racional = new Racional((this.get_num() * a.get_den()) - (this.get_den() * a.get_num()), (this.get_den() * a.get_den()))
    res.simply()
    return (res);
  }

  /**
   * Multiplicacion de racionales
   * @param a Un racional
   * @returns Nuevo racional 
   */
  mul(a: Racional): Racional {
    let res: Racional = new Racional((this.get_num() * a.get_num()), (this.get_den() * a.get_den()))
    res.simply()
    return (res);
  }

  /**
   * Division de racionales
   * @param a Un racional
   * @returns Nuevo racional 
   */
  div(a: Racional): Racional {
    a.invert();
    let res: Racional = this.mul(a);
    res.simply()
    return (res);
  }

  /**
   * Imprimir un racional adecuadamente
   */
  print() {
    console.log(this.get_num() + "/" + this.get_den());
  }
  /**
   * Convertir un Racional a número en notación de punto fijo
   */
  convert(a: number): number {
    return parseFloat((this.get_num() / this.get_den()).toFixed(a));
  }
}