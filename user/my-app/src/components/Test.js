import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Test extends Component {
    render() {
        return (
            <div>
                <Link to={'/category/' + 10} >tett</Link>
                <br />
                <Link to={'/category/' + 11} >tett</Link>


                <br /><br /><br /><br /><br />
                {this.props.match.params.id}
            </div>
        );
    }
}

export default Test;
