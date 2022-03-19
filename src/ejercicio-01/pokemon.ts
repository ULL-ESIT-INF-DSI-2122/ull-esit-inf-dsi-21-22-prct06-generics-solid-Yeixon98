import { Figther } from "./fighter";

/**
 * Clase Pokemon extendida de Figther
 */
export class Pokemon extends Figther {
  /**
   * Constructor
   * @param name Nombre 
   * @param atk Ataque
   * @param def Defensa
   * @param hp Vida
   * @param tipo Tipo
   */
  constructor(name: string, atk: number, def: number, hp: number, tipo: string) {
    super(name, atk, def, hp, tipo);
  }

  /**
   * Metodo que muestra por consola el ganador de forma mas entendible
   */
  print() {
    console.log("El pokemon " + this.get_name() + " ha ganado");
  }

  /**
   * Metodo apra calcular la eficiencia
   * @param L2 Luchador reseptor del golpe
   * @param daño daño del que golpea
   * @returns daño del que golpea modificado
   */
  efi<T extends (Figther)>(L2: T, daño: number): number {
    if (this.get_tipo() === "fuego") {
      if (L2.get_tipo() === "fuego" || L2.get_tipo() === "electrico")
        return daño;
      if (L2.get_tipo() === "agua")
        return 0.5 * daño;
      if (L2.get_tipo() === "hierba")
        return 2 * daño;
    }
    else if (this.get_tipo() === "agua") {
      if (L2.get_tipo() === "agua")
        return daño;
      if (L2.get_tipo() === "hierba" || L2.get_tipo() === "electrico")
        return 0.5 * daño;
      if (L2.get_tipo() === "fuego")
        return 2 * daño;
    }
    else if (this.get_tipo() === "hierba") {
      if (L2.get_tipo() === "hierba" || L2.get_tipo() === "electrico")
        return daño;
      if (L2.get_tipo() === "fuego")
        return 0.5 * daño;
      if (L2.get_tipo() === "agua")
        return 2 * daño;
    }
    else if (this.get_tipo() === "electrico") {
      if (L2.get_tipo() === "electrcio" || L2.get_tipo() === "hierba" || L2.get_tipo() === "fuego")
        return daño;
      if (L2.get_tipo() === "agua")
        return 2 * daño;
    }

    //Si el otro no es un pokemon
    return daño * 0.9;
  }
}