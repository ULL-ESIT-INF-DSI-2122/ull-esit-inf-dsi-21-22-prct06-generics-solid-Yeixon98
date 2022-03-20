/**
 * Permite representar algoritmos de cifrados
 * @function encrypt Cifrar el mensaje con la clave
 * @function decrypt descifrar el mensaje con la clave 
 */

export interface Algoritms {
  encrypt(msg: string, key: string): string;
  decrypt(msg: string, key: string): string;
} 