import React, {Component} from 'react';

class CartItemLoader extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="">
            <div className="ph-item" style={{height: "100px", padding: "15px"}}>
            <div className="ph-col-2">
              <div className="ph-picture"></div>
            </div>
            <div>
              <div className="ph-row">
                <div className="ph-col-6 big"></div>
                <div className="ph-col-9 big empty"></div>
                <div className="ph-col-8"></div>
                <div className="ph-col-4 empty"></div>
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
              </div>
            </div>
          </div>
            <div className="ph-item" style={{height: "100px", padding: "15px"}}>
              <div className="ph-col-2">
                <div className="ph-picture"></div>
              </div>
              <div>
                <div className="ph-row">
                  <div className="ph-col-6 big"></div>
                  <div className="ph-col-9 big empty"></div>
                  <div className="ph-col-8"></div>
                  <div className="ph-col-4 empty"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartItemLoader;
