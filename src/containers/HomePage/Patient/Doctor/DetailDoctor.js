import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomeHeader'
import './DetailDoctor.scss';
import { getDetailInforDoctor } from '../../../../services/userService';
import DoctorSchedule from './DoctorSchedule';
import DoctorEtraInfor from './DoctorEtraInfor';
class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: [],
            currentDoctorId: -1
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentDoctorId: id
            })
            let res = await getDetailInforDoctor(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data
                })
            }
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        console.log('quang check state: ', this.state);
        let { detailDoctor } = this.state;
        let Name = '';
        if (detailDoctor && detailDoctor.positionData) {
            Name = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`
        }
        console.log("name: ", Name)
        return (
            <>
                <HomeHeader isShowBanner={false}
                />

                <div className="doctor-detail-container">
                    <div className="intro-doctor">
                        <div
                            className="content-left"
                            style={{ backgroundImage: `url(https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fdoctruyenfull.net%2Fdoc-truyen%2Fsuu-tam-anh-my-amor%2Favatar-couple-dong-vat-652353306.html&psig=AOvVaw0Qjhn8nrxBdJ-O3Kz67lWZ&ust=1641458978476000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKClsrGdmvUCFQAAAAAdAAAAABAE)` }}
                        >
                        </div>
                        <div className="content-right">
                            <div className="up">
                                {Name}
                            </div>
                            <div className="down">
                                {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description &&
                                    <span>
                                        {detailDoctor.Markdown.description}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="schedule-doctor">
                        <div className="content-left">
                            <DoctorSchedule
                                doctorIdFromParent={this.state.currentDoctorId}
                            />
                        </div>
                        <div className="content-right">
                            <DoctorEtraInfor doctorIdFromParent={this.state.currentDoctorId} />
                        </div>
                    </div>
                    <div className="detail-infor-doctor">
                        {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML &&
                            <div dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}>

                            </div>
                        }
                    </div>
                    <div className="comment-doctor">

                    </div>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
