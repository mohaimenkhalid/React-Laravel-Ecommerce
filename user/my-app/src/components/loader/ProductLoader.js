import React, {Component} from 'react';

class ProductLoader extends Component {
    render() {
        return (
            <div>
                <div className="mb-3" style={{transition: "all .5s ease-in-out"}}>
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-picture" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                            <div className="ph-row">
                                <div className="ph-col-4" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-12" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductLoader;
