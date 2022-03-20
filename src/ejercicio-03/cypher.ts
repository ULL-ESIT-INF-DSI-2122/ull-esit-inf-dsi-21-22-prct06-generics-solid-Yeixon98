import { Algoritms } from "./algoritms";

/**
 * Clase CypherCesar que se usa para llevar acabo el cifrado de Cesar
 */
export class CypherCesar implements Algoritms {
  constructor(private alpha: string) { }

  /**
   * Encriptar el mensaje
   * @param msg Texto a cifrar
   * @param key Clave para cifrar
   * @returns Mensaje cifrado
   */
  encrypt(msg: string, key: string): string {
    let msgVector: string[] = msg.toUpperCase().split("")
    let keyVector: string[] = key.toUpperCase().split("")
    let alphaVector: string[] = this.alpha.toLocaleUpperCase().split("")
    let result: string[] = []

    msgVector.forEach((element: string, index: number) => {
      if (!alphaVector.includes(element)) {
        result.push(element)
      }
      else {
        let posLetterMsg = alphaVector.indexOf(element)
        let posLetterKey = alphaVector.indexOf(keyVector[index % keyVector.length])

        result.push(alphaVector[(posLetterMsg + posLetterKey) % alphaVector.length])
      }
    })

    return result.join("")
  }

  /**
   * Descencriptar el mensaje
   * @param msg Texto encriptado
   * @param key Clave para descencriptar
   * @returns Mensaje descencriptado
   */
  decrypt(msg: string, key: string): string {
    let msgVector: string[] = msg.toUpperCase().split("")
    let keyVector: string[] = key.toUpperCase().split("")
    let alphaVector: string[] = this.alpha.toLocaleUpperCase().split("")
    let result: string[] = []

    msgVector.forEach((element: string, index: number) => {
      if (!alphaVector.includes(element)) {
        result.push(element)
      }
      else {
        let posLetterMsg = alphaVector.indexOf(element)
        let posLetterKey = alphaVector.indexOf(keyVector[index % keyVector.length])

        let indexResult: number = (posLetterMsg - posLetterKey) % alphaVector.length
        if (indexResult < 0) {
          indexResult = alphaVector.length + indexResult;
        }
        result.push(alphaVector[indexResult])
      }
    })

    return result.join("")
  }
}