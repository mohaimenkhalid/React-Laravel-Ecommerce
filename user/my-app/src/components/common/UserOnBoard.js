import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row, Button} from "react-bootstrap";

class UserOnBoard extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={4} lg={4} xs={12}>
                            <Card style={{ width: '18rem' }} className="mt-5">
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Login</Card.Title>
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
