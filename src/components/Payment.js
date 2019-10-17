import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import CreditCardInput from 'react-credit-card-input';
import MaskedInput from 'react-text-mask'

//CSS
import '../css/Payment.css';


function Payment() {
    return(
        <>
            <div className="pagamentos">
                <div className="pagamentos-modal">
                    <div className="pagamento-header">
                        <h1>Finalizar reserva</h1>
                    </div>
                    <div className="pagamento-one">
                        <form className="dados" action="/success">
                            <div className="dados-pessoais">
                                <h4>1. Dados do Hóspede</h4>
                            </div>
                            <Form.Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <label for="name">Nome</label>
                                        <input type="text" className="form-control" id="name" placeholder="Ex.: Maria" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <label for="last">Último nome</label>
                                        <input type="text" className="form-control" id="last" placeholder="Ex.: Santos" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <label for="email">E-mail</label>
                                        <input type="email" className="form-control" id="email" placeholder="Ex.: exemplo@email.com.br" />
                                        <small id="emailHelp" className="form-text text-muted">Um e-mail de confirmação será enviado para este endereço.</small>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <label for="cpf">CPF</label>
                                        <MaskedInput
                                            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-', /\d/, /\d/]}
                                            className="form-control"
                                            placeholder="Somente números (9 dígitos)"
                                            guide={false}
                                            id="cpf"
                                            onBlur={() => {}}
                                            onChange={() => {}}
                                        />
                                        <small id="emailHelp" className="form-text text-muted">O CPF é necessário para que possa fazer o check-in.</small>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <label for="inputCity">Celular</label>
                                        <MaskedInput
                                            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                            className="form-control"
                                            placeholder="Somente números"
                                            guide={false}
                                            id="cpf"
                                            onBlur={() => {}}
                                            onChange={() => {}}
                                        />
                                        <small id="emailHelp" className="form-text text-muted">Número para entrarmos em contato caso necessário</small>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <label for="birthday">Data de nascimento</label>
                                        <MaskedInput
                                            mask={[ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                            className="form-control"
                                            placeholder="dd/mm/aaaa"
                                            guide={false}
                                            id="birthday"
                                            onBlur={() => {}}
                                            onChange={() => {}}
                                        />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col md={8}>
                                    <Form.Group>
                                        <label for="inputCity">Endereço completo</label>
                                        <input type="text" className="form-control" id="inputCity" placeholder="Endereço" />
                                        <small id="emailHelp" className="form-text text-muted">Ex.: Av. Paulista, 1578, São Paulo, 01310-200</small>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <label for="birthday">Complemento</label>
                                        <input type="text" className="form-control" id="birthday" placeholder="Bloco, apartamento, etc..." />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <div className="dados-pessoais">
                                <h4>2. Dados do Pagamento</h4>
                            </div>

                            <Row>
                                <Col md={12} className="card-container">
                                    <CreditCardInput
                                        cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
                                            <input
                                            {...props}
                                            onChange={handleCardCVCChange(e => console.log('cvc change', e))}
                                            />
                                        )}
                                        cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
                                            <input
                                            {...props}
                                            onChange={handleCardExpiryChange(e =>
                                                console.log('expiry change', e)
                                            )}
                                            />
                                        )}
                                        cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
                                            <input
                                            {...props}
                                            onChange={handleCardNumberChange(e =>
                                                console.log('number change', e)
                                            )}
                                            />
                                        )}
                                        customTextLabels={{
                                            invalidCardNumber: 'Número do cartão inválido',
                                            expiryError: {
                                              invalidExpiryDate: 'Data de vencimento inválida',
                                              monthOutOfRange: 'O mês de vencimento deve estár entre 1 e 12',
                                              yearOutOfRange: 'O ano de vencimento não pode estar no passado',
                                              dateOutOfRange: 'A data de vencimento não pode estar no passado'
                                            },
                                            invalidCvc: 'O código de segurança é inválido',
                                            invalidZipCode: 'O CEP é inválido',
                                            cardNumberPlaceholder: 'Número do cartão',
                                            expiryPlaceholder: 'MM/AA',
                                            cvcPlaceholder: 'CCV',
                                            zipPlaceholder: 'CEP'
                                        }}
                                    />
                                </Col>
                                <Col md={12}>
                                    <Form.Row>
                                        <Col md={12}>
                                            <Form.Group>
                                                <input type="text" className="form-control" id="card-name" placeholder="Nome como está no cartão" />
                                            </Form.Group>
                                        </Col>
                    
                                        <Col md={12} className="dados-pessoais">
                                            <h4>2.1. Dados do Titular</h4>
                                        </Col>

                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Check>
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" for="gridCheck">
                                                        Utilizar dados do hóspede
                                                    </label>
                                                </Form.Check>
                                            </Form.Group>
                                        </Col>

                                        <Col md={12}>
                                            <Form.Group>
                                                <input type="text" className="form-control" id="titular-cpf" placeholder="Somente números (9 dígitos)" data-mask="000.000.000-00" />
                                                <small id="emailHelp" className="form-text text-muted">CPF do titular do cartão</small>
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>

                                    <Form.Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <label for="birthday">Data de nascimento</label>
                                                <input type="text" className="form-control" id="birthday" placeholder="dd/mm/aaaa" data-mask="00/00/0000" />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group>
                                                <label for="inputCity">Telefone</label>
                                                <input type="text" className="form-control" id="inputCity" placeholder="Somente números" data-mask="(00) 00000-0000" />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                </Col>
                            </Row>

                            <Form.Group>
                                <Form.Check>
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Ao selecionar, concordo com os termos e condições da Hotéis Agora&copy;
                                    </label>
                                </Form.Check>
                            </Form.Group>

                            <Row>
                                <Col md={12}>
                                    <ul className="values">
                                        <li className="value-item">
                                            <small>
                                                <Table>
                                                    <tr>
                                                    <th>Valor da acomodação: </th>
                                                    <td>R$ 375,00</td>
                                                    </tr>
                                                </Table>
                                            </small>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <h4 className="final-value">
                                        <Table>
                                            <tr>
                                                <th>Valor final: </th>
                                                <td>R$ 375,00</td>
                                            </tr>
                                        </Table>
                                    </h4>
                                </Col>
                                <Col md={12}>
                                    <button type="submit" className="btn-home"><i className="far fa-check-circle"></i> RESERVAR</button>
                                </Col>
                            </Row>
        
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}; 

export default Payment;