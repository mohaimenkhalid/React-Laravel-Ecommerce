import React, {Component, Fragment} from 'react';
import {Breadcrumb, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import AppURL from "../../api/AppURL";
import ReactDom from "react-dom";

class ProductDetails extends Component {

    imgOnclick(e) {
        let imgSource = e.target.getAttribute('src');
        let previewImage = document.getElementById('previewImage');
        ReactDom.findDOMNode(previewImage).setAttribute('src', imgSource);
    }

    price() {
        let product = this.props.product;
        if( product.special_price) {
            return (
                <>
                    <h3><del>Tk. {product.price}</del></h3>
                    <div className="d-flex align-items-center">
                        <h2>Tk. {product.special_price}</h2>
                    <small> You Save TK. { product.price - product.special_price}</small>
                </div>
                </>
            );
        } else {
            return (<h2>Tk. {product.price}</h2>)
        }

    }

    getThumbnailImage(img) {
        if(img === '') return;
        return (
            <Col className="image-box m-0" md={3} lg={3} sm={3} xs={3}>
                <img onClick={this.imgOnclick} className="w-100 Product-sm-img"
                     src={img} alt=""/>
            </Col>
        );
    }


    render() {
        let product = this.props.product;
        let product_details = product.product_details;
        return (
            <Fragment>
                <Container  className="animated slideInDown">
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to={"/productDetails/"}>product</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-1">
                        <Col  md={12} lg={12} sm={12} xs={12}>
                            <Row className=" shadow-sm  bg-white">
                                <Col className="p-2 animated " md={4} lg={4} sm={12} xs={12}>
                                    <img width="100%" id="previewImage" src={AppURL.ServerBaseURL+product.image} />
                                   {/* <InnerImageZoom
                                        zoomType={"hover"}
                                        zoomScale={1.8}
                                        src={this.state.previewImg}
                                        zoomSrc={this.state.previewImg} />
                                    */}
                                    {
                                        product_details ?
                                            (
                                                <Container className="my-3">
                                                    <Row>
                                                        { product_details.image1 ? this.getThumbnailImage(product_details.image1) : '' }
                                                        { product_details.image2 ? this.getThumbnailImage(product_details.image2) : '' }
                                                        { product_details.image3 ? this.getThumbnailImage(product_details.image3) : '' }
                                                        { product_details.image4 ? this.getThumbnailImage(product_details.image4) : '' }
                                                    </Row>
                                                </Container>
                                            )
                                            : ""
                                    }

                                </Col>
                                <Col className="p-3 " md={5} lg={5} sm={12} xs={12}>
                                    <h3 className="Product-Name">{product.name}</h3>

                                        {
                                            product_details && product_details.short_description
                                                ?
                                                (
                                                    <div>
                                                        <h6 className="section-sub-title"> product description</h6>
                                                            <p>
                                                                {product_details.short_description}
                                                            </p>
                                                    </div>
                                                )
                                                : ''
                                        }

                                    <div className="d-flex align-items-center">
                                        <h6 className="mt-2">Category - </h6>
                                        <span className="badge badge-info"> {product.category && product.category.name}</span>
                                    </div>

                                    <div> { this.price() } </div>

                                   <div className="row">
                                       <div className="col-md-4">
                                           <h6 className="mt-2">Color</h6>
                                           <select onChange="" className="form-control form-select">
                                               <option value="">Choose Color</option>
                                           </select>
                                       </div>
                                       <div className="col-md-4">
                                           <h6 className="mt-2">Choose Size</h6>
                                           <select onChange={this.sizeOnChange} className="form-control form-select">
                                               <option value="">Choose Size</option>
                                           </select>
                                       </div>
                                       <div className="col-md-4">
                                           <h6 className="mt-2">Choose Quantity</h6>
                                           <select onChange={this.quantityOnChange} className="form-control form-select">
                                               <option value="">Choose Quantity</option>
                                               <option value="01">1</option>
                                               <option value="02">2</option>
                                               <option value="03">3</option>
                                               <option value="04">4</option>
                                               <option value="05">5</option>
                                               <option value="06">6</option>
                                               <option value="07">7</option>
                                               <option value="08">8</option>
                                               <option value="09">9</option>
                                               <option value="10">10</option>
                                           </select>
                                       </div>
                                   </div>
                                    <div className="input-group mt-3 product-button-group">
                                        <button onClick={this.addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"/> {/*{this.state.addToCart}*/}Add To Cart</button>
                                        <button onClick={this.orderNow} className="btn btn-primary m-1"> <i className="fa fa-car"/>Buy Now</button>
                                        <button onClick={this.addToFav} className="btn btn-primary m-1"> <i className="fa fa-heart"/> Add To Favourite</button>
                                    </div>
                                </Col>
                                <Col className="mt-3" md={3} lg={3} sm={12}>
                                    <ul>
                                        <li>Cash On Delivery</li>
                                        <li>7 Days Happy Return</li>
                                        <li>Delivery Charge Tk. 50(Online Order)</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-1" md={12} lg={12} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h3 className="mt-2">DETAILS</h3>
                                {
                                    product_details
                                        ?
                                        (<p>{product_details.description }</p>)
                                        :
                                        (<p>No description found.</p>)
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;
