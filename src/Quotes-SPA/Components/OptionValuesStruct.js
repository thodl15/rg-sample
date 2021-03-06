// ----------------------------------------------------------------------------
// Core Imports:

// React Imports:
import React from 'react';


// ----------------------------------------------------------------------------
// Component Imports:

// React-Bootstrap Imports:
import {Row, Col, Form, FormGroup, Input} from 'reactstrap';


// ----------------------------------------------------------------------------
// Module Exports:
const OptionValuesStruct = (props) => {
    return (
        <Form>
            <Row form>
                {/* First Parameter Column */}
                <Col xs={12} sm={6}>
                    <FormGroup row>
                        <Col xs={4} sm={4}>
                            Loan Size
                        </Col>
                        <Col xs={8} sm={7}>
                            <Input onBlur={evt => props.validateLoanValue(evt)} type="text"/>
                        </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup row>
                        <Col xs={4} sm={4}>
                            Credit Score
                        </Col>
                        <Col xs={8} sm={7}>
                            <Input onBlur={evt => props.validateCreditValue(evt)} type="text"/>
                        </Col>
                    </FormGroup>
                </Col>
                
                {/* Second Parameter Column */}
                <Col xs={12} sm={6}>
                    <FormGroup row>
                        <Col xs={4} sm={5}>
                            Property Type
                        </Col>
                        <Col xs={8} sm={7}>
                            <Input onBlur={evt => props.setPropertyType(evt)} type="select">
                                <option value="SingleFamily">Single Family</option>
                                <option value="Condo"       >Condo        </option>
                                <option value="Townhouse"   >Townhouse    </option>
                                <option value="MultiFamily" >Multi-Family </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup row>
                        <Col xs={4} sm={5}>
                            Occupancy
                        </Col>
                        <Col xs={8} sm={7}>
                            <Input onBlur={evt => props.setOccupancy(evt)} type="select">
                                <option value="Primary"   >Primary   </option>
                                <option value="Secondary" >Secondary </option>
                                <option value="Investment">Investment</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}

export default OptionValuesStruct;