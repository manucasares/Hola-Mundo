import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";

describe("Pruebas en funciones de heroes", () => {
    test("debe de retornar un Héroe", () => {
        const id = 1;
        const heroe = getHeroeById(1);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test("debe de retornar undefined (si no existe el heroe)", () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    //2 pruebas
    //una: debe de retornar un arreglo con los heroes de Dc
    //toEqual al arreglo filtrado

    test("debe de retornar un arreglo con los heroes de Dc", () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
       
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });



    //dos: debe de retornar un arreglo con los heroes de Marvel
    //toBe length

    test("debe de retornar un arreglo con los heroes de Marvel)", () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner).length;

        expect(heroes).toBe(2);
    });
});
