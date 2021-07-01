import React, {Component, Fragment} from 'react';
import axios from "axios";
import AppURL from "../api/AppURL";
import ProductList from "../components/product/ProductList";
import CategoryList from "../components/product/CategoryList";
import ProductLoader from "../components/loader/ProductLoader";

class CategoryProductView extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            categories: [],
            parentCategory: '',
            isLoading: true,
            loaderCount: Array.from(Array(8)),
        }
    }

    componentWillMount(prevProps) {
        this.fetchData(prevProps);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.slug !== this.props.match.params.slug) {
            this.fetchData(prevProps);
        }
    }

    fetchData(prevProps) {
        this.setState({
            isLoading: true
        })
        axios.get(AppURL.getCategoryAndProductByCategory(this.props.match.params.slug))
            .then(res => {
                if(res.status === 200) {
                    if(res.data.response_type === 'product') {
                        this.setState({
                            products: res.data.data,
                            categories: [],
                            isLoading: false
                        })
                    } else {
                        console.log(res)
                        this.setState({
                            products: [],
                            categories: res.data.data.single_children,
                            parentCategory: res.data.data.name,
                            isLoading: false
                        })
                    }
                }
            })
            .catch(error => {

            })
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.isLoading
                        ? (
                            <div className="row mt-4">
                                {
                                    this.state.loaderCount.map((item, index) => {
                                        return (
                                            <div className="col-md-3" key={index}>
                                                <ProductLoader />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                        : (
                        this.state.products.length !== 0
                            ? (<ProductList products={this.state.products} />)
                            : (
                                <CategoryList parentcategory={this.state.parentCategory}
                                              categories={this.state.categories}

                                />)
                        )

                }

            </Fragment>
        );
    }
}

export default CategoryProductView;
