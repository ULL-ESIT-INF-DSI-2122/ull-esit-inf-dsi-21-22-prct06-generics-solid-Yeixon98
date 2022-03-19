import { Figther } from "./fighter";

/**
 * Clase Combate, gestiona el duelo
 */
export class Combat {
  /**
   * Constructor
   * @param L1 Luchador 1
   * @param L2 Luchador 2
   */
  constructor(public L1: Figther, public L2: Figther) {
  }

  /**
   * Este metodo realiza las operaciones para calcular el daño que realiza cada lucahdor
   * Luego llama al metodo efi para modificar el daño con respecto a la eficiencia
   * Muestra en consola en cada momento como se encuentra la ida de cada Luchador
   * @returns Devuelve el nombre del ganador
   */
  start(): string {
    let daño1: number = this.L1.efi(this.L2, (30 * (this.L1.get_atk() / this.L2.get_def())));
    let daño2: number = this.L2.efi(this.L1, (30 * (this.L2.get_atk() / this.L1.get_def())));

    let vida1: number = this.L1.get_hp();
    let vida2: number = this.L2.get_hp();


    while (vida1 > 0 && vida2 > 0) {

      console.log(this.L1.get_name() + " ataca a " + this.L2.get_name());
      vida2 -= daño1;
      if (vida2 > 0)
        console.log(this.L2.get_name() + " tiene " + vida2.toFixed(1) + " de vida.");
      else {
        console.log(this.L2.get_name() + " se devilito.")
        this.L1.print();
        return this.L1.get_name();
      }

      if (vida2 > 0) {
        console.log(this.L2.get_name() + " ataca a " + this.L1.get_name());
        vida1 -= daño2;
        if (vida1 > 0)
          console.log(this.L1.get_name() + " tiene " + vida1.toFixed(1) + " de vida.");
        else {
          console.log(this.L1.get_name() + " se devilito.")
          this.L2.print();
          return this.L2.get_name();
        }
      }
    }
    return ""
  }
}