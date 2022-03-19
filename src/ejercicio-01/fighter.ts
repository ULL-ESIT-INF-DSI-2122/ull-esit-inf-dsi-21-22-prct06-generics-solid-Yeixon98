/**
 * Clase abstracta Figther
 */
export abstract class Figther {

  /**
   * Constructor de clase
   * @param name Nombre del Luchador
   * @param atk Cantidad de ataque del Luchador
   * @param def Cantidad de defensa del Luchador
   * @param hp Cantidad de vida del Luchador
   * @param tipo Tipo del Luchador
   */
  constructor(private readonly name: string,
    private readonly atk: number,
    private readonly def: number,
    private readonly hp: number,
    private readonly tipo: string) { }

  /**
   * @returns Nombre del Luchador
   */
  get_name() {
    return this.name;
  }
  /**
   * @returns Cantidad de ataque del Luchador
   */
  get_atk() {
    return this.atk;
  }
  /**
   * @returns Cantidad de defensa del Luchador
   */
  get_def() {
    return this.def;
  }
  /**
   * @returns Cantidad de vida del Luchador
   */
  get_hp() {
    return this.hp;
  }
  /**
   * @returns Tipo del Luchador
   */
  get_tipo() {
    return this.tipo;
  }

  /**
   * Metodo abstracto para imprimir el ganador del combate
   */
  abstract print(): void;

  /**
   * Metodo abstracto para calcular la eficiencia del golpe
   * @param L1 el luchador que recivira el golpe
   * @param daño el daño base del golpeador
   */
  abstract efi<T extends (Figther)>(L1: T, daño: number): number;
}