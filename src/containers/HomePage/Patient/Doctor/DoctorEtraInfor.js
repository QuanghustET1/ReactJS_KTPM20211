import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { getScheduleDoctorByDate } from '../../../../services/userService';
import { LANGUAGES } from '../../../../utils';
import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailDoctorInfor: false
        }
    }
    async componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    ShowHideDetailInfor = (status) => {
        this.setState({
            isShowDetailDoctorInfor: status
        })
    }
    render() {
        let { isShowDetailDoctorInfor } = this.setState;
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">
                        Địa chỉ khám
                    </div>
                    <div className="name-clinic">
                        Phòng khám dep trai
                    </div>
                    <div className="detail-address">
                        dep trai
                    </div>

                </div>
                <div className="content-down">
                    {isShowDetailDoctorInfor === false &&
                        <div className="short-infor">
                            Giá khám 1000000đ
                            <span onClick={() => this.ShowHideDetailInfor(true)}>Xem chi tiết</span>
                        </div>
                    }
                    {isShowDetailDoctorInfor === true &&
                        <>
                            <div className="title-price">
                                Giá
                            </div>
                            <div className="detail-infor">
                                <div className="price">
                                    <span className="left">Giá Khám</span>
                                    <span className="right">10000000đ</span>
                                </div>
                                <div className="note">
                                    Quang dzai
                                </div>
                            </div>
                            <div className="payment">
                                ATM
                            </div>
                            <div className="hide-price">
                                <span onClick={() => this.ShowHideDetailInfor(false)}>
                                    Ẩn bảng giá
                                </span>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
