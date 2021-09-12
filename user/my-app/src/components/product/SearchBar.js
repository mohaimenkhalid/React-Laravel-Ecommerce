import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import {matchPath} from "react-router";

class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            query: ''
        }
    }
    componentDidMount() {
        //Clear searchBox...
        this.unlisten = this.props.history.listen( location =>  {
            if(location.pathname === '/') {
                this.setState({query: ''})
            }
        });

        if(this.matchPath() && this.matchPath().params.query) {
            this.setState({query: this.matchPath().params.query})
        } else {
            this.setState({query: ''})
        }
    }

    componentWillUnmount() {
        this.unlisten();
    }


    matchPath () {
        return matchPath(this.props.history.location.pathname, {
            path: '/search/:query',
            exact: true,
            strict: false
        });
    }

    searchHandler = (e) => {
        const query = e.target.value
        this.props.history.replace(`/search/${query}`);
        this.setState({query: query})
    }

    render() {
        return (
            <div>
                <div className="d-flex">
                    <input type="text" className="form-control"
                           onChange={this.searchHandler}
                           value={this.state.query}
                           placeholder="Search for products (e.g. eggs, milk, potato)..." />
                    <button type="button" className="btn site-btn">
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchBar);
