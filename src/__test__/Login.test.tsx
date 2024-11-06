import {describe, test, expect } from 'vitest';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Login } from '../pages/Login.tsx';
import { Dashboard } from '../pages/Dashboard.tsx';
import { Auth } from '../components/Auth.tsx';
import { appContext } from '../context/appContext.tsx';
import { categoryContext } from '../context/categoryContext.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { cardContext } from '../context/cardContext.tsx';



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
});

describe('This should take me to Dashboard if Login is successful', ()=>{
    test('if Login is successful, take me to Dashboard', async () => {
        const categoriesList = [
            {
                "id": 1,
                "name": "Investigate Design"
            },
            {
                "id": 2,
                "name": "Design"
            },
            {
                "id": 3,
                "name": "Ready for Development"
            },
            {
                "id": 4,
                "name": "Development"
            },
            {
                "id": 5,
                "name": "Ready for QA"
            },
            {
                "id": 6,
                "name": "QA"
            },
            {
                "id": 7,
                "name": "Ready for Client"
            }
        ]
        const setCategoriesList = () => {};
        const isLoading = false;
        
        render(
            <BrowserRouter>
                <appContext.Provider value={{ isAuthenticated: true, login: () => {} }}>
                    <cardContext.Provider value={{tasks: [
    {
        "id": 1,
        "name": "Prepare drawing",
        "initDate": "10/14/2024",
        "dueDate": "11/25/2024",
        "category": "Development",
        "comment": "Some odd task",
        "tags": ["sample1"]
    },
    {
        "id": 2,
        "name": "Prepare picture",
        "initDate": "10/12/2024",
        "dueDate": "12/25/2024",
        "category": "Design",
        "comment": "Designing something",
        "tags": ["sample2"]
    },
    {
        "id": 3,
        "name": "Prepare Book",
        "initDate": "10/11/2024",
        "dueDate": "12/25/2024",
        "category": "Ready for Development",
        "comment": "Ready to start development",
        "tags": ["sample3", "sample1"]
    }
]}}>
                        <categoryContext.Provider value={{categoriesList, setCategoriesList, isLoading}}>
                            <Routes>
                                <Route path="/" element={<Login />}></Route>
                                <Route  element={<Auth />}>
                                <Route path="/dashboard" element={<Dashboard />}></Route>
                                </Route>                        
                            </Routes>
                        </categoryContext.Provider>
                    </cardContext.Provider>
                </appContext.Provider>              
            </BrowserRouter>
        );

        fireEvent.change(screen.getByLabelText("Username"), { target: { value: "password123" } })
        fireEvent.change(screen.getByLabelText("Password"), { target: { value: "password123" } })

        fireEvent.click(screen.getByText("Submit"))

        await waitFor(() => {
            expect(screen.getByText('Dashboard')).toBeInTheDocument();
        })
    })
})