import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
import contact from '../assets/contact.jpg'


const Contact = () => {
    return (
        <div> <Navbar />
            <Hero2
                img={contact}
                headline={'Contact Me.'}
                text={'Email me at - Chakrobortypritam1@gmail.com'} />
            <Footer />
        </div>
    )
}

export default Contact