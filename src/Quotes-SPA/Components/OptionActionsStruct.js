// ----------------------------------------------------------------------------
// Core Imports:

// React Imports:
import React from 'react';


// ----------------------------------------------------------------------------
// Component Imports:

// React-Bootstrap Imports:
import { Button, Container, Row, Col } from 'reactstrap';

const OptionActionsStruct = (props) => {
    return (
        <Row>
            <Col xs={4} sm={8}>
                
            </Col>
            <Col xs={8} sm={4}>
                <Button color="success" block size="lg">
                    Quote Rates
                </Button>
            </Col>
        </Row>
    );
}

export default OptionActionsStruct;