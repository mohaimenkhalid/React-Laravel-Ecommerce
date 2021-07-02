import React, {Component} from 'react';

class FeaturedLoader extends Component {
    render() {
        return (
            <div>
                <div className="ph-item p-0 mb-3" style={{height: "80px"}}>
                    <div className="ph-col-12">
                        <div className="ph-picture" style={{borderRadius: ".5rem"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedLoader;
