import 'mocha';
import { expect} from 'chai';
import {Complejo} from '../../src/ejercicio-mod/Complejo';

describe('Numeros Complejos', () => {
  it("Crear un Complejo" , () => {
      let a: Complejo = new Complejo(2,4);
    expect(a).to.eql({ real: 2, imag: 4 });
  });

  it("Suma de Complejo" , () => {
      let a: Complejo = new Complejo(1,2);
      let b: Complejo = new Complejo(2,4)
    expect(a.add(b)).to.eql({ real: 3, imag: 6 });
  });

  it("Resta de Complejo" , () => {
      let a: Complejo = new Complejo(1,2);
      let b: Complejo = new Complejo(2,4)
    expect(a.sub(b)).to.eql({ real: -1, imag: -2 });
  });

  it("Multiplicacion de racional" , () => {
      let a: Complejo = new Complejo(1,2);
      let b: Complejo = new Complejo(2,4)
    expect(a.mul(b)).to.eql({ real: -6, imag: 8 });
  });

  it("Division de racional" , () => {
      let a: Complejo = new Complejo(1,2);
      let b: Complejo = new Complejo(2,4)
    expect(a.div(b)).to.eql({ real: 0.5, imag: 0 });
  });
});