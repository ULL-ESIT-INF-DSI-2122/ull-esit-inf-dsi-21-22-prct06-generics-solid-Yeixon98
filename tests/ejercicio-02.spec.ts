import 'mocha';
import { expect } from 'chai';
import { Films, film } from '../src/ejercicio-02/films';
import { Series } from '../src/ejercicio-02/series';
import { Documentaries } from '../src/ejercicio-02/documentaries';

let CollectFilms = new Films([
  { titulo: 'T1', año: 2002, duration: 120, genero: 'ficcion' },
  { titulo: 'T2', año: 2018, duration: 140, genero: 'accion' },
  { titulo: 'T3', año: 2020, duration: 45, genero: 'terror' },
]);

let addFilm: film = { titulo: 'T4', año: 2021, duration: 110, genero: 'comedia' };

let CollectSeries = new Series([
  { titulo: 'S1', año: 2002, temporada: 2, episodios: 15, genero: 'drama' },
  { titulo: 'S2', año: 2018, temporada: 12, episodios: 345, genero: 'accion' },
  { titulo: 'S3', año: 2020, temporada: 1, episodios: 22, genero: 'romance' },
]);

let CollectDoc = new Documentaries([
  { titulo: 'D1', año: 2002, duration: 120, genero: 'ficcion' },
  { titulo: 'D2', año: 2018, duration: 140, genero: 'accion' },
  { titulo: 'D3', año: 2020, duration: 45, genero: 'terror' },
]);

describe('DSIflix', () => {

  it('Buscando películas por titulo', () => {
    expect(CollectFilms.searchBy('titulo', 'T1').join(' ')).to.be.equal([{ titulo: 'T1', año: 2002, duration: 120, genero: 'ficcion' }].join(' '));
  });
  it('Buscando películas por año', () => {
    expect(CollectFilms.searchBy('año', '2018').join(' ')).to.be.equal([{ titulo: 'T2', año: 2018, duration: 140, genero: 'accion' }].join(' '));
  });
  it('Buscando películas por duration', () => {
    expect(CollectFilms.searchBy('duration', '140').join(' ')).to.be.equal([{ titulo: 'T2', año: 2018, duration: 140, genero: 'accion' }].join(' '));
  });
  it('Buscando películas por genero', () => {
    expect(CollectFilms.searchBy('genero', 'terror').join(' ')).to.be.equal([{ titulo: 'T3', año: 2020, duration: 45, genero: 'terror' }].join(' '));
  });
  //------------------------------------------------------------------------------------------------
  it('Buscando series por titulo', () => {
    expect(CollectSeries.searchBy('titulo', 'S1').join(' ')).to.be.equal([{ titulo: 'S1', año: 2002, temporada: 2, episodios: 15, genero: 'drama' }].join(' '));
  });
  it('Buscando series por año', () => {
    expect(CollectSeries.searchBy('año', '2018').join(' ')).to.be.equal([{ titulo: 'S2', año: 2018, temporada: 12, episodios: 345, genero: 'accion' }].join(' '));
  });
  it('Buscando series por temporada', () => {
    expect(CollectSeries.searchBy('temporada', '1').join(' ')).to.be.equal([{ titulo: 'S3', año: 2020, temporada: 1, episodios: 22, genero: 'romance' }].join(' '));
  });
  it('Buscando series por numeros de episodios', () => {
    expect(CollectSeries.searchBy('episodios', '14').join(' ')).to.be.equal([].join(' '));
  });
  it('Buscando series por genero', () => {
    expect(CollectSeries.searchBy('genero', 'drama').join(' ')).to.be.equal([{ titulo: 'S1', año: 2002, temporada: 2, episodios: 15, genero: 'drama' }].join(' '));
  });
  //------------------------------------------------------------------------------------------------
  it('Buscando docs por titulo', () => {
    expect(CollectDoc.searchBy('titulo', 'D1').join(' ')).to.be.equal([{ titulo: 'D1', año: 2002, duration: 120, genero: 'ficcion' }].join(' '));
  });
  it('Buscando docs por año', () => {
    expect(CollectDoc.searchBy('año', '2018').join(' ')).to.be.equal([{ titulo: 'D2', año: 2018, duration: 140, genero: 'accion' }].join(' '));
  });
  it('Buscando docs por duration', () => {
    expect(CollectDoc.searchBy('duration', '140').join(' ')).to.be.equal([{ titulo: 'D2', año: 2018, duration: 140, genero: 'accion' }].join(' '));
  });
  it('Buscando doc por genero', () => {
    expect(CollectDoc.searchBy('genero', 'terror').join(' ')).to.be.equal([{ titulo: 'D3', año: 2020, duration: 45, genero: 'terror' }].join(' '));
  });
  //------------------------------------------------------------------------------------------------
  it('Agrega una película a la colección', () => {
    CollectFilms.addItem(addFilm);
    expect(CollectFilms.getNumberOfItems()).to.be.equal(4);
  });
}); 