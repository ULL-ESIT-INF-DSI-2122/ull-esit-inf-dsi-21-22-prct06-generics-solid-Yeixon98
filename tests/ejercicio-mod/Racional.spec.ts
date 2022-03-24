import 'mocha';
import { expect} from 'chai';
import {Racional} from '../../src/ejercicio-mod/Racional';

describe('Numeros Racionales', () => {
  it("Crear un Racional" , () => {
      let a: Racional = new Racional(2,4);
    expect(a).to.eql({ num: 2, den: 4 });
  });

  it("Simplificar racional" , () => {
      let a: Racional = new Racional(8,16);
      a.simply();
    expect(a).to.eql({ num: 1, den: 2 });
  });

  it("Invertir racional" , () => {
      let a: Racional = new Racional(8,16);
      a.invert();
    expect(a).to.eql({ num: 16, den: 8 });
  });

  it("Suma de racional" , () => {
      let a: Racional = new Racional(1,2);
      let b: Racional = new Racional(2,4)
    expect(a.add(b)).to.eql({ num: 1, den: 1 });
  });

  it("Resta de racional" , () => {
      let a: Racional = new Racional(1,2);
      let b: Racional = new Racional(2,4)
    expect(a.sub(b)).to.eql({ num: 0, den: 1 });
  });

  it("Multiplicacion de racional" , () => {
      let a: Racional = new Racional(1,2);
      let b: Racional = new Racional(2,4)
    expect(a.mul(b)).to.eql({ num: 1, den: 4 });
  });

  it("Division de racional" , () => {
      let a: Racional = new Racional(1,2);
      let b: Racional = new Racional(2,4)
    expect(a.div(b)).to.eql({ num: 1, den: 1 });
  });

  it("Imprimir racional" , () => {
      let a: Racional = new Racional(1,2);
    expect(a.print()).to.eql(undefined);
  });

  it("Convertir un Racional a número en notación de punto fijo" , () => {
      let a: Racional = new Racional(2,6);
    expect(a.convert(2)).to.eql(0.33);
  });
});