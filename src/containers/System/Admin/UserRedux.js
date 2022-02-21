import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from "../../../store/actions";
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';

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
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
            action: '',
            userEditId: ''
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let arrGenders = this.props.genderRedux;
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : ''
            })
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let arrRoles = this.props.roleRedux;
            let arrPositions = this.props.positionRedux;
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0] : '',
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0] : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0] : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: ''
            })
        }
    }
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectURL = URL.createObjectURL(file);
            console.log("base64: ", base64)
            this.setState({
                previewImgURL: objectURL,
                avatar: base64
            })
        }
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { action } = this.state;
        // console.log(action);
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editAUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }

    }
    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleEditUserFromParentKey = (user) => {
        let imageBase64 = '';
        if (user.image) {
            // const imageBuffer = Buffer.from(JSON.stringify(user.image))
            // imageBase64 = imageBuffer.toString('base64')
            imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        }
        this.setState({
            email: user.email,
            password: 'HARDCODE',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phonenumber: user.phoneNumber,
            gender: user.gender,
            role: user.roleId,
            position: user.positionId,
            avatar: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,
            previewImgURL: imageBase64
        })
    }



    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let isGenders = this.props.isLoadingGender;
        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state;
        return (
            <div className="users-redux-container">
                <div className="title">
                    User Redux by Quang
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row" style={{ display: "grid" }}>
                            <div className="form-row">
                                <div className="col-12">{isGenders === true ? 'loading genders' : ''}</div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                                        value={email}
                                        onChange={(event) => { this.onChangeInput(event, 'email') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                                        value={password}
                                        onChange={(event) => { this.onChangeInput(event, 'password') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputAddress">First Name</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                                        value={firstName}
                                        onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputAddress2">Last Name</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter your first name"
                                        value={lastName}
                                        onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputCity">Phone Number</label>
                                    <input type="text" className="form-control" id="phone number ..."
                                        value={phoneNumber}
                                        onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                    />
                                </div>
                                <div className="form-group col-md-9">
                                    <label htmlFor="inputZip">Address</label>
                                    <input type="text" className="form-control" id="Adress..."
                                        value={address}
                                        onChange={(event) => { this.onChangeInput(event, 'address') }}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState">Gender</label>
                                    <select id="inputState" className="form-control"
                                        onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                        value={gender}
                                    >
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                        <option>Choose</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState">Position</label>
                                    <select id="inputState" className="form-control"
                                        onChange={(event) => { this.onChangeInput(event, 'position') }}
                                        value={position}
                                    >
                                        {positions && positions.length > 0 &&
                                            positions.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                        <option>Choose</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState">RoleID</label>
                                    <select id="inputState" className="form-control"
                                        onChange={(event) => { this.onChangeInput(event, 'role') }}
                                        value={role}
                                    >
                                        {roles && roles.length > 0 &&
                                            roles.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
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
                                        <label className="label-upload" htmlFor="previewImg">Upload Image<i className="fas fa-upload"></i></label>
                                        <div className="preview-image"
                                            style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                            onClick={() => this.openPreviewImage()}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning save" : "btn btn-primary save"}
                                onClick={() => { this.handleSaveUser() }}
                            >
                                {this.state.action === CRUD_ACTIONS.EDIT ? "Edit" : "Save"}
                            </button>
                            <div className="col-12 mb-5">
                                <TableManageUser
                                    handleEditUserFromParentKey={this.handleEditUserFromParentKey}
                                    action={this.state.action}
                                />
                            </div>
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
        isLoadingGender: state.admin.isLoadingGender,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRolesStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        editAUserRedux: (data) => dispatch(actions.editAUser(data)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
