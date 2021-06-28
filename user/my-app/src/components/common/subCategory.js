import React, {Component} from 'react';
import {Accordion, Card, Button} from "react-bootstrap";

class SubCategory extends Component {
    render() {
        return (
            <>
                {
                    this.props.subCategory.map((subCategory) => {
                        return (
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle variant="link" eventKey="0" className="card-header text-left border-0">
                                        { subCategory.name }
                                    </Accordion.Toggle>
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
