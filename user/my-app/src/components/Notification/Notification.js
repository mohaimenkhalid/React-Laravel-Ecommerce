import React, {Component, Fragment} from 'react';
import {Container, Row, Col,Modal} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

class Notification extends Component {

    constructor() {
        super();
        this.state = {
            NotificationModal: false,
            notifications: [],
            message: '',
            title: '',
            date: ''
        }
    }

    componentDidMount() {
        axios.get(AppURL.getNotifications)
            .then(res => {
                this.setState({
                    notifications: res.data
                })
            })
            .then(error => {

            })
    }


    handleClose = () => {
        this.setState({NotificationModal: false})
    };
    handleShow = (e) => {
        let message = e.target.getAttribute('description')
        let title = e.target.getAttribute('title')
        let date = e.target.getAttribute('date')
        this.setState({NotificationModal: true, message: message, title: title, date: date})
    }

    render() {
        return (
            <Fragment>
                <Container className="my-5">
                    <h3 className="text-center">Notifications</h3>
                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10}  sm={12} xs={12}>
                            <Row>
                                {
                                    this.state.notifications.map(notification => {
                                        return (
                                            <Col className="d-flex justify-content-around mt-3" md={12} lg={12} sm={12} xs={12}>
                                                <div className="card" >
                                                    <div className="card-body">
                                                        <h6 className="notification-title">{notification.title}</h6>
                                                        <button className="float-right btn-danger" onClick={this.handleShow}
                                                                description={notification.message}
                                                                title={notification.title}
                                                                date={notification.date}
                                                        >
                                                            Details
                                                        </button>
                                                        <p className="py-1  px-0 notification-date m-0">
                                                            <i className="fa fa-bell"/>
                                                            {notification.date}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.NotificationModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6> <i className="fa theme-text fa-bell"/> Date: {this.state.date}</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="notification-title">{this.state.title}</h6>
                        <p>{this.state.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn site-btn" onClick={this.handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;
