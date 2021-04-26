import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function IntroBlog(){
    return (
    <div>
        <Row><br/><p></p></Row>
                <Row sm={12} xs={12}>
            <Col sm={3} xs={0}></Col>
            <Col sm={6}>
            <h1 className="header">Need to speak to us?</h1>
            <p>
                Email us at poggersthepenguin@gmail.com 
            </p>
            <p>
                If you are emailing us with a bug, please send us the logs that can be found under the C drive, at /logs/icypath.
                With a subject detailing in brief the bug prefixed with "Bug:", and in the email body outline how we might be able to reproduce the bug or what you were doing when the event occurred.
            </p>
            <p>
                If you have a cool idea, please let us know, put the subject of the email as "Bright Idea". We love to hear your ideas but please don't add attachments to this email unless you can't avoid it.
                 </p>

            <p className="header">
                <a href='/latest'>What's the latest?</a>
            </p>
            </Col>
            </Row>
            </div>
    );
}
export default IntroBlog;