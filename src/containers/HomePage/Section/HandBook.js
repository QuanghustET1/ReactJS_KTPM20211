import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';


import Slider from "react-slick";


class Handbook extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }
        return (
            <div className="section-handbook section-share">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cẩm nang</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>

                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div className="bg-content text-center">
                                    <div>ĐMT</div>
                                    <div>Răng hàm mặt</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook" />
                                <div>Cơ xương khớp 5</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
