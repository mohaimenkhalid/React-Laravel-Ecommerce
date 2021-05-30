import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div>
              <Button color="danger">danger</Button>
              <Button color="danger">
                  <i className="fa fa-user"></i>
              </Button>
            </div>
        );
    }
}

export default App;
