import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import ReactDOM from 'react-dom';
import App from './App';
import PlayerForm from './components /PlayerForm'
import '@testing-library/jest-dom/extend-expect'

it('renders the app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('should render the input for favorite player', async () => {
const { getByLabelText } = render(<PlayerForm />)
// query the input node 
const playerInput = getByLabelText(/type in your favorite player/i)
// use change event to add text to the input 
// fireEvent.change(playerInput, {target: {value: "test player input"}})

expect(playerInput).toBeDefined()
})


it('should render the Title of the page', async () => {
const { getByText } = render(<App />)

const Title = getByText(/player list/i)

expect(Title).toBeInTheDocument
expect(Title).toBeTruthy
expect(Title).not.toBeFalsy

})
