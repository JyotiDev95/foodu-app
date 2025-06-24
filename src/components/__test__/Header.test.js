import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import UserContext from '../../utils/UserContext';

it('Should load header component with Contact link', () => {
  render(
    <BrowserRouter>
      <UserContext.Provider value={{ defultUser: "Jyoti" }}>
        <Header />
      </UserContext.Provider>
    </BrowserRouter>
  );

  const contactLink = screen.getByText(/contact/i); // case-insensitive match
  expect(contactLink).toBeInTheDocument();
});

it("Should login button change to Logout", ()=>{
  render(
    <BrowserRouter>
    <UserContext.Provider value={{defult:"Neha"}}>
      <Header />
    </UserContext.Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole("button", {name:"Login"})

  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", {name: "Logout"})

  expect(logoutButton).toBeInTheDocument()
})
