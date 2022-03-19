import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../src/ejercicio-01/pokemon';
import { CL } from '../src/ejercicio-01/codigolyoko';
import { Marvel } from '../src/ejercicio-01/marvel';
import { Combat } from '../src/ejercicio-01/combate';
import { Pokedex } from '../src/ejercicio-01/pokedex';


describe('El combate definitivo', () => {
  it("Objeto pokemon", () => {
    expect(new Pokemon("Torchi", 2, 4, 7, "fuego") instanceof Pokemon).to.eql(true);
  });
  it("Objeto Codigo Lyoko", () => {
    expect(new CL("Tokonome", 2, 3, 5, "Codigo Lyoko") instanceof CL).to.eql(true);
  });
  it("Objeto Marvel", () => {
    expect(new Marvel("Dr.Strange", 2, 1, 6, "Marvel") instanceof Marvel).to.eql(true);
  });
  it("Objeto Pokedex", () => {
    expect(new Pokedex([new Pokemon("Torchi", 2, 4, 7, "fuego"), new Marvel("Dr.Strange", 2, 1, 6, "Marvel")]) instanceof Pokedex).to.eql(true);
  });
  it("Objeto Combat", () => {
    expect(new Combat(new Pokemon("Torchi", 2, 4, 7, "fuego"), new Marvel("Dr.Strange", 2, 1, 6, "Marvel")) instanceof Combat).to.eql(true);
  });

  let pkm = new Pokemon("Torchi", 20, 15, 50, "fuego");
  let cl = new CL("Tokonome", 10, 25, 20, "Codigo Lyoko");
  let ml = new Marvel("Dr.Strange", 5, 10, 100, "Marvel")
  let pkx = new Pokedex([pkm, cl, ml]);
  let cbt1 = new Combat(pkx.get_luchadores()[2], pkx.get_luchadores()[1]);

  it("Combate", () => {
    expect(cbt1.start()).to.eql("Dr.Strange");
  });
});
