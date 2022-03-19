import { Streamable } from "./streamable";

/**
 * Permite implementar el método de búsqueda
 * @function searchBy Permite buscar elementos por un valor como título, año, etc.
 */
export interface Searchable<T> extends Streamable<T> {
  searchBy(param: string, value: string): T[];
} 