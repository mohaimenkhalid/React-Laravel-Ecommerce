import React, {Component} from 'react';
import {Accordion, Card} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import SubCategory from "../common/subCategory";
import {Link, NavLink} from "react-router-dom";

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
                <div className="card">
                   <Link to="">
                       <div className="card-header">
                           Popular Products
                       </div>
                   </Link>
                    <Link to="">
                        <div className="card-header">
                            Offers
                        </div>
                    </Link>
                </div>
                {
                    this.state.categories.map((parent_category, index) => {
                        return (
                            <>
                                <Accordion key={index}>
                                    <Card>
                                        <NavLink to={`/category/${parent_category.slug}`} activeClassName="active">
                                            <Accordion.Toggle eventKey="0" className="card-header text-left border-0 w-100">
                                                { parent_category.name }
                                            </Accordion.Toggle>
                                        </NavLink>
                                        {
                                            parent_category.children.length !== 0
                                                ?  (
                                                    <Accordion.Collapse eventKey="0" >
                                                        <Card.Body>
                                                            <SubCategory subCategory={parent_category.children} />
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                )
                                                : ""
                                        }
                                    </Card>
                                </Accordion>
                            </>
                        )
                    })
                }
            </>
        );
    }
}

export default MegaMenu;
