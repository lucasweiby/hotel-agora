import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo_home from '.././assets/img/ha-white.png';

function NavbarHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="container-ps">
                <Navbar.Brand href="/" className="logo-home"><img alt="" src={ logo_home } className="d-inline-block align-top logo-home"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#skills">Sobre nós</Nav.Link>
                        <Nav.Link className="hoteleiro" href="https://docs.google.com/forms/d/e/1FAIpQLSfDzNRljRrO9s0tW2zqqIFjGHcENc04C742NfV6XTjYhVQUtg/viewform" target="_blank">É hoteleiro?</Nav.Link>
                        <NavDropdown title="Fale conosco" id="collasible-nav-dropdown">
                        <header className="submenu-head">
                            <h4 className="submenu-title">Fale conosco</h4>
                        </header>
                            <NavDropdown.Item>
                                <p className="dropdown-title">Whatsapp Hotéis Agora</p>
                                <p className="dropdown-text">
                                    <i className="fab fa-whatsapp"></i> +55 (11) 99160-8071
                                </p>
                                <small>(Todos os dias das 8h as 20h)</small>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <a href="mailto:contato@hoteisagora.com" className="dropdown-link">Envie-nos uma mensagem</a>
                                <div className="w-100"></div>
                                <small>(Respondemos em até 2 horas)</small>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default NavbarHeader;