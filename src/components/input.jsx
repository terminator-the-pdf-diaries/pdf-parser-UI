import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.itemValue ? this.props.itemValue : '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.itemOnBlur(event.target.value);
    }

    render() {
        const {
            itemSize,
            itemLabel,
            itemId,
            itemDisabled,
            itemValue,
            itemOnBlur,
            itemType,
            onValueChange
    } = this.props;


        return (
            <div >

                <input ref="formItemInput" type={itemType || 'text'} id={itemId} required={itemLabel} disabled={itemDisabled} defaultValue={itemValue} onBlur={this.handleChange} value={itemValue} />

                <label htmlFor={itemId} onClick={() => { this.refs.formItemInput.focus(); }}>{itemLabel}</label>
            </div>

        );
    }

}
