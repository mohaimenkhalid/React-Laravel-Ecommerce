import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProductLoader from "../loader/ProductLoader";

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            loaderCount: Array.from(Array(8)),
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                   <div className="text-center">
                       <hr />
                        <h4>{this.props.parentcategory}</h4>
                       <hr />
                   </div>
                    <div className="row">
                        {
                            this.props.categories.map((category, index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                        <Link to={`/category/${category.slug}`} >
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <img src={category.image} alt="" className="w-100" />
                                                    <h6 className="text-muted">{category.name}</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default CategoryList;
