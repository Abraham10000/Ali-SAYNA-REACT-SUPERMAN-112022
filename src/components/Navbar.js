import React from 'react'
import { Link } from 'react-router-dom'
import logo_blanc from '../assets/logos/logo_blanc.png'
import facebook from '../assets/icones/facebook.png'
import instagram from '../assets/icones/instagram.png'
import twitter from '../assets/icones/twitter.png'

function Navbar() {
    return (
        <>        
        <div className='container'>
            <div className='superman-nav'>
                <div className='navbar'>
                    <div className='logo'>
                        <img src={logo_blanc} alt="logo" className='w-25'/>
                    </div>
                    <nav className='mean-menu'>
                        <div className='navbar-container'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link'>HOME</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link'>GAME</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link'>E-SHOP</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link'>MON COMPTE</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>           

                    <div className="brand-control">
                        <ul className="scroll-bar">                           
                            <li className="social-icon">
                                <img src={facebook} alt="facebook"/>
                            </li>
                            <li className="social-icon">
                                <img src={instagram} alt="instagram"/>
                            </li>
                            <li className="social-icon">
                                <img src={twitter} alt="twitter"/>
                            </li>                            
                        </ul>
                    </div>        
                </div>
            </div>
        </div>        
        </>
    )
}

export default Navbar
