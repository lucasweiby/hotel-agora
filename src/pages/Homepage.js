import React from 'react';
import NavbarHeader from '../particles/Nav';
import Home from '../particles/Home';
import About from '../particles/About'
import Who from '../particles/Who';
import Where from '../particles/Where';
import Footer from '../particles/Footer';

function Homepage() {
    return(
        <>

            <Home />

            <About />

            <Who />

            <Where />

            <Footer />
        </>
    );
}

export default Homepage;