import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {Link} from "react-router-dom";
import FeaturedLoader from "../loader/FeaturedLoader";
import {loadProgressBar} from "axios-progress-bar";

class FeaturedCategories extends Component {

    constructor() {
        super();
        this.state = {
            featured_categories: [],
            loaderCount: Array.from(Array(6)),
            isLoading: true,
        }
    }

    componentDidMount() {
        axios.get(AppURL.getFeaturedCategory)
            .then(res => {
                if(res.status === 200) {
                    this.setState({
                        featured_categories: res.data,
                        isLoading: false
                    })
                }
            })
            .catch(error => {

            })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="card py-5 mb-3 feature-category">
                    <div className="text-center">
                        <h2 className="text-dark-color">Our Product Categories</h2>
                    </div>
                    <div className="row mt-5">
                        {
                            this.state.isLoading
                                ? (
                                    this.state.loaderCount.map((item, index) => {
                                        return (
                                            <div className="col-md-4" key={index}>
                                                <FeaturedLoader />
                                            </div>
                                        );
                                    })
                                )
                                : (
                                    this.state.featured_categories.map((category) => {
                                        return (
                                            <div className="col-md-4">
                                                <Link to={`/category/${category.slug}`}>
                                                    <div className="card">
                                                        <div className="card-body text-dark-color">
                                                            {category.name}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                )

                        }

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedCategories;
