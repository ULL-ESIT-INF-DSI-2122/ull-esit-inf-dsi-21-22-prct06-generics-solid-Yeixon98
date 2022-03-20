import 'mocha';
import { expect } from 'chai';
import { CypherCesar } from '../src/ejercicio-03/cypher';

describe('El cifrado indescifrable', () => {
  it("Encriptar | Que tal? -> CYO GMO? | Melon", () => {
    expect(new CypherCesar("abcdefghijklmnñopqrstuvwxyz").encrypt("Que tal?", "Melon")).to.eql("CYO GMO?");
  });
  it("Desencriptar | CYO GMO? -> Que tal? | Melon", () => {
    expect(new CypherCesar("abcdefghijklmnñopqrstuvwxyz").decrypt("CYO GMO?", "Melon")).to.eql("QUE TAL?");
  });
})