import React, { PropTypes } from 'react'; // Presenter Note: Required even if we're not using the `React` object
import { Router, Route, browserHistory } from 'react-router';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { spinnerId, size, itemClass } = this.props;
        return (
            <div id={spinnerId} className={itemClass}>
                <span className={'loading-indicator ' + size} />
                {this.props.children}

            </div>
        );
    }
}
export default Spinner;