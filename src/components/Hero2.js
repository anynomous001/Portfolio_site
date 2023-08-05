import React from 'react'
import './Hero2Style.css'

const Hero2 = ({ img, headline, text }) => {
    return (
        <div className='hero2'>
            <div className='hero2-container'>
                <img className='hero2-img' src={img} alt='' />
            </div>
            <div className='hero2-content'>
                <h2> {headline}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Hero2