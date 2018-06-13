import axios from '../helpers/axios';

import * as Types from './action-types';
import { failedAsyncCall } from './common-actions';

// Document
export function reqDocuments() {
    return {
        type: Types.REQ_DOCUMENTS
    };
}

export function recvDocuments(data) {
    return {
        type: Types.RECV_DOCUMENTS,
        playload: data
    };
}

export function addDocument() {
    return {
        type: Types.ADD_DOCUMENT
    };
}

export function fetchDocuments(cb) {
    return dispatch => {

        const url = 'doc';

        dispatch(reqDocuments());

        return axios.get(url)
            .then(res => dispatch(recvDocuments(res)))
            .then(() => cb())
            .catch(err => dispatch(failedAsyncCall(err, 'Failed to load user')));
    };

}

export function addDocuments(data, investmentNumber, resolve, reject) {

    return dispatch => {

        const newData = new FormData();
        data.map(file => {
            newData.append('files', file);
        });
        newData.append('investment_number', investmentNumber);

        const url = 'docs';
        return axios.post(url, newData)
            .then(res => {
                dispatch(addDocument());
                resolve();
            })
            .catch(err => {
                dispatch(failedAsyncCall(err, 'Failed to load user'));
                reject();
            });
    };

}
