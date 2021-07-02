import React, {Component} from 'react';

class SearchComponent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-8 offset-md-2" style={{minHeight: "500px"}}>
                            <h3>Search for products (e.g. eggs, apple, potato)</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchComponent;
