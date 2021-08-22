import React, {Component} from 'react';

class ListLoader extends Component {
    render() {
        return (
            <div>
                <div className="ph-item">
                    <div className="ph-col-12">
                        <div className="ph-row">
                            <div className="ph-col-12 big"></div>
                            <div className="ph-col-9 big empty"></div>
                            <div className="ph-col-8"></div>
                            <div className="ph-col-4 empty"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ListLoader;
