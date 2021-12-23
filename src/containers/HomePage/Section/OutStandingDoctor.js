import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
// import { FormattedMessage } from 'react-intl';


import Slider from "react-slick";


class OutStandingDoctor extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }
        return (
            <div className="section-outstanding-doctor section-share">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>

                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="section-customize section-outstanding-doctor">
                                <div className="bg-image section-outstanding-doctor" />
                                <div className="bg-content text-center">
                                    <div>ĐMT</div>
                                    <div>Răng hàm mặt</div>
                                </div>
                            </div>
                            <div className="section-customize section-outstanding-doctor">
                                <div className="bg-image section-outstanding-doctor" />
                                <div className="bg-content text-center">
                                    <div>ĐMT</div>
                                    <div>Răng hàm mặt</div>
                                </div>
                            </div>
                            <div className="section-customize section-outstanding-doctor">
                                <div className="bg-image section-outstanding-doctor" />
                                <div className="bg-content text-center">
                                    <div>ĐMT</div>
                                    <div>Răng hàm mặt</div>
                                </div>
                            </div>
                            <div className="section-customize section-outstanding-doctor">
                                <div className="bg-image section-outstanding-doctor" />
                                <div className="bg-content text-center">
                                    <div>ĐMT</div>
                                    <div>Răng hàm mặt</div>
                                </div>
                            </div>
                            <div className="section-customize section-outstanding-doctor">
                                <div className="bg-image section-outstanding-doctor" />
                                <div className="bg-content text-center">
                                    <div>ĐMT</div>
                                    <div>Răng hàm mặt</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
