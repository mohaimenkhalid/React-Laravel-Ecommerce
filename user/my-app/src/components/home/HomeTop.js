import React, {Component, Fragment} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";

class HomeTop extends Component {

    constructor(props) {
        super(props);
        this.megaMenu = this.megaMenu.bind(this);
    }

    componentDidMount() {
        this.megaMenu();
    }

    megaMenu() {
        var acc = document.getElementsByClassName('accordion');
        var accNumber = acc.length;
        var i;
        for (i=0; i< accNumber; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight+ "px";
                }
            })
        }
    }
    render() {
        return (
            <Fragment>
                <Container className="p-0" fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={12} className="Desktop">
                            <MegaMenu />
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <HomeSlider />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;
