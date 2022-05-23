import Hero from './illustration-hero.svg';
import Music from './icon-music.svg';

function Card() {
    return (
        <main className="card">
            <div className="picture">
                <img src={Hero} alt="Hero"></img>
            </div>
            <div className="content">
                <div className="container">
                    <div className="desp">
                        <h1>Order Summary</h1>
                        <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
                        device anywhere you like!</p>
                    </div>
                    <div className="inform">
                        <div className="detail">
                            <img src={Music} alt="music"></img>
                            <div className="plan">
                                <span>Annual Plan</span>
                                <span>$59.99/year</span>
                            </div>
                        </div>
                        <a href="">Change</a>
                    </div>
                    <div className="action">
                        <button>Proceed to Payment</button>
                        <a href="">Cancel Order</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Card;
