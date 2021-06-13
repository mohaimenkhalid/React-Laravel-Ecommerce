import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container  className="TopSection  animated slideInDown">
                    {/*<Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to={"/productDetails/"+product_code}>Details</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>*/}
                    <Row className="p-1">
                        <Col  md={12} lg={12} sm={12} xs={12}>
                            <Row className=" shadow-sm  bg-white">
                                <Col className="p-5 animated " md={6} lg={6} sm={12} xs={12}>
                                    <img width="100%" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                   {/* <InnerImageZoom
                                        zoomType={"hover"}
                                        zoomScale={1.8}
                                        src={this.state.previewImg}
                                        zoomSrc={this.state.previewImg} />
                                    */}
                                    <Container className="my-3">
                                        <Row>
                                            <Col className="image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                            </Col>
                                            <Col className="image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                            </Col>
                                            <Col className="image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                            </Col>
                                            <Col className="image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnclick} className="w-100 Product-sm-img" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                            </Col>
                                        </Row>
                                    </Container>
                                    sfsff
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">Product Title</h5>
                                    <h6 className="section-sub-title">  product description</h6>
                                    5454

                                    <div className="">
                                        <h6 className="mt-2">Choose Color</h6>
                                        <select onChange="" className="form-control form-select">
                                            <option value="">Choose Color</option>
                                        </select>
                                    </div>

                                    <div className="">
                                        <h6 className="mt-2">Choose Size</h6>
                                        <select onChange={this.sizeOnChange} className="form-control form-select">
                                            <option value="">Choose Size</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <h6 className="mt-2">Choose Quantity</h6>
                                        <select onChange={this.quantityOnChange} className="form-control form-select">
                                            <option value="">Choose Quantity</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div className="input-group mt-3">
                                        {/*<button onClick={this.addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"/> {this.state.addToCart}</button>
                                        <button onClick={this.orderNow} className="btn btn-primary m-1"> <i className="fa fa-car"/>{this.state.orderNow}</button>
                                        <button onClick={this.addToFav} className="btn btn-primary m-1"> <i className="fa fa-heart"/> {this.state.addToFav}</button>*/}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h6 className="mt-2">DETAILS</h6>

                            </div>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                Review list
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;
