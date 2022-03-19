import { Figther } from "./fighter";
import { Pokemon } from "./pokemon";
import { CL } from "./codigolyoko";


/**
 * Clase Marvel extendida de Figther
 */
export class Marvel extends Figther {
  /**
   * Constructor
   * @param name Nombre 
   * @param atk Ataque
   * @param def Defensa
   * @param hp Vida
   * @param tipo Universo
   */
  constructor(name: string, atk: number, def: number, hp: number, tipo: string) {
    super(name, atk, def, hp, tipo);
  }

  /**
   * Metodo que muestra por consola el ganador de forma mas entendible
   */
  print() {
    console.log("El ganador es " + this.get_name() + " que pertenece a Marvel");
  }

  /**
   * Metodo apra calcular la eficiencia
   * @param L2 Luchador reseptor del golpe
   * @param daño daño del que golpea
   * @returns daño del que golpea modificado
   */
  efi<T extends (Figther)>(L1: T, daño: number): number {
    if (L1 instanceof Pokemon)
      return daño * 2;
    if (L1 instanceof CL)
      return daño * 1.2;

    return daño;
  }
}