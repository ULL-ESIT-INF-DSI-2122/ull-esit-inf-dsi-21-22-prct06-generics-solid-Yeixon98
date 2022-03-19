import { CL } from "./codigolyoko";
import { Figther } from "./fighter";
import { Marvel } from "./marvel";
import { Pokemon } from "./pokemon";

/**
 * Clase Pokedex, gestiona vector de Luchadores
 */
export class Pokedex {
  /**
   * Constructor
   * @param luchadores Vector de Luchadores existentes
   */
  constructor(private luchadores: Figther[]) { }
  /**
   * @returns Devuelve el vector de Luchadores
   */
  get_luchadores(): Figther[] {
    return this.luchadores;
  }

  /**
   * Metodo que imprime de que universo son los luchadores existentes
   */
  print() {
    this.luchadores.forEach(element => {
      if (element instanceof Pokemon)
        console.log(element.get_name() + "es un Pokemon")
      else if (element instanceof CL)
        console.log(element.get_name() + "es del Universo de Codigo Lyoko")
      else if (element instanceof Marvel)
        console.log(element.get_name() + "es del Universo de Marvel")
    });
  }
}