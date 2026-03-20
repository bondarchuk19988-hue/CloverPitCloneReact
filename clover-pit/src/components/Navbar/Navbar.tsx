import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div>
            <div className={s.con}>
                <div>
                    <NavLink to="/automat">Automat</NavLink>
                </div>
                <div>
                    <NavLink to="/dedlain">Dedlain</NavLink>
                </div>
                <div>
                    <NavLink to="/store">Store</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar