import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/bookingcare.svg'
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { withRouter } from 'react-router';
import PureCounter from '@srexi/purecounterjs';
// import '../../assets/css/style.css';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`);
        }
    }
    handleLoginPage = () => {
        if (this.props.history) {
            this.props.history.push(`/login`)
        }
    }
    render() {
        let language = this.props.language;
        return (
                // <div className='container home-header-hero'>
                //     <div className="header-contact">
                //         <div className="contact-via">
                //             <p>contact@example.com</p>
                //             <p>098</p>
                //         </div>
                //         <div className="contact-social">
                //             <i class="fab fa-facebook"></i>
                //         </div>
                //     </div>
                // </div>
            <div>
                {/* Navbar Section */}
                <div id="topbar" class="d-flex align-items-center fixed-top">
                    <div class="container d-flex justify-content-between">
                    <div class="contact-info d-flex align-items-center">
                        <i class="far fa-envelope"></i> <a href="mailto:contact@example.com">bookingclinic@email.com</a>
                        <i class="fas fa-phone"></i> +84 38 873 3942
                    </div>
                    <div class="d-none d-lg-flex social-links align-items-center">
                        <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                {/* Navbar Section */}
                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center">
                    <h1 class="logo me-auto"><a href="/home">Booking Clinic</a></h1>
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                        <li><a class="nav-link scrollto active" href="/">Trang chủ</a></li>
                        <li><a class="nav-link scrollto" href="#about">Chúng tôi</a></li>
                        <li><a class="nav-link scrollto" href="#services">Dịch vụ</a></li>
                        <li><a class="nav-link scrollto" href="#departments">Chuyên khoa</a></li>
                        <li><a class="nav-link scrollto" onClick={() => this.handleLoginPage()}>Bác sĩ</a></li>
                        {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Drop Down 2</a></li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                        <li><a class="nav-link scrollto" href="#contact">Liên hệ</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Đặt</span> lịch khám   </a>
                    </div>
                </header>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
