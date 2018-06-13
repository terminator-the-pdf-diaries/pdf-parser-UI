import urlJoin from 'url-join';
import axios from 'axios';

var _baseURL;

// Note - the UI's web server is expecting a proxy to the api for _path.   For developer purposes, the proxy location is setup in the webpack.config.js dev_server section.
var _path = '/api';

//show or hide loading modal based on event property
// const toggleModal = progressEvent => {
//     if (progressEvent.lengthComputable) {
//       if (progressEvent.loaded === progressEvent.total) {
//         helpers.hide_modal('loading-modal');
//       } else {
//         helpers.show_modal('loading-modal');
//       }
//     }
//   };
  //axios.defaults.onUploadProgress = toggleModal;

// initialize axios instance
const _axiosInstance = axios.create({ baseURL: _path });

// two ways to import, either as a default or as an "axios" module
export { _axiosInstance as axios }; // import axios from '../helpers/axios';

export { _axiosInstance as default };  // import {axios} from '../helpers/axios';
