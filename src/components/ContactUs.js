import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';
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
                <h2>
                Email us at:</h2>
            </p>
            <SocialIcon  network="email" url="mailto:poggersthepenguin@gmail.com" target="__blank__"/>
                <a href="mailto:poggersthepenguin@gmail.com" target="__blank__">  poggersthepenguin@gmail.com</a>
                <p/>
            <p>
                If you are emailing us with a bug 
                <a target="__blank__" href="mailto:poggersthepenguin@gmail.com?subject=Bug:&body=*Paste your logs here and describe the problem*"> click here</a>
                , please send us the logs that can be found under the C drive, at /logs/icypath.
                With a subject detailing in brief the bug, and in the email body outline how we might be able to reproduce the bug or what you were doing when the event occurred.
            </p>
            </Col>
            </Row>
            <Row>
            <Col sm={3} xs={0}></Col>
            <Col sm={6}>
            <p>
                <h2>Cool ideas?</h2>
                We love to hear your ideas and thoughts, even if its to moan about certain features or if you want help with a level. <br/>
                <a target="__blank__" href="mailto:poggersthepenguin@gmail.com?subject=Bug:&body=*Paste your logs here and describe the problem*">Got a cool idea? Please share it with us here</a>
                </p>
                </Col>
            </Row>
            <Row>
                <Col xs={0} sm={3}>
                </Col>
                <Col sm={6} xs={12}>
                <p>
                <h2> Twitter</h2>
                Remember you can always contact Poggers on twitter, as hes pretty famous some of the team manage his twitter so can help with any of your requests.  
            </p>
            <SocialIcon  url="https://mobile.twitter.com/Poggers69078986" target="__blank__"/><a href="https://mobile.twitter.com/Poggers69078986">  @Poggers69078986</a>
            
                </Col>
            </Row>
            </div>
        
    );
}
export default IntroBlog;