import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Boulder from './images/boulder.png'
class BoulderLine extends Component {
    
    render(){
        var boulders = [];
        for (var i = 0; i < 12; i++) {
            boulders.push(
                <Col><img src={Boulder} width="30"
                height="60"
                width="60"
                className="d-inline-block align-top" alt=""/></Col>
            );
        }
        return(
            <Row>
                
            </Row>
        );
    }
}
export default BoulderLine;