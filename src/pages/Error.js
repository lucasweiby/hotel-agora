import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//CSS
import '../css/Error.css';
import Footer from '../particles/Footer';

function Error() {
    return(
        <>
            <section className="error">
                <Container>
                    <Row>
                        <Col md={12}>
                            <i className="far fa-times-circle animated bounceIn delay-1s"></i>
                            <h3>Obrigado por escolher o HotéisAgora</h3>
                            <p>Seu banco não autorizou a compra e não foi cobrado nenhum valor em seu cartão. Por favor, verifique com seu cartão e tente efetuar a reserva novamente.</p>
                            <p>Se precisar de mais informações, nos contate.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <a href="/" className="back-btn-2">Voltar para o início</a>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <Footer />
        </>
    );
};

export default Error;