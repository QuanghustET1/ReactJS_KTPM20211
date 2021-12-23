import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './OutStandingDoctor.scss';
// import { FormattedMessage } from 'react-intl';


import Slider from "react-slick";


class HomeAbout extends Component {


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
                <div>Footer</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeAbout);
