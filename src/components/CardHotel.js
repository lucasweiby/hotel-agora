import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageHotel from '../assets/img/h1.jpg';
import TripAdvisor from '../assets/img/tripadvisor.svg';

var style = {
    overflow: 'hidden',
    height: '100%'
}

function CardHotel() {
    return(
        <>
            <Card className="mb-3 card-result">
                <Row className="no-gutters">
                    <Col md={4} style={style}>
                        <img src={ImageHotel} className="card-img" />
                    </Col>
                    <Col md={8} style={style}>
                        <div className="card-body">
                            <Row>
                                <Col md={12}>
                                    <div className="card-rate-3"></div>
                                    <div className="w-100"></div>
                                    <h5 className="card-title">Hotel 3 estrelas</h5>
                                    <small className="card-endereco">em <b>Avenida Paulista - São Paulo, SP</b></small>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <img src={TripAdvisor} alt="" className="img-fluid tadv-av" />
                                </Col>
                                <Col md={4}>
                                    <small className="discount"><span className="badge">75% OFF</span></small>
                                    <h5 className="card-price">R$ 200</h5>
                                    <h6 className="card-oldPrice"><small>R$ 800</small></h6>
                                </Col>
                            </Row>
                            <Row className="card-book align-items-center">
                                <Col md={8} sm={8} xs={8}>
                                    <a href="#" className="link-book" data-toggle="modal" data-target="#exampleModalLong">Qual hotel estou reservando?</a>
                                </Col>
                                <Col md={4} sm={4} xs={4} className="button-book">
                                    <a href="/hotel" className="btn-home">RESERVAR</a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default CardHotel;