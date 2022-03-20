# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Yeixon98/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Yeixon98?branch=main)

Indice

1. [Objetivos](#Object)
2. [Herramientas](#Tools)
   * [Typedoc](#TypeDoc)
   * [Mocha y Chai](#Test)
   * [Instanbul y Coveralls](#Quality)
3. [Ejercicios](#Exercise)

***

## 1 Objetivos <a name="Object"></a>

El objetivo de esta practica es familiarizarse con los objetos, clases e interfaces; principalmente usando el principio SOLID que posee TypeScript, todo esto a través de la realización de ejercicios propuestos por el profesor.

***

## 2 Herramientas <a name="Tools"></a>

En esta practica se nos pedia usar herramientas como TypeDoc, Mocha, Chai y opcionalmente Instanbul y Coveralls.

### 2.1 TypeDoc <a name="TypeDoc"></a>

TypeDoc es una herramienta que nos permitirá documentar nuestro código a través de comentarios escrito en el mismo, esta herramienta genera una página web con toda esta información.

Para llevar a cabo la instalación de la misma, seguimos los pasos que vemos en este [video](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) hecho por el profesor.

### 2.2 Mocha y Chai <a name="Test"></a>

Mocha y Chai son unos framework que nos permiten realizar test a nuestro código escrito en TypeScript.

Para llevar a cabo la instalación de ambos, seguimos los pasos que vemos en este [video](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view) hecho por el profesor.

### 2.3 Instanbul y Coveralls<a name="Quality"></a>

Instanbul y Coveralls son dos herramientas que nos permiten saber que cantidad de codigo se esta ejecutando, segun los test realizados, a traves de unos informes que se generan con Instanbul y son enviados a [Coveralls](https://coveralls.io/) generando asi un informe.

Para llevar a cabo la instalación de ambos, seguimos los pasos que vemos en este [video](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view) hecho por el profesor.

***

## 3 Ejercicios <a name="Exercise"></a>

### 3.1 - El combate definitivo

Para este ejercicio empezamos creando una clase abstracta que represente a un luchador, con atributos comunes entre los distintos tipos que se iran creando, ademas de los metodos para obtener estos atributos y alguno de estos seran abstractos, como el de la eficiencia del golpe, que dependera de cada tipo de luchador.

```ts
abstract class Figther {
  constructor(private readonly name: string,
    private readonly atk: number,
    private readonly def: number,
    private readonly hp: number,
    private readonly tipo: string) { }

  // Metodos para obtener los valores
  ...

  abstract print(): void;

  abstract efi<T extends (Figther)>(L1: T, daño: number): number;
}
```

A continuacion se desarrollaron 3 clases que representaran a cada tipo de luchador diferente y metodos especificos de cada clase.

Ejemplo Marvel:

```ts
class Marvel extends Figther {
  constructor(name: string, atk: number, def: number, hp: number, tipo: string) {
    super(name, atk, def, hp, tipo);
  }

  print() {
    console.log("El ganador es " + this.get_name() + " que pertenece a Marvel");
  }

  efi<T extends (Figther)>(L1: T, daño: number): number {
    if (L1 instanceof Pokemon)
      return daño * 2;
    if (L1 instanceof CL)
      return daño * 1.2;

    return daño;
  }
```

En este caso podemos ver como los luchadores de Marvel, pegan mas a los de Pokemon que a los de CodigoLyoko. Pues esto cambia para cada clase.

A continucion nos pedian modificar la calse Combate de la practica pasada de forma tal que cualquier luchador pueda enfrentarse con otro. Para esto simplemente cambiamos los tipos de datos con los que se contruye la clase y alguna otra modificacion para el acceso de las variables.

Con respecto a la clase Pokedex, que la practica pasada no tenia mucho sentido, ya que era un simple vector de pokemons, en esta practica si se complementa mejor, ya que ahora tendra distintos tipos de luchadores.

```ts
class Pokedex {

  constructor(private luchadores: Figther[]) { }

  get_luchadores(): Figther[] {
    return this.luchadores;
  }

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
```

***

### 3.2 - DSIflix

Para este ejercicio definimos una interfaz generica, que nos permita representar funciones relacionadas con el stream, para ello creamos funciones como añadir un item a la coleccion, obtener un item y la cantidad de items que hay.

```ts
interface Streamable<T> {
  addItem(newItem: T): void;
  getItems(): T[];
  getNumberOfItems(): number;
}
```

Luego creamos otra interfaz que extiende de la anterior e implementa un metodo de busqueda.

```ts
interface Searchable<T> extends Streamable<T> {
  searchBy(param: string, value: string): T[];
} 
```

Ahora creamos una clase abstracta generica que servira para implemntar las interfaces creadas anteriormente, aunque no todos los metodos seran implementado en esta clase, algunos son abstractos, y se definiran en las respectivas clases que siguen.

```ts
abstract class BasicStreamableCollection<T> implements Searchable<T> {
  constructor(protected items: T[]) {
  }

  abstract searchBy(param: string, value: string): T[];

  addItem(newItem: T) {
    this.items.push(newItem);
  }

  abstract getItems(): T[];

  getNumberOfItems() {
    return this.items.length;
  }
}
```

Los metodos como `searchBy` y `getItems` se implementaran en las clases siguientes, ya que son distintos para cada una de estas.

Hemos desarrollado 3 clases para esta parte, estas clases representan series, peliculas y documentales. Para cada una de estas hemos creado su propio tipo de dato.

Ejemplo de series:
```ts
type serie = {
  titulo: string;
  año: number;
  temporada: number;
  episodios: number;
  genero: string;
}
```

Una vez creado e dato apra representar el contenido de una serie, creamos su clase, que extiende de de la calse abstracta anterior. Es aqui donde definiremos los distintos metodos abstractos que no se habian definido.

```ts
class Series extends BasicStreamableCollection<serie> {
  constructor(protected items: serie[]) {
    super(items);
  }
  searchBy(param: string, value: string) {
    let result: serie[] = [];
    ...
    return result;
  }
  getItems() {
    return this.items;
  }
}
```

Para cada clase es distintos estos metodos, ya que el tipo de dato tiene atributos distintos.

***

### 3.3 - El cifrado indescifrable

Para este ejercicio se llevo acabo el desarrollo de una interfaz que contiene las funciones encriptar y desencriptar, la cual se usa para implemnetar una clase que permite representar el [Cifrado Cesar](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar), esta clase recibe como parametro para construirce un alfabeto, se un string con las letras que se usaran para llevar acabo el encriptado y el desencriptado.

La funcion `encrypt()` recibe como parametro dos strings, que seria el mensaje a cifrar y la palabra clave. Para empezar, lo que hago es pasar dichos strings a vectores de strings para poder iterarlos mas facil y tener el indice de cada letra. A continuacion con un `forEach` voy recorriendo cada letra del mensaje y voy comprobando si esta en el alfabeto, ya que si no esta, este caracter se tiene que quedar igual.

```ts
msgVector.forEach((element: string, index: number) => {
  if (!alphaVector.includes(element)) {
    result.push(element)
  }
  else {
    ...
  }
})
```

Si se encuentra el caracter, guardo la posicion que ocupa en el alfabeto,

```ts
let posLetterMsg = alphaVector.indexOf(element)
```

y el indice que esta este caracter en el mensaje original es el mismo que tengo que tomar en la palabra clave, pero como la palabra clave no tiene que ser del mismo tamaño que el mensaje, tengo que aplicarle el 'mod' para que asi repita del inicio cuando pase la palabra clave de tamaño.

```ts
let posLetterKey = alphaVector.indexOf(keyVector[index % keyVector.length])
```

Una ves tengo las posiciones, las sumo y le hago 'mod' del tamaño del alfabeto introducido, y el resultado es la posicion de la letra resultado.

```ts
result.push(alphaVector[(posLetterMsg + posLetterKey) % alphaVector.length])
```

Y al final devuelvo `result` como string usando la funcion `join("")`

En lo que rspecta la funcion de `decrypt()` es lo mismo solo que en vez de sumar resto las posiciones y si es negativo le sumo el tamaño del alfabeto.

***