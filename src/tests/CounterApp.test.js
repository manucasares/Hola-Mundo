import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en Counterapp ", () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });


    test("debe de mostrar CounterApp correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar el valor por defecto de 100", () => {
        const value = "100";
        const wrapper = shallow(<CounterApp value={value} />);
        const expected = wrapper.find("h2").text();
        expect(expected).toBe(value);
    });

    test('el boton sum debe incrementar +1', ()=>{
        wrapper.find('button').at(1).simulate('click');
        const expected = wrapper.find('h2').text();
        expect(expected).toBe('11');
    });

    test('el boton sum debe decrementar -1', ()=>{
        wrapper.find('button').at(0).simulate('click');
        const expected = wrapper.find('h2').text();
        expect(expected).toBe('9');
    });

});
