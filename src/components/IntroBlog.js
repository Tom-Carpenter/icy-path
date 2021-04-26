import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function IntroBlog(){
    return (
        <Jumbotron>
                <Row sm={12} xs={12}>
            <Col sm={3} xs={0}></Col>
            <Col sm={6}>
            <h1 className="header">Where to start?</h1>
            <p>
                Getting started can often be the hardest part of any task. So, where do you start with a project that has big plans and short time.
                Well, as a team we started with what we would later come to call a SOS session into the project, where we articulated what exactly we wanted to get done and how we 
                were going to run the project. We quickly decided upon DevOps with Agile (and Kanban).
            </p>
            <p>
                We had more of this style of meetings where we picked an urgent area to work on, setup a 30-60 min meeting, got the whole team
                or as many as possible together. Then we went in hard to crack the problem we set out to, by the end of everyone of these meetings we had solved the problem we setout to.
                For example, roles, who would be responsible for what and who suited what role? We had a short meeting, we defined the roles and then put forward which roles we wanted to do, why we wanted to do them, in some cases 
                this was because that person hadn't tried that role before.
            </p>
            <p>
                This style of rapid, focused and strict short meetings to get through blockers was instrumental in our rapid start of the project.
            </p>

            <p className="header">
                <a href='/latest'>What's the latest?</a>
            </p>
            </Col>
            </Row>
            
        </Jumbotron>
    );
}
export default IntroBlog;