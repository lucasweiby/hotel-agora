import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footer.css';

//Images
import logoFooter from '.././assets/img/ha-white-logo.png';
import payment from '.././assets/img/payment-methods-small.png';
import safe from '.././assets/img/google-safe-branding-seeklogo.com.svg';
import avaliations from '.././assets/img/tadv.svg';

var style = {
    zIndex: 1
};

function Footer() {
    return(
        <footer className="footer">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={2} className="div-margin">
                        <img src={logoFooter} alt="" className="img-fluid logo-footer" />
                    </Col>

                    <Col md={{ span: 3, offset: 1 }}>
                        <p>
                            <h6>Formas de pagamento</h6>
                            <img src={payment} alt="" className="img-fluid" />
                        </p>
                        <p>
                            <h6>Compra segura</h6>
                            <img src={safe} alt="" className="img-fluid brand" />
                        </p>
                        <p>
                            <h6>Avaliações fornecidas por</h6>
                            <img src={avaliations} alt="" className="img-fluid brand" />
                        </p>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }}>
                        <h5>Fale conosco</h5>
                        <p>
                            <i className="fab fa-whatsapp"></i> +55 (11) 99160-8071 <br />
                            <small>(Todos os dias das 8h as 20h)</small>
                        </p>
                        <p>
                            <a href="mailto:contato@hoteisagora.com" className="dropdown-link">Envie-nos uma mensagem</a>
                            <br />
                            <small>(Respondemos em até 2 horas)</small>
                        </p>
                    </Col>
                    <Col md={2} className="div-margin">
                        <ul className="footer-lista">
                            <li className="footer-item">
                                <a href="/#skills" className="footer-link">SOBRE NÓS</a>
                            </li>
                            <li className="footer-item">
                                <a className="nav-link hoteleiro" target="_blank" href="https://goo.gl/forms/7H9pn09hPNVkzUXn2">É hoteleiro?</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="copy align-items-center justify-content-center">
                    <Col md={5} className="div-margin" style={style}>
                        <h6>Hotéis Agora &reg;</h6>
                        Copyright &copy; 2019 Hotéis Agora - CNPJ: 32.416.481/0001-07 <br /> <i className="fas fa-envelope"></i> contato@hoteisagora.com
                    </Col>
                    <Col md={3} className="div-margin cadastur">
                        {/* <img src="assets/img/cadastur-logo.png" alt="" className="img-fluid"> */}
                    </Col>
                    <Col md={4} className="div-margin">
                        <ul className="social">
                            <li className="social-item">
                                <a href="https://www.facebook.com/hotelagorabr"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="social-item">
                                <a href="https://www.instagram.com/hotel.agora"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;