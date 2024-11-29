import {describe, test, expect,} from 'vitest';
import { DashboardContainerFake } from './FakeComponents/DashboardContainerFake';
import {screen, render, /*waitFor*/} from '@testing-library/react'; 
import categoriesListFake from './Stubs/categoriesListFake';
import tasksFake from './Stubs/tasksFake';


describe('<Dashboard />', ()=>{
    test('checks if the title is present', async () => {
        render(<DashboardContainerFake isLoading={false} setCategoriesList={()=>{}}/>);        

        const dashBoardTitle = await screen.findByText('Dashboard');
        expect(dashBoardTitle).toBeInTheDocument();
        // Assertions
        //const dashBoardTitle = screen.queryByText('Dashboard');
        /*await waitFor(() => {
            expect(dashBoardTitle).toBeInTheDocument();
        })*/
    });
    test('checks if the title is not present', () => {
        render(<DashboardContainerFake isLoading={true} setCategoriesList={()=>{}}/>);        

        const dashBoardTitle = screen.getByText('Cargando...');
        expect(dashBoardTitle).toBeInTheDocument();

    })
    test('checks if all categories are present', async() =>{
        render(<DashboardContainerFake isLoading={false} setCategoriesList={()=>{}}/>);

        // const element = categoriesListFake[1];
        // const category = await screen.findByText("pepe");
        // expect(category).toBeInTheDocument();

        for (let index = 0; index < categoriesListFake.length; index++) {
            const element = categoriesListFake[index];
            const category = await screen.findByText(element.name);
            expect(category).toBeInTheDocument();            
        }

        // categoriesListFake.forEach( (listname) => {
        //     const category = screen.queryByText("pepe");

        //     expect(category).toBeInTheDocument();
        // })
    });
    test('checks if all categories are not present', () =>{
        render(<DashboardContainerFake isLoading={true} setCategoriesList={()=>{}}/>);
        for (let index = 0; index < categoriesListFake.length; index++) {
            const element = categoriesListFake[index];
            const category = screen.queryByText(element.name);
            expect(category).not.toBeInTheDocument();            
        }
    });
    test('checks if all tasks are present', async () =>{
        render(<DashboardContainerFake isLoading={false} setCategoriesList={()=>{}}/>);
        for (let index = 0; index < tasksFake.length; index++) {
            const element = tasksFake[index];
            const task = await screen.findByText(element.name);
            expect(task).toBeInTheDocument();            
        }
    });
    test('checks if all tasks are not present', () =>{
        render(<DashboardContainerFake isLoading={true} setCategoriesList={()=>{}}/>);
        for (let index = 0; index < tasksFake.length; index++) {
            const element = tasksFake[index];
            const task = screen.queryByText(element.name);
            expect(task).not.toBeInTheDocument();            
        }
    })
})

