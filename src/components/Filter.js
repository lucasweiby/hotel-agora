import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

var style = {
    marginBottom: 0
};

function Filter() {
    return(
        <>
            <div className="filters">
                <div className="container-ps">
                    <Row className="align-items-start">
                        <form action="/results">
                            <Form.Row>
                                <Col>
                                <label style={style}><small>REGIÃO</small></label>
                                    <select className="custom-select">
                                        <option selected>Todas</option>
                                        <option value="1">Jardim Paulista</option>
                                        <option value="2">Zona Sul</option>
                                        <option value="3">Consolação</option>
                                    </select>
                                </Col>
                                <Col>
                                    <label style={style}><small>CATEGORIA</small></label>
                                    <select className="custom-select">
                                        <option selected>Todas</option>
                                        <option value="1">1 estrela</option>
                                        <option value="2">2 estrelas</option>
                                        <option value="3">3 estrelas</option>
                                        <option value="4">4 estrelas</option>
                                        <option value="5">5 estrelas</option>
                                    </select>
                                </Col>
                                <Col>
                                    <input type="submit" className="filter-search" value="Filtrar" />
                                </Col>
                            </Form.Row>
                        </form>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Filter;