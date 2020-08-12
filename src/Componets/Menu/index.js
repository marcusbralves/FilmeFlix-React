import React from 'react';
import Logo1 from '../../Assets/Img/Logo1.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './Componets/ButtonLink';
import { Link} from 'react-router-dom';

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo1} alt="FilmeFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/video">
                Novo video
            </Button>
        </nav>
    ); 
    }

    export default Menu;