/**
 * Interfaz generica que permite hacer operaciones basicas
 * @function add Permite sumar dos 'T'
 * @function sub Permite restar dos 'T'
 * @function div Permite dividir dos 'T'
 * @function mul Permite multiplicar dos 'T'
 */
export interface Arithmeticable < T > {
  add(other: T): T;
  sub(other: T): T;
  div(other: T): T;
  mul(other: T): T;
}