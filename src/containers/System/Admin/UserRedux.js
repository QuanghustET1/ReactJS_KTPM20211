import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {

    // state = {

    // }
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectURL = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectURL
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }




    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let isGenders = this.props.isLoadingGender;
        return (
            <div className="users-redux-container">
                <div className="title">
                    User Redux by Quang dzai
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row" style={{ display: "grid" }}>
                            <form>
                                <div className="form-row">
                                    <div className="col-12">{isGenders === true ? 'loading genders' : ''}</div>
                                    <div className="form-group col-md-3">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputAddress">First Name</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputAddress2">Last Name</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Enter your first name" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="inputCity">Phone Number</label>
                                        <input type="text" className="form-control" id="phone number ..." />
                                    </div>
                                    <div className="form-group col-md-9">
                                        <label for="inputZip">Address</label>
                                        <input type="text" className="form-control" id="Adress..." />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="inputState">Gender</label>
                                        <select id="inputState" className="form-control">
                                            {genders && genders.length > 0 &&
                                                genders.map((item, index) => {
                                                    return (
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                            <option>Choose</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputState">Position</label>
                                        <select id="inputState" className="form-control">
                                            {positions && positions.length > 0 &&
                                                positions.map((item, index) => {
                                                    return (
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                            <option>Choose</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputState">RoleID</label>
                                        <select id="inputState" className="form-control">
                                            {roles && roles.length > 0 &&
                                                roles.map((item, index) => {
                                                    return (
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                            <option>Choose</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Image</label>
                                        <div className="preview-img-container">
                                            <input id="previewImg" type="file" hidden
                                                onChange={(event) => { this.handleOnchangeImage(event) }}
                                            />
                                            <label className="label-upload" htmlFor="previewImg">Upload Image<i class="fas fa-upload"></i></label>
                                            <div className="preview-image"
                                                style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                                onClick={() => this.openPreviewImage()}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div> */}
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRolesStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
