import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }
    }

    firstNameChangeHandler = (event) => {
        let firstName = event.target.value;
        this.setState({first_name: firstName});
    }

    lastNameChangeHandler = (event) => {
        let lastName = event.target.value;
        this.setState({last_name: lastName});
    }

    emailChangeHandler = (event) => {
        let email = event.target.value;
        this.setState({email: email});
    }

    passwordChangeHandler = (event) => {
        let password = event.target.value;
        this.setState({password: password});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.first_name);
    }


    render() {
        return (
            <Fragment>
                <Row className="d-flex justify-content-center">
                    <Col md={6} lg={6} xs={12}>
                        <Card className="mt-5">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Register</Card.Title>
                                <p>Enter Your Registration Details.</p>
                               <form onSubmit={this.onFormSubmit} id="registerForm">
                                   <div className="form-group">
                                       <label>First Name <span className="text-danger">*</span></label>
                                       <input type="text" onChange={this.firstNameChangeHandler} className="form-control" placeholder="Enter First Name" required />
                                   </div>
                                   <div className="form-group">
                                       <label>Last Name</label>
                                       <input type="text" onChange={this.lastNameChangeHandler} className="form-control" placeholder="Enter Last Name" />
                                   </div>
                                   <div className="form-group">
                                       <label>Email<span className="text-danger">*</span></label>
                                       <input type="email" onChange={this.emailChangeHandler} className="form-control" placeholder="Enter Email Address" required/>
                                   </div>
                                   <div className="form-group">
                                       <label>password <span className="text-danger">*</span></label>
                                       <input type="password" onChange={this.passwordChangeHandler} className="form-control" placeholder="Password" required/>
                                   </div>
                                   <div className="form-group">
                                       <small>Already have an account? <Link to="/login">Login</Link> </small>
                                   </div>
                                   <Button variant="danger mt-4" type="submit">Register</Button>
                               </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default RegisterPage;
