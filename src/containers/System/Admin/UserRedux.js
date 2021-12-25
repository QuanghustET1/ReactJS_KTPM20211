import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllcodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";

class UserRedux extends Component {

    // state = {

    // }
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }



    render() {
        let genders = this.state.genderArr;
        let language = this.props.language
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
                                        <label for="inputState">RoleID</label>
                                        <select id="inputState" className="form-control">

                                            <option>Choose</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Image</label>
                                        <input type="text" className="form-control" />
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
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
