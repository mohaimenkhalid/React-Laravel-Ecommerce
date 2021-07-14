import React, {Component, Fragment} from 'react';
import {Col, Navbar, Row, Dropdown} from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import {Link, Redirect} from "react-router-dom";
import SearchBar from "../product/SearchBar";
import AppStorage from "../../helpers/AppStorage";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {toast} from "react-toastify";

class NavMenuDesktop extends Component {

    constructor() {
      super();
      this.state = {
        homeRedirect: false,
      }
    }


    onLogout = () => {
      axios.post(AppURL.logoutUser, { headers: {"Authorization" : `Bearer ${AppStorage.getToken()}`}})
        .then(res => {
          console.log(res);
          if(res.status === 200 && res.data.status === true) {
            AppStorage.clear();
            this.setState({ homeRedirect: true });
            toast.success("You are logged out!");
          }
        })
        .catch()
    };

    HomeRedirect = () => {
      if(this.state.homeRedirect === true) {
        return <Redirect to="/" />
      }
    };

    render() {
        return (
            <Fragment>
                <Navbar bg="light" className="Desktop navbar sticky-top">
                    <Row className="align-items-center">
                        <Col lg={2} md={2} sm={12} xs={12}>
                            <div className="d-flex">
                                <Link to="/">
                                    <img width="175px" src={logo} alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <SearchBar />
                        </Col>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <div className="navbar-right-side">
                                <Link to="/favourite">
                                    <i className="fa fa-heart font-30" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </Link>

                                <Link to="/notification" >
                                    <i className="fa fa-bell font-30" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </Link>
                                <Link to="/">
                                    <i className="fa fa-shopping-cart font-30" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </Link>

                                <div id="google_translate_element"></div>

                                {
                                    AppStorage.getToken()
                                        ?
                                        (
                                            <Dropdown>
                                                <Dropdown.Toggle variant="default"
                                                                 id="dropdown-basic dropdown-button-drop-left"
                                                                 drop="left">
                                                    {AppStorage.getUser() && AppStorage.getUser().first_name}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">dashboard</Dropdown.Item>
                                                    <Dropdown.Item onClick={this.onLogout}>Logout</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        )
                                        :
                                        (
                                            <Link to="/login" className="signin">
                                                Sign In
                                            </Link>
                                        )
                                }
                            </div>
                        </Col>
                    </Row>
                </Navbar>
              { this.HomeRedirect() }
            </Fragment>
        );
    }
}

export default NavMenuDesktop;
