import "@testing-library/jest-dom";
import { getSaludo } from "../../bases/02-template-string";

describe("Prueba en el archivo template-string", () => {
    test('getSaludo debe retornar "nombre + fernando" ', () => {
        const nombre = "Fernando";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre);
    });

    //get saludo debe retornar 'Hola Carlos' si no hay argumentos

    test(`getSaludo debe retornar "Hola Carlos"`, () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');

    });
});
