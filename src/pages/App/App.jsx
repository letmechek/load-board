import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import LoadForm from '../../components/LoadForm/LoadForm';
import LoadPage from '../LoadPage/LoadPage'
import TruckForm from '../../components/TruckForm/TruckForm';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/trucks/new' element={<TruckForm />} />
            <Route path="/loads/new" element={<LoadForm />} />
            <Route path="/loads" element={<LoadPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


