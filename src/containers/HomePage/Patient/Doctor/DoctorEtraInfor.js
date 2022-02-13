import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { getEtraInforDoctorById } from '../../../../services/userService';
import { LANGUAGES } from '../../../../utils';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailDoctorInfor: false,
            extraInfor: {}
        }
    }
    async componentDidMount() {
        if (this.props.doctorIdFromParent) {
            let res = await getEtraInforDoctorById(this.props.doctorIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doctorIdFromParent != prevProps.doctorIdFromParent) {
            let res = await getEtraInforDoctorById(this.props.doctorIdFromParent);
            console.log('check extrainfor', res.data);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }
    ShowHideDetailInfor = (status) => {
        this.setState({
            isShowDetailDoctorInfor: status
        })
    }
    render() {
        let { isShowDetailDoctorInfor, extraInfor } = this.state;
        let { language } = this.props;
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">
                        <FormattedMessage id="patient.extra-doctor-infor.address" />:
                        <span> </span>
                        <span>
                          {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ''}, {extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ''}
                        </span>
                    </div>
                </div>
                <div className="content-down">
                    {isShowDetailDoctorInfor === false &&
                        <div className="short-infor">
                            <FormattedMessage id="patient.extra-doctor-infor.price" />
                            {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI &&
                                <NumberFormat
                                    className="currentcy"
                                    value={extraInfor.priceTypeData.valueVi}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'VND'}
                                />
                            }
                            {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN &&
                                <NumberFormat
                                    className="currentcy"
                                    value={extraInfor.priceTypeData.valueEn}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'$'}
                                />
                            }
                            <button class="price-detail-btn" onClick={() => this.ShowHideDetailInfor(true)}><FormattedMessage id="patient.extra-doctor-infor.detail" /></button>
                        </div>
                    }
                    {isShowDetailDoctorInfor === true &&
                        <>
                            <div className="title-price">
                                <FormattedMessage id="patient.extra-doctor-infor.price" />
                            </div>
                            <div className="detail-infor">
                                <div className="price">
                                    <span className="left"><FormattedMessage id="patient.extra-doctor-infor.price" /></span>
                                    <span className="right">
                                        {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI &&
                                            <NumberFormat
                                                className="currentcy"
                                                value={extraInfor.priceTypeData.valueVi}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                suffix={'VND'}
                                            />
                                        }
                                        {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN &&
                                            <NumberFormat
                                                className="currentcy"
                                                value={extraInfor.priceTypeData.valueEn}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                suffix={'$'}
                                            />
                                        }
                                    </span>
                                </div>
                                <div className="note">
                                    {/* {extraInfor && extraInfor.note ? extraInfor.note : ''} */}
                                </div>
                            </div>
                            <div className="payment">
                                <FormattedMessage id="patient.extra-doctor-infor.payment" />: {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.VI ? extraInfor.paymentTypeData.valueVi : ''}
                                {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.EN ? extraInfor.paymentTypeData.valueEn : ''}
                            </div>
                            <div className="hide-price">
                                <span onClick={() => this.ShowHideDetailInfor(false)}>
                                    <FormattedMessage id="patient.extra-doctor-infor.hide-price" />
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
