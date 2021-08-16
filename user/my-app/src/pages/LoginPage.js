import React, {Component, Fragment} from 'react';
import axios from "axios";
import AppURL from "../api/AppURL";
import {toast} from "react-toastify";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import {loginAction} from "../redux/actions/authActions";
import { store } from "../store/store";

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

        axios.post(AppURL.login, loginFormData)
            .then(res => {
                if(res.status === 200 && res.data.access_token) {
                    store.dispatch(() => loginAction(res.data))
                    this.setState({userRedirect: true});
                    toast.success("Login Successfully!");
                }else {
                    if(res.data.error) {
                        toast.error(res.data.error)
                    }
                    if(res.data.email && res.data.email.length > 0) {
                        toast.error(res.data.email[0])
                    }
                    if(res.data.password && res.data.password.length > 0) {
                        toast.error(res.data.password[0])
                    }
                }
            })
            .then(error => {
                //console.log(error)
            })

    }

    onUserRedirect = () => {
        if(this.state.userRedirect === true) {
            return (
                <Redirect to="/" />
            )
        }
    }

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
                                    <p>Enter Your Login Details.</p>
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
                                        <Button variant="danger" type="submit">LOGIN</Button>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                { this.onUserRedirect() }
            </Fragment>
        );
    }
}

export default LoginPage;
