import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'home'
        };
    }

    componentDidMount() {
        // get current path and set selected
        // let currentPath = this.props.router.location.pathname.replace('/', '');
        // // give path '/' a path of home
        // if (currentPath.length === 0) {
        //     currentPath = 'upload';
        // }
        // this.setState({
        //     selected: currentPath
        // });
    }

    onChange(e) {
        this.setState({
            selected: e
        });
    }

    _checkActive(elementId) {
        // if current selected button has the same class names, return class name with active flag
        if (elementId === this.state.selected) {
            return 'tab-title active';
        } else {
            return 'tab-title';
        }
    }

    render() {
        return (
            <header>
                <div className='header-container container'>
                    <a href='/'>
                        <h5 className='right'><span className='icon icon-sysicon-maleavatar icon-left-text' style={{ 'fontSize': '20px' }}></span>Hello, {this.props.userFirstName}</h5>
                    </a>
                </div>
                <div className='nav-bar container'>
                    <nav className='bg-nm'>
                        {/* <ul className='tabs ghost'>
                            <Link to='/upload'><li className={this._checkActive('upload')}><button id='upload' onClick={e => this.onChange(e.target.id)}>Upload</button></li></Link>
                        </ul> */}
                    </nav>
                </div>
            </header>

        );
    }
}
