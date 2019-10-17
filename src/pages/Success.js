import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//CSS
import '../css/Success.css';
import Footer from '../particles/Footer';

function Success() {
    return(
        <>
            <section className="success">
                <Container>
                    <Row>
                        <Col md={12}>
                            <i className="far fa-check-circle animated bounceIn delay-1s"></i>
                            <h3>Obrigado por escolher o Hotéis Agora!</h3>
                            <p>Por favor verifique o email que enviamos para você agora e se tiver alguma dúvida, entre em contato via e-mail ou whatsapp.</p>
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

export default Success;