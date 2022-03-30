import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div>
        <h1 className="padding"></h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" > Login</NavLink>
                </li>
                <li>
                    <NavLink to="/medico" >Medico</NavLink>
                </li>
                <li>
                    <NavLink to="/paciente" >Paciente</NavLink>
                </li>
            </ul>
        </nav>
            
        </div>
   );
}

export default NavBar;