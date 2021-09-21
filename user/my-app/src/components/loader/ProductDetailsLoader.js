import React, {Component} from 'react';
import ProductLoader from "./ProductLoader";

class ProductDetailsLoader extends Component {
    render() {
        return (
            <>
                <div style={{transition: "all .5s ease-in-out"}}>
                    <div className="ph-item">
                        <div className="ph-col-4">
                            <div className="ph-picture" style={{background: "#e7e7e7", borderRadius: ".5rem", height: "300px"}}></div>
                            <div className="ph-item">
                                <div className="ph-col-4">
                                    <div className="ph-picture" style={{background: "#e7e7e7", borderRadius: ".5rem", height: "100px"}}></div>
                                </div>
                                <div className="ph-col-4">
                                    <div className="ph-picture" style={{background: "#e7e7e7", borderRadius: ".5rem", height: "100px"}}></div>
                                </div>
                                <div className="ph-col-4">
                                    <div className="ph-picture" style={{background: "#e7e7e7", borderRadius: ".5rem", height: "100px"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="ph-col-8">
                            <div className="ph-row">
                                <div className="ph-col-4 big" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-2" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-10 empty"></div>
                                <div className="ph-col-6" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-4" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-6" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-6" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-2" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-10 empty"></div>
                                <div className="ph-col-6" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-4" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-6" style={{background: "#e7e7e7", borderRadius: ".5rem"}}></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-item" style={{width: "100px", marginTop: "1rem", marginRight: "1rem"}}></div>
                                <div className="ph-item" style={{width: "100px", marginTop: "1rem"}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <ProductLoader />
                    </div>
                    <div className="col-md-3">
                        <ProductLoader />
                    </div>
                    <div className="col-md-3">
                        <ProductLoader />
                    </div>
                    <div className="col-md-3">
                        <ProductLoader />
                    </div>
                </div>
            </>
        );
    }
}

export default ProductDetailsLoader;
