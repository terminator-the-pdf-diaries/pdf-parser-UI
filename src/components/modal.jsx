import React, { PropTypes, Component } from 'react';
import Spinner from './spinner';
import helpers from '../helpers/utils.js';

export default class ModalSpinner extends Component {
    render() {
        const {
            modalId = 'loading-modal',
            size
        } = this.props;
        
        return (
            <div id={modalId} className={'reveal-overlay'} >
                <div id={modalId} className="modal-content-loading">
                    <span className={'loading-indicator ' + size} />
                    {this.props.children}
                </div>
            </div>
        );
    }
}