import React, {Component, Fragment} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import landingBannerTop from "../../assets/images/landingBannerTop.jpg"
import searchIcon from "../../assets/images/search-icon.svg"

class HomeTop extends Component {

    render() {
        return (
            <Fragment>
                <Container className="p-0" fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="BannerTop">
                                <img src={landingBannerTop} alt="" />
                                <div className="search-section">
                                    <div className="col-md-12">
                                        <h1>Groceries delivered in 1 hour</h1>
                                        <input className="form-control"
                                               style={{ backgroundImage: `url(${searchIcon})` }}
                                               type="text" placeholder="Search for product.." />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;
