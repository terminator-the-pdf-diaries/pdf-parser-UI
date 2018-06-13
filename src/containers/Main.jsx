import React, { Component } from 'react';
import Navigation from '../components/navigation';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        const { router, userFirstName, userLastName } = this.props;
            return (
                <div className='grid-container nm-cx-theme'>
                    <Navigation/>
                </div>
            );
    }
}

const mapStateToProps = state => {

    return {
        userFirstName: state.User.givenName,
        userLastName: state.User.familyName
    };
};


export default Main;
