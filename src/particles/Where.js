import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/About.css';

//Imagens
var fortalezaImg = 'https://www.cearaagora.com.br/site/wp-content/uploads/2019/04/passagens-aereas-fortaleza-capa2019-01.jpg';
var guarulhosImg = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Vista_da_cidade_de_Guarulhos_%28SP%29.JPG';

var fortaleza = {
    backgroundImage: 'url(' + fortalezaImg + ')',
    // background: url('assets/img/fort.jpg'), 
    backgroundSize: 'cover'
    
};

var guarulhos = {
    backgroundImage: 'url(' + guarulhosImg + ')',
    // background: url('assets/img/gua.jpg'), 
    backgroundSize: 'cover'
};

//Modal
class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
        return (
        <>
            <Button variant="primary" onClick={this.handleShow} className="more-cities">
                Veja todas as cidades
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Todas as cidades que atuamos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-cities">
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">São Paulo</h5>
                                <small className="state">São Paulo</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Guarulhos</h5>
                                <small className="state">São Paulo</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Fortaleza</h5>
                                <small className="state">Ceará</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Mogi Mirim</h5>
                                <small className="state">São Paulo</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Curitiba</h5>
                                <small className="state">Paraná</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Londrina</h5>
                                <small className="state">Paraná</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Campo Grande</h5>
                                <small className="state">Mato Grosso do Sul</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Belém</h5>
                                <small className="state">Pará</small>
                            </div>
                        </li>
                        <li className="cities-item">
                            <div className="body">
                                <h5 className="city">Delmiro Gouveia</h5>
                                <small className="state">Alagoas</small>
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </>
        );
    }
}
  

function Where() {
    return(
        <section className="onde" id="onde">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={5} className="left-anim">
                        <h1 className="title">
                            Onde estamos?
                        </h1>
                    </Col>
                    <Col md={7} className="right-anim">
                        <h4 className="subtitle"><i className="fas fa-map-marker-alt"></i> Estamos nas cidades abaixo:</h4>
                        <ul className="list-cities">
                            <li className="cities-item">
                                <div className="thumb"></div>
                                <div className="body">
                                    <h5 className="city">São Paulo</h5>
                                    <small className="state">São Paulo</small>
                                </div>
                            </li>
                            <li className="cities-item">
                                <div className="thumb" style={guarulhos}></div>
                                <div className="body">
                                    <h5 className="city">Guarulhos</h5>
                                    <small className="state">São Paulo</small>
                                </div>
                            </li>
                            <li className="cities-item">
                                <div className="thumb" style={fortaleza}></div>
                                <div className="body">
                                    <h5 className="city">Fortaleza</h5>
                                    <small className="state">Ceará</small>
                                </div>
                            </li>
                        </ul>
                        <h6>e crescendo...</h6>
                        <Row className="justify-content-center align-items-center">
                            <Col md={12}>
                                <Example />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Where;