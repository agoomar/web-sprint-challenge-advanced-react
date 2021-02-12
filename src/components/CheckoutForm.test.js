import React from "react";
import { fireEvent, render, screen, } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    (<CheckoutForm />)
});

test("form shows success message on submit with form details",async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)
    const submitButton = screen.getByTestId("successButton")

    fireEvent.change(firstNameInput, {target: {value: 'Pizza' }})
    fireEvent.change(lastNameInput, {target: {value: 'Cheese'}})
    fireEvent.change(addressInput, {target: {value: 'Deepdish ave'}})
    fireEvent.change(cityInput, {target: {value: 'Chicago'}})
    fireEvent.change(stateInput, {target: {value: 'IL'}})
    fireEvent.change(zipInput, {target: {value: '60586'}})
    fireEvent.click(submitButton);

    expect(firstNameInput).toHaveValue('Pizza')
    expect(lastNameInput).toHaveValue('Cheese')
    expect(addressInput).toHaveValue('Deepdish ave')
    expect(cityInput).toHaveValue('Chicago')
    expect(stateInput).toHaveValue('IL')
    expect(zipInput).toHaveValue('60586')


});
