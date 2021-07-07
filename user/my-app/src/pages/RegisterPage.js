import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";
import AppStorage from "../helpers/AppStorage";
import {toast} from "react-toastify";

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

        let first_name = this.state.first_name;
        let last_name = this.state.last_name;
        let email = this.state.email;
        let password = this.state.password;

        let registerFormData = new FormData();
        registerFormData.append('first_name', first_name)
        registerFormData.append('last_name', last_name)
        registerFormData.append('email', email)
        registerFormData.append('password', password)

        axios.post(AppURL.register, registerFormData)
            .then(res => {
                console.log(res)
                if(res.status === 200 && res.data.access_token) {
                    let token = JSON.stringify(res.data.access_token);
                    let user = JSON.stringify(res.data.user);
                    AppStorage.store(token, user)
                    this.props.history.push('/');
                    toast.success("Registration successfully Completed!");
                }else {
                    if(res.data.email && res.data.email.length > 0) {
                        toast.error(res.data.email[0])
                    }
                    if(res.data.first_name && res.data.first_name.length > 0) {
                        toast.error(res.data.first_name[0])
                    }
                    if(res.data.password && res.data.password.length > 0) {
                        toast.error(res.data.password[0])
                    }
                }
            })
            .then(error => {
                console.log(error)
            })

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
