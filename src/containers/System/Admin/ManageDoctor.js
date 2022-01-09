import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import './ManageDoctor.scss';
import * as actions from '../../../store/actions';
import './ManageDoctor.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser


// Finish!
import Select from 'react-select';
import { getDetailInforDoctor } from '../../../services/userService';
import { CRUD_ACTIONS } from '../../../utils';


const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedDoctor: '',
            description: '',
            listDoctors: [],
            hasOldData: false,
            listPrice: [],
            listPayment: [],
            listProvince: [],
            selectedPrice: '',
            selectedPayment: '',
            selectedProvince: '',
            nameClinic: '',
            addressClinic: '',
            note: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllDoctors();
        this.props.getAllRequiredDoctorInfor();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buidDataInputSelect(this.props.allDoctors, 'USERS')
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.allRequiredDoctorInfor !== this.props.allRequiredDoctorInfor) {
            let { resPayment, resPrice, resProvince } = this.props.allRequiredDoctorInfor;
            let dataSelectPrice = this.buidDataInputSelect(resPrice);
            let dataSelectPayment = this.buidDataInputSelect(resPayment);
            let dataSelectProvince = this.buidDataInputSelect(resProvince);
            this.setState({
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince
            })
        }
    }
    buidDataInputSelect = (inputData, type) => {
        let result = []
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let label = type === 'USERS' ? `${item.lastName} ${item.firstName}` : item.valueVi;
                object.label = label;
                object.value = item.id;
                result.push(object);
            })
        }
        return result
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
            action: this.state.hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
        })
    }

    handleChange = async (selectedDoctor) => {
        this.setState({ selectedDoctor });
        let res = await getDetailInforDoctor(selectedDoctor.value);
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown;
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false
            })
        }
        console.log(`Option selected:`, res);
    };

    handleOnchangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    render() {
        let { hasOldData } = this.state;
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    <FormattedMessage id="admin.manage-doctor.title" />
                </div>
                <div className="more-infor">
                    <div className="content-left form-group">
                        <label><FormattedMessage id="admin.manage-doctor.select-doctor" /></label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                            placeholder={'Chọn bác sĩ'}
                        />
                    </div>
                    <div className="content-right">
                        <label><FormattedMessage id="admin.manage-doctor.intro" /></label>
                        <textarea className="form-control"
                            onChange={(event) => this.handleOnchangeDescription(event)
                            }
                            value={this.state.description}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="more-infor-extra row">
                    <div className="col-4 form-group">
                        <label >Chọn giá</label>
                        <Select
                            options={this.state.listPrice}
                            placeholder={'Chọn giá'}
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label>Chọn phương thức thanh toán</label>
                        <Select
                            options={this.state.listPayment}
                            placeholder={'Chọn phương thức thanh toán'}
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label>Chọn tỉnh thành</label>
                        <Select
                            options={this.state.listProvince}
                            placeholder={'Chọn tỉnh thành'}
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label>Tên phòng khám</label>
                        <input className="form-control" />
                    </div>
                    <div className="col-4 form-group">
                        <label>Địa chỉ phòng khám</label>
                        <input className="form-control" />
                    </div>
                    <div className="col-4 form-group">
                        <label>Note</label>
                        <input className="form-control" />
                    </div>
                </div>
                <div className="manage-doctor-editer">
                    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} value={this.state.contentMarkdown} />
                </div>
                <button className={hasOldData === true ? "save-button" : "create-content-doctor"} onClick={() => this.handleSaveContentMarkdown()}>{hasOldData === true ? <span>Lưu thông tin</span> : <span>Tạo thông tin</span>}</button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors,
        allRequiredDoctorInfor: state.admin.allRequiredDoctorInfor
    };
};

const mapDispatchToProps = dispatch => {
    return {

        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data)),
        getAllRequiredDoctorInfor: () => dispatch(actions.getAllRequiredDoctorInfor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
