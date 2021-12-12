import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/usersManage.scss';
import {getAllUsers, createNewUserService, deleteUserService, editUserService} from '../../services/userService';
import ModalUser from './ModalUser';
import { Modal } from 'bootstrap';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

    // state = {

    // }
    constructor(props){
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact();
    }
    getAllUserFromReact = async() => {
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
    toggleEditUserModal = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if(response && response.errCode !== 0){
                alert(response.errMessage);
            }
            else{
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (e) {
            console.log(e)
        }
    }
    handleDeleteUser = async(user) => {
        try {
            let res = await deleteUserService(user.id);
            if(res && res.errCode === 0){
                await this.getAllUserFromReact();
            }
            else{
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e);
        }
    }
    handleEditUser = (user) => {
        console.log('oke', user)
        this.setState({
            isOpenEditUser: true,
            userEdit: user
        })
    }
    doEditUser = async(user) => {
        try {
            let res = await editUserService(user);
            if(res && res.errCode === 0){
                this.setState({
                    isOpenEditUser: false
                })
                await this.getAllUserFromReact(); // refresh lại tất cả user 
            }
            else{
                alert(res.errMessage);
            }
        } catch (e) {
            console.log(e);
        }
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
                    <tbody>
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
                                        <button className = "btn-edit" onClick={() => this.handleEditUser(item)}><i className="fas fa-pen-square"></i></button>
                                        <button className  = "btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <ModalUser
                
                isOpen = {this.state.isOpenModalUser}
                toggleFromParent = {this.toggleUserModal}
                createNewUser = {this.createNewUser}
                />
                {this.state.isOpenEditUser &&
                <ModalEditUser
                isOpen = {this.state.isOpenEditUser}
                toggleFromParent = {this.toggleEditUserModal}
                currentUser = {this.state.userEdit}
                EditUser = {this.doEditUser}
                // createNewUser = {this.createNewUser}
                />
                }
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
