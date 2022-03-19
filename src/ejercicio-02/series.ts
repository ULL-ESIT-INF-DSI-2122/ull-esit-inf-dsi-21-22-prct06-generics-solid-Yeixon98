import { BasicStreamableCollection } from "./basic";

/**
 * Atributos que tiene una serie
 * @param titulo Título de la serie
 * @param año Año en que fue lanzado
 * @param temporadas Cuantas temporadas tiene
 * @param episodios Cuántos episodios tiene
 * @param genero genero de la serie
 */
export type serie = {
  titulo: string;
  año: number;
  temporada: number;
  episodios: number;
  genero: string;
}

/**
 * Clase que representa una colección de series.
 */
export class Series extends BasicStreamableCollection<serie> {
  /**
   * Crea una nueva instancia de una colección
   * @param items Colección de series
   */
  constructor(protected items: serie[]) {
    super(items);
  }

  /**
   * Permite buscar elementos por un valor como título, año, etc.
   * @param param El parámetro por el que desea buscar
   * @param value El valor del parámetro
   */
  searchBy(param: string, value: string) {
    let result: serie[] = [];
    if (param === 'titulo') {
      result = this.getItems().filter((x) => (x.titulo == value));
    }
    else if (param === 'año') {
      result = this.getItems().filter((x) => (x.año.toString() == value));
    }
    else if (param === 'temporada') {
      result = this.getItems().filter((x) => (x.temporada.toString() == value));
    }
    else if (param === 'episodios') {
      result = this.getItems().filter((x) => (x.episodios.toString() == value));
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