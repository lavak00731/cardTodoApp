import {describe, test, expect } from 'vitest';

import { render } from '@testing-library/react';
import { Login } from '../pages/Login.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



// Unitarios: 
// Complementarios: 
// End-To-End:


// Login -> Aparezca, que si escribis erroneo no te deje loguearte
// Dashboard -> Que no te deje entrar si no estas logueado, No deberia aparecer, Y que no aparezca



describe('Login component is present', ()=>{
    test("render Username", () => {
        // Setup
        const { getByText } = render(<BrowserRouter><Routes><Route path="/" element={<Login />}></Route> </Routes></BrowserRouter>);

        // Queries
        const textoUsername = getByText('Username');

        // Assertions
        expect(textoUsername).toBeInTheDocument();
    });
    test("render Password", () =>{
        const { getByText } = render(<BrowserRouter><Routes><Route path="/" element={<Login />}></Route> </Routes></BrowserRouter>);
        const textoPassword = getByText('Password');
        expect(textoPassword).toBeInTheDocument();
    });
})