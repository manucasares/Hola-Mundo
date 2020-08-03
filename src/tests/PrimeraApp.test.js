import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en PrimeraApp ", () => {
    test("debe de mostrar PrimeraApp correctamente", () => {
        const saludo = "Hola, soy Goku";
        const subtitulo = 'Soy un subtitulo'

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);

        const textoParrafo = wrapper.find('p')

        // expect(wrapper).toMatchSnapshot('p');


        console.log(textoParrafo);
    });
});
