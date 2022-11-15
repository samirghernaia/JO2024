import './cards.css';

import card1 from '../../assets/OIP (2).jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/OIP.jpg';
import card4 from '../../assets/OIP (1).jpg';

const Cards = () => (
    <div class="cards">

        <div class="card card-1">
            <div class="carte">
                <img src={card1} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2 class="card-title">restaurant Français</h2>
                    <p class="card-text">
                        <address>6 rue de la busserine 13014 marseille</address>
                        <p>tel: 04 91 05 10 45</p>
                        <p>ouvert</p>
                        <p>Avis 3/5</p>
                    </p>
                    <a href="https://arkose.com/prado/cantine" target="_blank"  class="primary">site officiel</a>
                </div>
            </div>
        </div>

        <div class="card card-2">
            <div class="carte">
                <img src={card2} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2 class="card-title">restaurant Libanais</h2>
                    <p class="card-text">
                        <address>6 rue de la busserine 13014 marseille</address>
                        <p>tel: 04 91 05 10 45</p>
                        <p>ouvert</p>
                        <p>Avis 4/5</p>
                    </p>
                    <a href="https://arkose.com/prado/cantine" target="_blank"  class="primary">site officiel</a>
                </div>
            </div>
        </div>

        <div class="card card-3">
            <div class="carte">
                <img src={card3} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2 class="card-title">restaurant Italien</h2>
                    <p class="card-text">
                        <address>6 rue de la busserine 13014 marseille</address>
                        <p>tel: 04 91 05 10 45</p>
                        <p>ouvert</p>
                        <p>Avis 5/5</p>
                    </p>
                    <a href="https://arkose.com/prado/cantine" target="_blank"  class="primary">site officiel</a>
                </div>
            </div>
        </div>

        <div class="card card-4">
            <div class="carte">
                <img src={card4} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2 class="card-title">restaurant Gousto</h2>
                    <p class="card-text">
                    <address>6 rue de la busserine 13014 marseille</address>
                    <p>tel: 04 91 05 10 45</p>
                    <p>ouvert</p>
                    <p>Avis 4/5</p>
                    </p>
                    <a href="https://arkose.com/prado/cantine" target="_blank" class="primary">site officiel</a>
                </div>
            </div>
        </div>

    </div>
);

export default Cards;