import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Button from '../components/button';
import PDFViewer from './PDFViewer';

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

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  clearFiles() {
    this.setState({ filesToUpload: [], show: false, value: null, });
  }

  submitFiles() {
    upload(this.state.filesToUpload);
  }




  render() {
    const uploadButtonstyle = {
      color: '#00487c',
      margin: '5em',
    };

    const dropzoneStyles = { padding: '2rem', backgroundColor: 'white', borderWidth: '2px', borderColor: 'rgb(102, 102, 102)', borderStyle: 'dashed', borderRadius: '5px' };

    return (
      <div>
        <div className='row'>
          <div className="medium-6 large-6" style={{ margin: '0 auto', padding: "20px" }}>
            <div className="Upload-box" >
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
          {
            false ? (<div className="medium-6 large-6" style={{ margin: '0 auto', padding: "20px" }}>
              <div className="Upload-box" >

              </div>
            </div>) : null
          }
        </div>
        <div className="row">
          <div className="medium-12 large-12" style={{ margin: '0 auto', padding: "5px" }}>
            {
              (this.state.filesToUpload.length > 0) ?
                <PDFViewer file={this.state.filesToUpload[0]} /> : null
            }
          </div>
        </div>
      </div >
    );
  }
}


export default FileUpload;
