import React from 'react';
import './Profcard.css'

function ProfCard() {
    return (
        <div>
            <div className='prof-card'>
                <div className='top-sec'>
                    <div className='img-card'>
                         <img alt='raina' src='https://1.bp.blogspot.com/-FFO_EK9uABI/Xzt4QPHD2kI/AAAAAAAAFOo/AW80i-82cRMfxcc9X25DCQcZwv0h5kmjgCLcBGAsYHQ/s596/815d14e1d45716eea08606744c08b49d-removebg-preview.png'/>
                    </div>
                </div>
                <div className='main-sec'>
                    <h1>Bhavesh Kumar</h1>
                    <h5>Front-End Developer</h5>
                    <span>Student at Hindustan University, Chennai, Tamil Nadu, India</span>
                    <span>B.Tech, Computer Science Engineering</span>
                    <div className='footer-links'> 
                    <a href='/'>Facebook</a>
                    <a href='/'>Instagram</a>
                    <a href='/'>LinkedIn</a>
                    <a href='/'>GitHub</a>
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