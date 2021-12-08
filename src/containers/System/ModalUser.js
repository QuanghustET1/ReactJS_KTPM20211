import { ModalBody, ModalFooter, ModalHeader, Button, Modal } from "reactstrap";
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
    toggle = () =>{
        alert('cc')
    }

    render() {
        return (
            <Modal isOpen = {true} toggle = {()=>{this.toggle()}} className = {'abcclassName'}>
            <ModalHeader toggle = {()=>{this.toggle()}}>Modal title</ModalHeader>
            <ModalBody>
                nkjnjnscnknckjn
                ackdjcnaknckasnc
                kdjckasjcjasnckjasnck
                jfkwjfkjwnk
                kjkfnkjwnf
                jfbkejbjknc
                jbkjfkjjenkfnw
                kfjkfkjwndkjqnwdkn
                kejfkqndkndkjnqwdmnxkndkawnd
            </ModalBody>
            <ModalFooter>
                <Button color = "primary" onClick = {()=>{this.toggle()}}>Do something</Button>{' '}
                <Button color = "secondary" onClick = {()=>{this.toggle()}}>Cancel</Button>
            </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
