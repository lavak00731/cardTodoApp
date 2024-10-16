
import './App.css';
import { RoutesComp } from './routes/RoutesComp';
import { appContext } from './context/appContext';
import { useContext } from 'react';


function App() {
  const isAuthenticated = useContext(appContext)

  return (
    <>
      <appContext.Provider value={isAuthenticated}>
        <RoutesComp/>
      </appContext.Provider>
    </>
  )
}

export default App
