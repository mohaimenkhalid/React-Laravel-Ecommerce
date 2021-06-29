import React, {Component} from 'react';
import {Accordion, Card} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import SubCategory from "../common/subCategory";
import {Link} from "react-router-dom";

class MegaMenu extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(AppURL.getAllCategories)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        categories: res.data
                    })
                }
            })
            .catch()
    }

    render() {
        return (
            <>
                {
                    this.state.categories.map((parent_category, index) => {
                        return (
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle eventKey="0" className="card-header text-left border-0">
                                        { parent_category.name }
                                    </Accordion.Toggle>
                                    {
                                        parent_category.children.length !== 0
                                        ?  (
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <SubCategory subCategory={parent_category.children} />
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            )
                                        : ""
                                    }
                                </Card>
                            </Accordion>
                        )
                    })
                }
            </>
        );
    }
}

export default MegaMenu;
