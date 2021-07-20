import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import AppURL from "../../api/AppURL";
import ReactDom from "react-dom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import axios from "axios";
import AppStorage from "../../helpers/AppStorage";
import {toast} from "react-toastify";
import {Redirect} from "react-router-dom";

class ProductDetails extends Component {
    
    constructor() {
      super();
      this.state = {
        previewImg: '',
        quantity: 1,
        product_color: '',
        product_size: '',
        product_id: '',
        addToCartStatus: false
      }
    }
    componentDidMount() {
      this.setState({previewImg: AppURL.ServerBaseURL+this.props.product.image});
    }

    imgOnclick = (e) =>{
        let imgSource = e.target.getAttribute('src');
        console.log(imgSource);
        this.setState({previewImg: imgSource})
        //let previewImage = document.getElementById('previewImage');
        //ReactDom.findDOMNode(previewImage).setAttribute('src', imgSource);
    };

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

    quantityChangeHandler = (e) => {
        e.preventDefault();
        this.setState({ quantity: e.target.value});
        console.log(e.target.value)
    };

    colorChangeHandler = (e) => {
      e.preventDefault();
      console.log(e.target.value, this.state.product_color);
      this.setState({ product_color: e.target.value});
      console.log(e.target.value, this.state.product_color)
    };

    sizeChangeHandler = (e) => {
      e.preventDefault();
      this.setState({ product_size: e.target.value});
      console.log(e.target.value)
    };
    
    addToCart = () => {
      let formData = new FormData();
      formData.append('product_color', this.state.product_color);
      formData.append('product_size', this.state.product_size);
      formData.append('product_id', this.props.product.id);
      formData.append('quantity', this.state.quantity);

      const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${AppStorage.getToken()}`
      };
      axios.post(AppURL.addToCart, formData, {headers: headers})
        .then(res => {
          console.log(res);
          if(res.data && res.status === 200) {
              toast.success(res.data.message);
              this.setState({ addToCartStatus: true });
          }
        })
        .catch(err => {

        })
    };

    cartPageRedirect = () => {
      if(this.state.addToCartStatus === true) {
        return <Redirect to="/cart" />
      }
    };

    render() {
        let product = this.props.product;
        let product_details = product.product_details;
        return (
            <Fragment>
                <Container  className="animated slideInDown">
                    <Row className="p-1">
                        <Col  md={12} lg={12} sm={12} xs={12}>
                            <Row className=" shadow-sm  bg-white">
                                <Col className="p-2 animated " md={4} lg={4} sm={12} xs={12}>
                                    <InnerImageZoom
                                        zoomType={"hover"}
                                        zoomScale={1.8}
                                        src={this.state.previewImg}
                                        zoomSrc={this.state.previewImg} />

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

                                   <div className="row mt-5">
                                       <div className="col-md-4">
                                           <h6 className="mt-2">Choose Quantity</h6>
                                           <input onChange={this.quantityChangeHandler} type="number" defaultValue="1" className="form-control"/>
                                       </div>
                                       <div className="col-md-4">
                                         {
                                           product_details && product_details.color
                                             ?
                                             <div>
                                               <h6 className="mt-2">Color</h6>
                                               <select className="form-control form-select" onChange={this.colorChangeHandler}>
                                                 <option value="" selected disabled>Choose Color</option>
                                                 { product_details.color.split(',').map(option => {
                                                      return (<option value={option}>{option}</option>)
                                                    })
                                                 }
                                               </select>
                                             </div> : ''
                                         }
                                       </div>
                                       <div className="col-md-4">
                                         {
                                           product_details && product_details.size
                                             ?
                                             <div>
                                               <h6 className="mt-2">Choose Size</h6>
                                               <select onChange={this.sizeChangeHandler} className="form-control form-select">
                                                 <option value="">Choose Size</option>
                                                 { product_details.size.split(',').map(option => {
                                                   return (<option value={option}>{option}</option>)
                                                 })
                                                 }
                                               </select>
                                             </div> : ""
                                         }
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
              { this.cartPageRedirect() }
            </Fragment>
        );
    }
}

export default ProductDetails;
