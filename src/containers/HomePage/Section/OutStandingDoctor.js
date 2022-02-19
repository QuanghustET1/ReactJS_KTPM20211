import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import * as actions from "../../../store/actions";
import { withRouter } from 'react-router';


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
    handleViewDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`);
        }
    }

    render() {
        let arrDoctors = this.state.arrDoctors;
        console.log("arrdoctors:", arrDoctors);
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        }
        return (
            <div>
                <section id="doctors" class="doctors">
                    <div class="container">
                        <div class="section-title">
                            <h2>Bác sĩ</h2>
                            <p></p>
                        </div>
                    </div>
            <div className="section-outstanding-doctor section-share">
                <div className="section-container">
                        <Slider {...settings}>
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let name = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div class="col-lg-6 doctors" key={index}>
                                        <div class="member d-flex align-items-start">
                                            <div class="pic"><img src={imageBase64} class="img-fluid" alt="" onClick={()=>this.handleViewDoctor(item)}/></div>
                                            <div class="member-info">
                                                <h4 onClick={()=>this.handleViewDoctor(item)}>{item.firstName} {item.lastName}</h4>
                                                <span>{item.positionData.valueVi}</span>
                                                <p></p>
                                                <div class="social">
                                                    <a href=""><i class="fab fa-twitter"></i></a>
                                                    <a href=""><i class="fab fa-facebook"></i></a>
                                                    <a href=""><i class="fab fa-instagram"></i></a>
                                                    <a href=""> <i class="fab fa-linkedin"></i> </a>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                </section>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
