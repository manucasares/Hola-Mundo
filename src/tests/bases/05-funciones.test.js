import "@testing-library/dom";
import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe("Prueba en 05-funciones.js", () => {
    test("getUser debe de retornar un objeto", () => {
        const userTest = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const user = getUser();

        expect(userTest).toEqual(user);
    });

    //getUsuarioActivo debe retornar un objeto

    test("getUsuarioActivo debe retornar un objeto", () => {

        const nombre = "Manuel";

        const userTest = getUsuarioActivo(nombre);


        expect(userTest).toEqual({
            uid: "ABC567",
            username: nombre,
        })


    });
});
