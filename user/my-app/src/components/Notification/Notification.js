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
                            No Notification Found!
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Notification;
