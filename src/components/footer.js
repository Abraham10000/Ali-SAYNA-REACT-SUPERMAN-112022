import React from 'react'
import icon_WB from '../assets/icones/icon_WB.png'
import logo_sayna_white from '../assets/icones/logo_sayna_white.png'
import icon_x from '../assets/icones/icon_x.png'
import icon_DC from '../assets/icones/icon_DC.png'
import facebook from '../assets/icones/facebook.png'
import instagram from '../assets/icones/instagram.png'
import twitter from '../assets/icones/twitter.png'

function footer() {
    return (
        <>
            <div className="single-footer-widget">
                <div className="footer-logo">
                    <img src={icon_WB} alt="logo WB"/>
                    <p><small>Ce projet respecte l’univers cinématographique des films Superman.</small></p>
                </div>                
                <ul className="footer-logo">
                    <li>
                        <img src={logo_sayna_white} alt="logo Sayna"/>
                    </li>                    
                    <li>
                        <img src={icon_x} alt="icon X"/>
                    </li>
                    <li>
                        <img src={icon_DC} alt="icon DC"/>
                    </li>
                    <li>
                        <img src={facebook} alt="icon facebook"/>
                    </li>
                    <li>
                        <img src={instagram} alt="icon instagram"/>
                    </li> 
                    <li>
                        <img src={twitter} alt="icon twitter"/>
                    </li>                   
                </ul>
            </div>  
        </>
    )
}

export default footer
