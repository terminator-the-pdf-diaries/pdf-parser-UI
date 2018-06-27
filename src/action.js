import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000/api/";


function upload(data) {
  const newData = new FormData();
  data.forEach(file => {
    newData.append("files[]", file, file.fileName);
  });

  const url = baseUrl + 'upload';
  return axios.post(url, newData);

};

function getTransaction(id) {
  const url = baseUrl + 'transaction/' + id;
  return axios.get(url)
}

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

export { upload, getRules, getRule, getTransaction }
