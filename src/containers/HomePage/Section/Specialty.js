import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import { getAllSpecialty } from "../../../services/userService";
import { withRouter } from 'react-router';



import Slider from "react-slick";


class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSpecialty: []
        }
    }
    async componentDidMount() {
        let res = await getAllSpecialty();
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }

    handleViewDetailSpecialty = (item) => {
        if (this.props.history) {
            this.props.history.push(`detail-specialty/${item.id}`)
        }
    }

    render() {
        let { dataSpecialty } = this.state;
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        console.log(dataSpecialty);
        return (
            <div>
                <section id="departments" class="departments">
                    <div class="container">
                        <div class="section-title">
                            <h2>Departments</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <Slider {...settings}>
                            {dataSpecialty && dataSpecialty.length > 0 &&
                                dataSpecialty.map((item, index) => {
                                    return (
                                        <div className="row gy-4 adjustment" key={index}>
                                            <div class="col-lg-3">
                                                <ul class="nav nav-tabs flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link active show" data-bs-toggle="tab" onClick={() => this.handleViewDetailSpecialty(item)}>{item.name}</a>
                                                    </li>
                                                    </ul>
                                            </div>
                                            <div class="col-lg-9">
                                                <div class="tab-content">
                                                    <div class="tab-pane active show" id="tab-1">
                                                        <div class="row gy-4">
                                                            <div class="col-lg-8 details order-2 order-lg-1">
                                                                <h3>{item.name}</h3>
                                                                <p className="font-italic">Chuyên khoa chuyên chẩn đoán các bệnh liên quan đến {item.name}.
                                                                <br/>Với các y, bác sĩ có kinh nghiệm lâu năm trong chuyên ngành {item.name}
                                                                <br/>Mang đến cho người khám những dịch vụ và bác sĩ tốt nhất!</p>
                                                                {/* <p class="fst-italic"></p>
                                                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p> */}
                                                            </div>
                                                            <div class="col-lg-4 text-center order-1 order-lg-2">
                                                                <img src={item.image} alt="" class="img-fluid"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
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

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
