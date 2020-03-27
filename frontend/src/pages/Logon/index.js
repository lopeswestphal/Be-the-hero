import React, { useState } from 'react';
import { Link, useHistory }  from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import LogoImg from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');    

    const history = useHistory();

    async function HandleLogin(e){
        e.preventDefault(); // <- evitar o redirect da pagina, usado em todo formulario

        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {    
            alert('ERRO: Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero"/>

                <form onSubmit={HandleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange = {e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes" />
        </div>
    );
}