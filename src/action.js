import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000/api/";

function upload(data, fileName) {
  const newData = new FormData();
  newData.append('files', data[0])
  newData.append('fileName', fileName);

  const url = baseUrl + 'upload';
  return axios.post(url, newData);

};

function getRules() {
  const url = baseUrl + 'rules'
  return axios.get(url);
};

async function getRule(id) {
  const url = baseUrl + 'rules/' + id;
  try {
    const response = await axios.get(url);
    return response
  } catch (error) {
    throw new Error(error);
  }
};

export { upload, getRules, getRule }
