import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleLoginView from './GoogleLogin'
import NavBar from '../components/NavBar/NavBar';
import Medico from './Medico';
import Paciente from './Paciente';

function Logintest() {
    
    return (
        <BrowserRouter>
            <NavBar/> 
            <Routes>
                <Route path="/" element={<GoogleLoginView />} />
                <Route path="/medico" element={<Medico />} />
                <Route path="/paciente" element={<Paciente />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Logintest;