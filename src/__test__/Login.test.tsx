import {describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Login from '../pages/Login.tsx';

// Unitarios: 
// Complementarios: 
// End-To-End:


// Login -> Aparezca, que si escribis erroneo no te deje loguearte
// Dashboard -> Que no te deje entrar si no estas logueado, No deberia aparecer, Y que no aparezca

describe('Login component is present', ()=>{
    test("renders", () => {
        // Setup
        const { getByText } = render(<Login />);

        // Queries
        const textoABuscar = getByText('Username');

        // Assertions
        expect(textoABuscar).toBeInTheDocument();
    })
})