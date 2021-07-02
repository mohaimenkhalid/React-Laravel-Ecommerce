import React, {Component} from 'react';
import {Accordion, Card} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

class SubCategory extends Component {
    render() {
        return (
            <>
                {
                    this.props.subCategory.map((subCategory, index) => {
                        return (
                            <Accordion key={index}>
                                <Card>
                                    <NavLink to={`/category/${subCategory.slug}`} activeClassName="active">
                                        <Accordion.Toggle variant="link" eventKey="0" className="card-header text-left border-0 w-100">
                                            { subCategory.name }
                                        </Accordion.Toggle>
                                    </NavLink>
                                    {
                                        subCategory.children.length !== 0
                                            ?  (
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <SubCategory subCategory={subCategory.children} />
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

export default SubCategory;
