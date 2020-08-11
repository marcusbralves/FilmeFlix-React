import React from 'react';
import Logo1 from '../../Assets/Img/Logo1.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './Componets/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo1} alt="FilmeFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    ); 
    }

    export default Menu;