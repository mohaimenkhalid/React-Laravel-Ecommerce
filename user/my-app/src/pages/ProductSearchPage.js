import React, {Component, Fragment} from 'react';
import {matchPath} from "react-router";
import axios from "axios";
import AppURL from "../api/AppURL";
import ProductList from "../components/product/ProductList";
import noProductFound from "../assets/images/no_product_found.png";
import {loadProgressBar} from "axios-progress-bar";

class ProductSearchPage extends Component {
    constructor(props) {
        super();

        this.state = {
            query: '',
            fetched: false,
            results: []
        }
    }

    componentDidMount() {
        const match = this.matchPath();
        // If search is not undefined, get results
        if(match.params.query){
            this.searchForProduct(match.params.query);
        }

    }

    componentDidUpdate(prevProps){
        const match = this.matchPath();
        const search_query = match.params.query;
        // If search is not undefined and different from prev query, search again
        if(search_query && prevProps.match.params.query !== search_query){
            this.searchForProduct(search_query);
        }
    }

    matchPath () {
        return matchPath(this.props.history.location.pathname, {
            path: '/search/:query',
            exact: true,
            strict: false
        });
    }

    searchForProduct(query) {
        let controller = new AbortController();
        let signal = controller.signal;

        if(!query) return; // do nothing if empty string passed somehow

        // If some search occurred already, let component know there's a new query that hasn't yet been fetched
        this.state.fetched === true && this.setState({fetched: false})

        // If some fetch is queued already, cancel it
        if(this.willFetch){
            console.log("fetch is queued already");
            clearInterval(this.willFetch)
        }

        // If currently fetching, cancel call
        if(this.fetching){
            console.log("currently fetching");
            controller.abort();
        }

        // Finally queue new search
        this.willFetch = setTimeout(() => {
            loadProgressBar()
            this.fetching = axios.get(AppURL.productSearch, {params: {searchQuery: query, signal}})
                .then(res => {
                    console.log(res)
                    if(res.status === 200) {
                        this.setState({results: res.data})
                    }
                })
                .catch(error => {})
        },  500 /* wait half second before making async call */);

    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                this.state.results.length <= 0
                                    ? (
                                        <div className="card text-center p-4">
                                            <div className="card-body">
                                                <img src={noProductFound} style={{width: "400px", textAlign: "center"}} alt="" />
                                                <h5 className="mt-4">No Product Found!</h5>
                                            </div>
                                        </div>
                                    )
                                    :
                                    <ProductList products={this.state.results} />
                            }
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ProductSearchPage;
