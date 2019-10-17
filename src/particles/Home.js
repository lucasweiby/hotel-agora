import React from 'react';

//BS Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Home.css';
import DatePicker from '../components/DatePicker';
import NavbarHeader from './Nav';

//Plugins


function Home() {
    return(
        <section className="home" id="home">
            <div className="container-ps">
                <NavbarHeader />
            </div>
            <div className="content">
                <div className="container-ps">
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="home-title">Reserve agora os <b>melhores hotéis</b> com os <b>menores preços</b> garantidos!</h1>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <Form action="/results">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Onde?</Form.Label>
                                            <Form.Control type="text" placeholder="Ex.: São Paulo" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Quando?</Form.Label>
                                            <DatePicker />
                                        </Form.Group>
                                        <Button type="submit" className="btn-search">
                                            Buscar
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="more">
                <i className="fas fa-chevron-down animated bounce infinite"></i>
            </div>
        </section>
    );
}

export default Home;