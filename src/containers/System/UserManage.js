import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/usersManage.scss';
import {getAllUsers} from '../../services/userService';
import ModalUser from './ModalUser';
import { Modal } from 'bootstrap';
class UserManage extends Component {

    // state = {

    // }
    constructor(props){
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            })
        }
    }
    handleAddNewUsers = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className = "title text-center">
                    Manage users with Quang 
                </div>
                <div className = "mx-1">
                    <button
                    className = "btn btn-primary px-3"
                    onClick = {() => this.handleAddNewUsers()}
                    ><i class="fas fa-plus"></i>Add New User</button>
                </div>
                <div className = "users-table mt-3 mx-2">
                <table id="customers">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                        {
                            arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button class = "btn-edit"><i className="fas fa-pen-square"></i></button>
                                        <button class  = "btn-delete"><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                            })
                        }
                    </table>
                </div>
                <ModalUser
                
                isOpen = {this.state.isOpenModalUser}
                toggleFromParent = {this.toggleUserModal}
                />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
