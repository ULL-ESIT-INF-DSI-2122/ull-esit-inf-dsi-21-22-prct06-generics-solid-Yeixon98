/**
 * Permite crear una colección de elementos que se pueden transmitir
 * @function addItem Permite insertar un nuevo elemento a la colección
 * @function getItems Devuelve la colección
 * @function getNumberOfItems Obtiene la longitud de la colección
 */
export interface Streamable<T> {
  addItem(newItem: T): void;
  getItems(): T[];
  getNumberOfItems(): number;
} 