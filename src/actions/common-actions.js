import * as Types from './action-types';

export function failedAsyncCall(err, message) {
    return {
        type: Types.REQ_FAIL,
        error: err,
        errorMessage: message
    };
}

export function clearError() {
    return {
        type: Types.CLEAR_ERROR
    };
}
