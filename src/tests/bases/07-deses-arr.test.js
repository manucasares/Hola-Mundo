// import { retornaArreglo } from "../../bases/07-deses-arr";
import "@testing-library/jest-dom";
import { retornaArreglo } from "../../bases/07-deses-arr";

describe("Pruebas en el archilo 07-desestructuracion-arr", () => {
    test("debe de retornar un string y un numero", () => {

        const arrayTest = retornaArreglo();

        expect(arrayTest).toEqual(['ABC', 123]);


    });
});
