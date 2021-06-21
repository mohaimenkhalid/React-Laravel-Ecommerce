import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row, Button} from "react-bootstrap";

class UserOnBoard extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={6} lg={6} xs={12}>
                            <Card style={{ width: '18rem' }} className="mt-5">
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Login</Card.Title>
                                    <p>Enter Your Registered Mobile Number.</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Mobile Number" />
                                    </div>
                                    <Button variant="danger">LOGIN</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserOnBoard;
