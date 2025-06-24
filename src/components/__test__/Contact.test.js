import React from 'react';
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact"

// Unit Testing or testing in isolation
// gruoping the test cases
// we can use it instesad of test
describe("Contact Us page test cases", ()=>{
it("Shuld load contact us component", ()=>{
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

it("Shuld load button component", ()=>{
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

it("Shuld load Name Input component", ()=>{
    render(<Contact />);
// Querying
    const inputName = screen.getAllByRole("textbox");
// Assertion
    console.log(inputName.length)
    expect(inputName.length).toBe(3);
})
})

