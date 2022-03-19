import { Searchable } from "./searchable";

/**
 * Clase que representa una colección de elementos que se pueden transmitir y buscar
 */
export abstract class BasicStreamableCollection<T> implements Searchable<T> {
  /**
   * Crea una nueva instancia de una colección que se puede transmitir
   * @param items Colección de artículos
   */
  constructor(protected items: T[]) {
  }

  /**
   * Permite buscar elementos por un valor como título, año, etc.
   * @param param El parámetro por el que desea buscar
   * @param value El valor del parámetro
   */
  abstract searchBy(param: string, value: string): T[];

  /**
   * Permite insertar un nuevo elemento a la colección 
   * @param newItem Elemento que queremos insertar
   */
  addItem(newItem: T) {
    this.items.push(newItem);
  }

  /**
   * Devuelve la colección
   */
  abstract getItems(): T[];

  /**
   * Obtiene la duración de la colección
   * @returns Duración de la colección
   */
  getNumberOfItems() {
    return this.items.length;
  }
} 