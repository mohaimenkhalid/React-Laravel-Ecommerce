import React, {Component} from 'react';
import subBanner2 from "../../assets/images/vegetable.jpg";
import subBanner1 from "../../assets/images/orange.jpg";

class SubBanner extends Component {
    render() {
        return (
            <>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="sub-banner-wrapper">
                            <img src={subBanner2} width="100%" />
                            <div className="content">
                                <h3>Fresh vegetable</h3>
                                <h5>15% discount</h5>
                                <button className="btn btn-success">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sub-banner-wrapper">
                            <img src={subBanner1} width="100%" />
                            <div className="content">
                                <h3>Oranges food</h3>
                                <h5>25% discount</h5>
                                <button className="btn btn-success">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SubBanner;
