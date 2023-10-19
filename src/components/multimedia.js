import React, { useState } from "react";
import img12 from '../assets/images/img12.png';
import Polygon from '../assets/icones/Polygon.png'
import Polygon1 from '../assets/icones/Polygon-1.png'

function MultimediaComponent() {
    const [isCardVisible, setCardVisible] = useState(false);

    const handleNextButtonClick = () => {
        setCardVisible(true);
    };

    return (
        <div className="multimedia-content">
            <div className="icon-button-prev">
                <img src={Polygon1} alt="polygon" />
            </div>
            {isCardVisible && (
                <div className="multimedia-card">
                    <div className="card-icon">
                        <img src={img12} alt="multimedia icon" />
                    </div>
                    <div className="card-content">
                        <h4>Action, Adventure</h4>
                        <h5>Superman Man of Steel</h5>
                        <span>IMDB:<small> 7.1</small></span>
                        <p>Clark Kent, malgré son apparence humaine normale, est l'un des derniers membres d'une race éteinte. Il se retrouve forcé de révéler son identité lorsque la Terre est envahie par une armée de survivants qui menacent de détruire la planète.</p>
                    </div>
                    <div className="card-content">
                        <h4>Action, Adventure</h4>
                        <h5>Superman (1978)</h5>
                        <span>IMDB:<small> 7.4</small></span>
                        <p>Un orphelin extra-terrestre est envoyé de sa planète mourante sur Terre, où il grandit et devient le premier et le plus grand super-héros de sa planète d'adoption.</p>
                    </div>
                    <div className="card-content">
                        <h4>Action, Adventure</h4>
                        <h5>Batman V Superman</h5>
                        <span>IMDB:<small> 6.4</small></span>
                        <p>Craignant que les actions de Superman ne soient pas contrôlées, Batman affronte l'homme d'acier, tandis que le monde débat du type de héros dont il a vraiment besoin.</p>
                    </div>
                </div>
            )}
            <div className="icon-button-next" onClick={handleNextButtonClick}>
                <img src={Polygon} alt="polygon" />
            </div>
        </div>
    );
}

export default MultimediaComponent;
