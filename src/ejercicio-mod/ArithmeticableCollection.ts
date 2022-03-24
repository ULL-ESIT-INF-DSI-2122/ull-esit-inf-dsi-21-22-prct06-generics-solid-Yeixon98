export class ArithmeticableCollection < T > {
  /**
   * Crea una nueva instancia de una colección
   * @param items Colección de artículos
   */
  constructor(protected items: T[]) {}

  /**
   * Devuelve la colección
   */
  getArithmeticable(): T[]{
    return this.items
  }

  /**
   * Permite insertar un nuevo elemento a la colección 
   * @param newItem Elemento que queremos insertar
   */
  addArithmeticable(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Obtiene el tamaño de la colección
   * @returns Tamaño de la colección
   */
  getNumberOfArithmeticables(): number {
    return this.items.length;
  }
}