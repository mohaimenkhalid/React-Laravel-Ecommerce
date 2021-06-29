import React, {Component} from 'react';
import Slider from "react-slick";

class HomeSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="w-100" src="https://dsxzwbyxhnf79.cloudfront.net/groupImages/2021/05/60abad4d32526_1621863757.png" alt="" height="400px" />
                    </div>
                    <div>
                        <img className="w-100" src="https://dsxzwbyxhnf79.cloudfront.net/groupImages/2021/06/60bb80f7a27dc_1622900983.jpg" height="400px" alt="" />
                    </div>
                    <div>
                        <img className="w-100" src="https://dsxzwbyxhnf79.cloudfront.net/groupImages/2021/05/60ad41d88ab64_1621967320.png" height="400px" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default HomeSlider;
