import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import * as actions from "../../../store/actions";
// import { FormattedMessage } from 'react-intl';


import Slider from "react-slick";


class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }


    render() {
        let arrDoctors = this.state.arrDoctors;
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
                        <Slider {...this.props.settings}>
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                if (index == 0) {
                                    console.log(item)
                                }
                                let name = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div className="section-customize section-outstanding-doctor" key={index}>
                                        <div className="bg-image section-outstanding-doctor" />
                                        <div className="bg-content text-center">
                                            <div>{name}</div>
                                            <div>General</div>
                                        </div>
                                    </div>
                                )
                            })}
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
        topDoctorsRedux: state.admin.topDoctors

    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
