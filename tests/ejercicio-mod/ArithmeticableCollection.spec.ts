import 'mocha';
import {
  expect
} from 'chai';
import {
  Racional
} from '../../src/ejercicio-mod/Racional'

import {
  ArithmeticableCollection
} from '../../src/ejercicio-mod/ArithmeticableCollection'

describe('ArithmeticableCollection', () => {

  let racionales: Racional[] = [new Racional(2, 8), new Racional(1, 7), new Racional(5, 7)]

  let arithmeticableCollection: ArithmeticableCollection < Racional > = new ArithmeticableCollection < Racional > ([new Racional(2, 8), new Racional(1, 7)])

  it("Add Racionales in ArithmeticableCollection", () => {
    arithmeticableCollection.addArithmeticable(new Racional(5, 7))
    expect(arithmeticableCollection.getArithmeticable()).to.eql(racionales);
  });

  it("Get Racionales in ArithmeticableCollection", () => {
    expect(arithmeticableCollection.getArithmeticable()).to.eql(racionales);
  });

  it("Get Amount Racionales in ArithmeticableCollection", () => {
    expect(arithmeticableCollection.getNumberOfArithmeticables()).to.eql(3);
  });
})