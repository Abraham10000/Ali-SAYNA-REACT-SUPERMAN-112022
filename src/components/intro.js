import React from 'react'
import fleche from '../assets/icones/flèche_down_header.png'
import dccomics from '../assets/icones/DCComics.png'

function intro() {
    return (
        <>    
            <div className="superman-home">
                <div className="superman container">
                    <div className="content">
                        <img src={dccomics} className="w-25 dcicone" alt="icon DC"/>
                        <h1 className="intro-title">SUPERMAN</h1>
                        <h2 className="intro-subtitle">L’HOMME D’ACIER</h2>                                                                      
                    </div>
                    <div className="scroll-btn">
                        <img src={fleche} alt="fleche down"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default intro
