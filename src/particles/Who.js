import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/About.css';

function Who() {
    return(
        <section className="sobre" id="sobre">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={5} className="left-anim">
                        <h1 className="title">
                            Quem somos?
                        </h1>
                    </Col>
                    <Col md={7} className="right-anim">
                        <p className="sobre-desc">
                            Somos a <b>PRIMEIRA STARTUP</b> no Brasil dedicada exclusivamente para reservas de quartos de hotéis na última hora! Precisa de hotel para hoje, amanhã ou nos próximos dias? <b>NEGOCIAMOS COM NOSSOS HOTÉIS PARCEIROS DESCONTOS INCRÍVEIS E EXCLUSIVOS</b> para sua reserva! Em troca, ocultamos a marca do hotel e não divulgamos o seu nome até o dia do seu check in. 
                        </p>
                        <p className="sobre-desc">
                            Você terá um hotel de qualidade, na localização e no momento que você precisa com um preço incrível!          
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Who;