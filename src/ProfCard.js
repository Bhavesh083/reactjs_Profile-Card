import React from 'react';
import './Profcard.css'

function ProfCard() {
    return (
        <div>
            <div className='prof-card'>
                <div className='top-sec'>
                    <div className='img-card'>
                         <img src='https://www.mwallpapers.com/photos/sports/suresh-raina/sm/suresh-raina-best-hd-photos-1080p-tzrdrk.png?v=1576487085'/>
                    </div>
                </div>
                <div className='main-sec'>
                    <h1>Bhavesh Kumar</h1>
                    <h5>Front-End Developer</h5>
                    <span>Student at Hindustan University, Chennai, Tamil Nadu, India</span>
                    <span>B.Tech, Computer Science Engineering</span>
                    <div className='footer-links'> 
                    <a href=''>Facebook</a>
                    <a href=''>Instagram</a>
                    <a href=''>LinkedIn</a>
                    <a href=''>GitHub</a>
                    </div>
                </div>
                <div className='btn-cont'>
                        <button>Like</button>
                        <button>Dislike</button>
                    </div>
            </div>
        </div>
    )
}

export default ProfCard;