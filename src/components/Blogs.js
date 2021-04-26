import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pages from '../json/blogs.json';

class Blogs extends Component {
    render(){
        const pages = Pages.map( (p) => {
            return (
                <Card className="p-3" style={{ width: '18rem' }} border="info">
                    <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                        {p.description}
                        </Card.Text>
                        <Card.Link href={p.path}>{p.clickme}</Card.Link>
                    </Card.Body>
                </Card>
            )
        });
        return (
            <><br/>
            <Row sm={12} xs={12}>
                <Col sm={2} xs={0}></Col>
                <Col sm={8} xs={12}>
                    <CardColumns>{pages}</CardColumns>
                </Col>
            </Row>
            </>
        );
    }
}

export default Blogs;