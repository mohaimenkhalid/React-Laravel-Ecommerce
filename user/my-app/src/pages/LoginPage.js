import React, {Component, Fragment} from 'react';
import axios from "axios";
import AppURL from "../api/AppURL";
import {toast} from "react-toastify";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import {loginAction} from "../redux/actions/authActions";
import { store } from "../store/store";
import GoogleLoginComponent from "../components/login/GoogleLoginComponent";

class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            userRedirect: false,
        }
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
        let email = this.state.email;
        let password = this.state.password;
        let loginFormData = new FormData();
        loginFormData.append('email', email)
        loginFormData.append('password', password)

        store.dispatch(()=> loginAction(loginFormData))
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={5} lg={5} xs={12}>
                            <Card className="mt-5">
                                <Card.Img variant="top" src="" />
                                <Card.Body className="text-center">
                                    <Card.Title>
                                        <h4>Login</h4>
                                    </Card.Title>
                                    <p>Enter your login details.</p>
                                    <form onSubmit={this.onFormSubmit}>
                                        <div className="form-group">
                                            <input type="email" onChange={this.emailChangeHandler} className="form-control" placeholder="Email Address" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" onChange={this.passwordChangeHandler} className="form-control" placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <small>Not Register User? <Link to="/register">Register</Link> </small>
                                        </div>
                                        <Button className="btn-block main-login-button" variant="danger" type="submit">LOGIN</Button>
                                    </form>

                                    <div className="social-divider mt-5">
                                        <span>or</span>
                                    </div>
                                    <GoogleLoginComponent />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default LoginPage;
