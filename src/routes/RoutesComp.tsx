import { Routes, Route } from 'react-router-dom';
import { Login } from './../pages/Login';
import { Auth } from './../components/Auth';
import { Dashboard } from './../pages/Dashboard';
import { NoPage } from '../pages/NoPage';
import { Task } from '../pages/Task';
import { CreateOrEditTagsAndCategories } from '../pages/CreateOrEditTagsAndCategories';

export const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />}></Route>                
        <Route  element={<Auth />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/edit-task/:id" element={<Task />}></Route>
            <Route path="/create-or-edit-tags" element={<CreateOrEditTagsAndCategories/>}></Route>
            <Route path="/create-or-edit-categories" element={<CreateOrEditTagsAndCategories/>}></Route>
        </Route>
        <Route path="*" element={<NoPage/>}></Route>
     </Routes>
  )
}
