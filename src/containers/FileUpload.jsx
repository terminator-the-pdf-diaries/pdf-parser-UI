import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Navigation from '../components/navigation';
import Button from '../components/button';
import Input from '../components/input';

import { upload } from '../action';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.submitFiles = this.submitFiles.bind(this);
    this.clearFiles = this.clearFiles.bind(this);
    this.formatFileName = this.formatFileName.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      filesToUpload: [],
      value: null,
      show: false,
      key: Math.random(),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value && !this.state.value) {
      this.setState({ key: Math.random() });
    }
  }

  handleInputChange(value) {
    this.setState({ value });
  }

  onDrop(acceptedFiles) {
    this.setState(prevState => ({
      filesToUpload: prevState.filesToUpload.concat(acceptedFiles),
      show: true,
    }));
    return true;
  }

  formatFileName(fileName) {
    var test_str = "|text to get| Other text.... migh have \"|\"'s ...";
    var start_pos = fileName.indexOf('_') + 1;
    var end_pos = fileName.indexOf('_', start_pos);
    var formattedFileName = fileName.substring(start_pos, end_pos)
    return formattedFileName;
  }

  clearFiles() {
    console.log('clear files here');
    //this.setState({ filesToUpload: [], show: false, value: null, });
  }

  submitFiles(e) {
    console.log('submit files here');

    upload(this.state.filesToUpload);
    // let resolve = () => {
    //     fileSuccessAlert();
    //     this.setState({ filesToUpload: [], show: false, value: null, });
    // };

    // let reject = () => {
    //     fileErrorAlert('Please make sure you are not uploading .doc/.xls/.ppt, legacy documents not allowed');
    //     this.setState({ filesToUpload: [], show: false, });
    // };

    // if (this.state.filesToUpload.length) {
    //     if (!this.state.value) {
    //         noInvestmentAlert();
    //     } else {
    //         return this.uploadFiles(this.state.filesToUpload, this.state.value, resolve, reject);
    //     }
    // }
    // else {
    //     noFilesAlert();
    // }
  }

  uploadFiles(data, investmentNumber, resolve, reject) {
    console.log('upload files here');
    // const newData = new FormData();
    // data.map(file => {
    //     newData.append('files', file);
    // });
    // newData.append('investment_number', investmentNumber);
    // const url = 'docs';
    // return axios.post(url, newData)
    //     .then(res => {
    //         resolve();
    //     })
    //     .catch(err => {
    //         reject();
    //     });
  }

  render() {
    const uploadButtonstyle = {
      color: '#00487c',
      margin: '5em',
    };

    const dropzoneStyles = { paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: 'white', borderWidth: '2px', borderColor: 'rgb(102, 102, 102)', borderStyle: 'dashed', borderRadius: '5px' };

    return (

      <div className='profile-wrapper row'>
        <div className="columns medium-10 large-10" style={{ marginBottom: '1rem' }}>
          <div className="card" style={{ width: '100%', padding: '2rem', margin: '0px', textAlign: 'center', maxWidth: 'none' }}>
            <Dropzone
              accept="image/*, .xls, .xlsx, .doc, .docx, .pdf, .txt, .heic"
              onDrop={this.onDrop.bind(this)}
              style={dropzoneStyles}

            >
              <div>
                <p>Drag and drop files here</p>
                <button className="dull tiny" type="button">
                  Choose File(s)
                                </button>
              </div>
            </Dropzone>
            {this.state.show && <div style={{ paddingTop: '2em' }}>
              <aside>
                <ul style={{ listStyleType: 'none', paddingTop: '1em' }}>
                  {
                    this.state.filesToUpload.map(f => <li key={`${f.name}`}>{this.formatFileName(f.name)} - {f.size} bytes</li>)
                  }
                </ul>
              </aside>
              <Button label={'Terminate'} icon={'icon-upload'} itemOnClick={this.submitFiles} />
              <button className="dull" onClick={this.clearFiles} type="button" style={{ marginLeft: '1em' }}>
                Clear
                            </button>
            </div>}
          </div>
        </div>

      </div>
    );
  }
}


export default FileUpload;
