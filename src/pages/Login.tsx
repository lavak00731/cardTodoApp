
import { appContext } from '../context/appContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const {isAuthenticated, login} = useContext(appContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if(userName !== "" && passWord !== "") {
      login()
      if(isAuthenticated) {
        return navigate("/dashboard", {replace: true})
      }
    } 
  }
  
  return (
    <main className='container mx-auto'>
      <div className="flex bg-gray-50 flex-col p-7 justify-center h-lvh">        
        <form onSubmit={submitHandler} action="">
          <h1 className='text-6xl text-center mb-4 mt-4'>Login</h1>
          <p className="mb-16 text-center">All fields are required.</p>
          <fieldset>
            <div className='mb-6 mx-auto max-w-xs'>
              <label className="font-bold block mb-2 " htmlFor="user">Username</label>
              <input className="border-2 border-teal-950 rounded-lg bg-white p-2 text-base w-full" type="text" name="user" id="user" onChange={setUserName} required/>  
            </div>
            <div className='mb-6 mx-auto max-w-xs'>
              <label className="font-bold block mb-2" htmlFor="pass">Password</label>
              <input className="border-2 border-teal-950 rounded-lg bg-white p-2 text-base w-full" type="password" name="pass" id="pass" onChange={setPassWord} required/>  
            </div>
            <div className="mb-0 max-w-xs mx-auto">
              <button type="submit" className="bg-blue-900 px-4 py-2 text-white border-black rounded-lg w-full">Submit</button>
            </div>            
          </fieldset>
        </form>
      </div>
    </main>
    
    
  )
}
