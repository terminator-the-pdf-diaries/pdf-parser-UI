import React, { Component } from 'react';

export default class Button extends Component {

    render() {
        const {
            itemSize,
            itemClass,
            label,
            icon,
            itemOnClick,
            itemDisabled,
            itemId,
            colorContext
      } = this.props;

        return (

            <button
                type='button'
                className={'button ' + itemClass + ' ' + itemSize + ' ' + colorContext}
                id={itemId}
                onClick={itemOnClick}
                disabled={itemDisabled}
            >
                <span className={'button-icon icon ' + icon} ></span> &nbsp; &nbsp;

          {label}

            </button>

        );
    }
}
