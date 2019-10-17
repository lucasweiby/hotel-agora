import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarHeaderInterna from '../particles/NavInterna';
import CardHotel from '../components/CardHotel';
import '../css/Results.css';
import '../map/Map';
import Map from '../map/Map';
import Footer from '../particles/Footer';
import Filter from '../components/Filter';

function Results() {
    return(
        <>
        <section className='results'>
            <NavbarHeaderInterna />
            <Filter />

            <div className="container-ps">
                <Row>
                    <Col md={6} className="resultsHeader">
                        <h1 className="resultTitle">Aqui está!</h1>
                        <h4 className="resultSubtitle">Encontramos algumas acomodações que podem interessar você.</h4>
                    </Col>
                    <div className="w-100"></div>
                    <Col md={5} className="resultsCard">
                        <CardHotel />
                        <CardHotel />
                        <CardHotel />
                        <CardHotel />
                        <CardHotel />
                    </Col>
                    <Col md={7} className="map">
                        <Map className="map-frame" />
                    </Col>
                </Row>
            </div>
        </section>
        
        <Footer />
        </>
    );
}

export default Results;