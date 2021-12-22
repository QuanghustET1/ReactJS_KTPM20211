import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class UserRedux extends Component {

    // state = {

    // }
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }



    render() {
        return (
            <div className="users-redux-container">
                <div className="title">
                    User Redux by Quang dzai
                </div>
                <div className="user-redux-body">
                    Thêm mới người dùng
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
