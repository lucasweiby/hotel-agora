import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/About.css';

function About() {
    return(
        <section className="skills" id="skills">
            <Container>
                <Row className="justify-content-center row-sobre">
                    <Col md={12}>
                        <h1 className="sobre-title">
                            Hotéis Agora para qualquer ocasião!
                        </h1>
                    </Col>
                    <Col md={4} className="skill-item">
                        <i className="fas fa-search"></i>
                        <p className="sobre-text">
                            Informe cidade e escolhe a data selecionando 1 ou 2 noites.
                        </p>
                    </Col>
                    <Col md={4} className="skill-item">
                    <i className="fas fa-th-list"></i>
                    <p className="sobre-text">
                        Listamos os hotéis por categoria e localização.
                        Escolha a melhor opção para você.
                    </p>
                    </Col>
                    <Col md={4} className="skill-item">
                    <i className="fas fa-calendar-check"></i>
                    <p className="sobre-text">
                        Informe seus dados e efetue o pagamento seguro direto no site. Pronto!
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;