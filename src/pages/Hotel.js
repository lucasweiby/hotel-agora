import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Payment from '../components/Payment';
import Map2 from '../map/Map2';

//CSS
import '../css/Hotel.css';
import Map3 from '../map/Map3';

function Hotel() {
    return(
        <>
            <section className="hotel" id="hotel">
                <a href="/results" className="back-btn"><i className="fas fa-chevron-left"></i></a>
                <div className="gallery"></div>

                <div className="hotel-content">
                    <div className="container-ps">
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col md={12}>
                                    <h1>Hotel 5 estrelas</h1>
                                    <div className="w-100"></div>
                                    <div className="card-rate-5"></div>
                                    </Col>
                                </Row>
                                <Row className="align-items-center hotel-desc">
                                    <Col md={12} className="p-0">
                                        Este hotel sofisticado está situado em uma propriedade modernista impressionante,
                                        projetada pelo arquiteto Ruy Ohtake, a 10 minutos a pé do Parque Ibirapuera e a
                                        3,2 km do Museu de Arte de Assis Chateaubriand.
                                    </Col>
                                </Row>
                                <Row className="align-items-center">
                                    <Col md={{ span: 4, offset: 8 }} sm={{ span: 4, offset: 8 }} xs={{ span: 4, offset: 8 }} className="price justify-content-end">
                                        <small><span className="badge">71% OFF</span></small>
                                        <h3 className="card-price">R$ 374</h3>
                                        <h6 className="card-oldPrice"><small>R$ 1259</small></h6>
                                    </Col>
                                </Row>

                                <div className="content-skills">
                                    <Row>
                                        <Col md={12}>
                                            <h4 className="skills-title">Comodidades</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <ul className="skills">
                                                <li className="skills-item">
                                                    <i className="fas fa-wifi"></i>
                                                    <small className="skill-name">Wi-fi</small>
                                                </li>
                                                <li className="skills-item">
                                                    <i className="far fa-snowflake"></i>
                                                    <small className="skill-name">Ar condicionado</small>
                                                </li>
                                                <li className="skills-item">
                                                    <i className="fas fa-mug-hot"></i>
                                                    <small className="skill-name">Café da manhã</small>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="content-skills">
                                    <Row>
                                        <Col md={12}>
                                            <h4 className="skills-title">Informações sobre a reserva</h4>
                                        </Col>
                                    </Row>
                                    <Row className="infos">
                                        <Col md={12}>
                                            <ul className="infos-list">
                                                <li className="infos-item">
                                                    <strong>Entrada</strong>
                                                    <small>25/03/2019 até as 15h</small>
                                                </li>
                                                <li className="infos-item">
                                                    <strong>Saída</strong>
                                                    <small>26/03/2019 até as 12h</small>
                                                </li>
                                                <li className="infos-item">
                                                    <strong>Duração</strong>
                                                    <small>1 diária</small>
                                                </li>
                                                <li className="infos-item">
                                                    <strong>Tipo de acomodação</strong>
                                                    <small>Standart</small>
                                                </li>
                                                <li className="infos-item">
                                                    <strong>Acomoda até</strong>
                                                    <small>2 adultos</small>
                                                </li>
                                            </ul>
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col md={11}>
                                            <small>
                                                Após a confirmação do pagamento, você receberá o voucher com os dados do hotel em até 2 horas antes do horário de entrada da sua reserva.
                                            </small>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="content-skills">
                                    <Row>
                                        <Col md={12}>
                                            <h4 className="skills-title">Observações</h4>
                                        </Col>
                                    </Row>
                                    <Row className="obs">
                                        <Col md={12}>
                                            <ul className="obs-list">
                                                <li>Os pagamentos são processados no Brasil e cobrados em reais.</li>
                                                <li>Reserva de quarto solteiro ou duplo na categoria STANDARD.</li>
                                                <li>Cobraremos o valor total quando você clicar em reservar (incluindo impostos e taxas).</li>
                                                <li>Não garantimos tipo de cama. (Cama separadas ou com cama de casal).</li>
                                                <li>Check in às 15h e check out às 12h.</li>
                                                <li>Não GARANTIMOS early check in ou late check out.</li>
                                                <li>Você precisa ser maior de 18 anos e possuir cartão de crédito válido para realizar seu check in na recepção do hotel.</li>
                                                <li>Se você alterar ou cancelar a reserva, deverá pagar uma taxa de 100%.</li>
                                                <li>Não reembolsaremos reservas em caso de não comparecimento no hotel ou check-out antecipado.</li>
                                                <li>Ao clicar em "Reservar", você receberá um email confirmando sua reserva e até as 13h você receberá outro email (Voucher) com os dados do hotel para realizar o check in.</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6}>
                                <Card className="show-desktop">
                                    <Card.Body className="map-card show-desktop" id="map-card">
                                        <Map2 className="map-card" />
                                    </Card.Body>
                                </Card>

                                <Payment />
                            </Col>
                            
                        </Row>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Hotel;