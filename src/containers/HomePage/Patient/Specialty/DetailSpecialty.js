import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import HomeHeader from '../../HomeHeader';

class DefaultClass extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }
    render() {

        return (
            <div>
                {/* <HomeHeader /> */}
                <div>Manage Specialty</div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
