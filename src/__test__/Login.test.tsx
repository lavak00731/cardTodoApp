import {describe, test, expect } from 'vitest';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { AppFake } from './FakeComponents/AppFake';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from "../pages/Login"



// Unitarios: 
// Complementarios: 
// End-To-End:


// Login -> Aparezca, que si escribis erroneo no te deje loguearte
// Dashboard -> Que no te deje entrar si no estas logueado, No deberia aparecer, Y que no aparezca



describe('Login component is present', ()=>{
    test("render Username", () => {
        // Setup
        render(<BrowserRouter><Routes><Route path="/" element={<Login />}></Route> </Routes></BrowserRouter>);

        // Queries
        const textoUsername = screen.getByText('Username');

        // Assertions
        expect(textoUsername).toBeInTheDocument();
    });
    test("render Password", () =>{
        render(<BrowserRouter><Routes><Route path="/" element={<Login />}></Route> </Routes></BrowserRouter>);

        const textoPassword = screen.getByText('Password');

        expect(textoPassword).toBeInTheDocument();
    });
});

describe('This should take me to Dashboard if Login is successful', ()=>{
    test('if Login is successful, take me to Dashboard', async () => {
        
        
        
        /*
            Mock -> Funcionalidad truchada.
            Fakes -> Una copia modificada con fines de testing.
            Stub -> Datos falsos.
        */

        render(<AppFake authenticated={true} />);

        fireEvent.change(screen.getByLabelText("Username"), { target: { value: "password123" } })
        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "password123" } })

        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() => {
            expect(screen.getByText('Dashboard')).toBeInTheDocument();
        })
    })
    test('if Login is not successful, Dashboard is not reached', async () => {
                
        
        /*
            Mock -> Funcionalidad truchada.
            Fakes -> Una copia modificada con fines de testing.
            Stub -> Datos falsos.
        */

        render(<AppFake authenticated={false} />);

        fireEvent.change(screen.getByLabelText("Username"), { target: { value: "password123" } })
        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "password123" } })

        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() => {
            expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
        })
    })
})