import { BasicStreamableCollection } from "./basic";

/**
 * Atributos que tiene una película
 * @param titulo Título de la película
 * @param año Año en que fue lanzado
 * @param duration Cuánto tiempo dura
 * @param genero Genero de la película
 */
export type film = {
  titulo: string;
  año: number;
  duration: number;
  genero: string;
}

/**
 * Clase que representa una colección de películas.
 */
export class Films extends BasicStreamableCollection<film> {
  /**
   * Crea una nueva instancia de una colección
   * @param items Colección de películas
   */
  constructor(protected items: film[]) {
    super(items);
  }

  /**
   * Permite buscar elementos por un valor como título, año, etc.
   * @param param El parámetro por el que desea buscar
   * @param value El valor del parámetro
   */
  searchBy(param: string, value: string) {
    let result: film[] = [];
    if (param === 'titulo') {
      result = this.getItems().filter((x) => (x.titulo == value));
    }
    else if (param === 'año') {
      result = this.getItems().filter((x) => (x.año.toString() == value));
    }
    else if (param === 'duration') {
      result = this.getItems().filter((x) => (x.duration.toString() == value));
    }
    else if (param === 'genero') {
      result = this.getItems().filter((x) => (x.genero == value));
    }
    return result;
  }

  /**
  * Devuelve la colección
  */
  getItems() {
    return this.items;
  }
} 