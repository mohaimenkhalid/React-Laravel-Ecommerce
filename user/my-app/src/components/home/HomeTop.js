import React, {Component, Fragment} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import landingBannerTop from "../../assets/images/landingBannerTop.jpg"
import searchIcon from "../../assets/images/search-icon.svg"
import { withRouter } from 'react-router-dom';

class HomeTop extends Component {
    state = {
        searchQuery: ''
    }
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
                                               onChange={(e) => this.setState({searchQuery: e.target.value})}
                                               style={{ backgroundImage: `url(${searchIcon})` }}
                                               type="text" placeholder="Search for product.." />
                                               <button onClick={() => {
                                                   this.props.history.push(`/search/${this.state.searchQuery}`)
                                               }} className="btn btn-success btn-lg mt-2">Find Product</button>
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

export default withRouter(HomeTop);
