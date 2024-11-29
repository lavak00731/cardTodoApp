import { Routes, Route } from 'react-router-dom';
import { Login }  from './../pages/Login';
import { Auth } from './../components/Auth';
import { Dashboard } from './../pages/Dashboard';
import { NoPage } from '../pages/NoPage';
import { Task } from '../pages/Task';
import { Categories } from '../pages/Categories';
import { Tags } from '../pages/Tags';

export const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />}></Route>                
        <Route  element={<Auth />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/edit-task/:id" element={<Task />}></Route>
            <Route path="/tags" element={<Tags/>}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
        </Route>
        <Route path="*" element={<NoPage/>}></Route>
     </Routes>
  )
}