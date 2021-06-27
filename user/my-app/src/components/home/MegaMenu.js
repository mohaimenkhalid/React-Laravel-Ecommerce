import React, {Component, fragment} from 'react';
import {Accordion, Card, Button} from "react-bootstrap";

class MegaMenu extends Component {
    render() {
        return (
            /*<div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <button className="accordion">
                       <i className="fa fa-list-alt" />
                        Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Men's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>

                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                    <button className="accordion">
                        <i className="fa fa-list-alt"></i>
                        Women's Clothing
                    </button>
                    <div className="panel">
                        <ul>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                            <li>
                                <a href="#" className="accordionItem">Mem Shirt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>*/
            <fragment>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                Click me!
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                Click me!
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </fragment>
        );
    }
}

export default MegaMenu;
