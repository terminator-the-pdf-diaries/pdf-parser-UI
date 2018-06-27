import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Button } from "reactstrap";
import PDFViewer from "./PDFViewer";

import { upload } from "../action";
import ResultTable from "./Table";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.submitFiles = this.submitFiles.bind(this);
    this.clearFiles = this.clearFiles.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      filesToUpload: [],
      value: null,
      show: false,
      key: Math.random(),
      result: {}
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
      show: true
    }));
    return true;
  }


  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  clearFiles() {
    this.setState({ filesToUpload: [], show: false, value: null, result: {} });
  }

  submitFiles() {
    upload(this.state.filesToUpload)
      .then(response => {
        this.setState({ result: response.data })
      });
  }

  render() {
    const uploadButtonstyle = {
      color: "#00487c",
      margin: "5em"
    };

    const dropzoneStyles = {
      padding: "2rem",
      backgroundColor: "white",
      borderWidth: "2px",
      borderColor: "rgb(102, 102, 102)",
      borderStyle: "dashed",
      borderRadius: "5px"
    };

    return (
      <div>
        <div className="row">
          <div
            className="medium-6 large-6"
            style={{ margin: "0 auto", padding: "20px" }}
          >
            <div className="Upload-box">
              <Dropzone
                accept="image/*, .xls, .xlsx, .doc, .docx, .pdf, .txt, .heic"
                onDrop={this.onDrop.bind(this)}
                style={dropzoneStyles}
              >
                <div>
                  <p>Drag and drop files here</p>
                  <Button outline color="secondary" type="button">
                    Choose File(s)
                  </Button>
                </div>
              </Dropzone>
              {this.state.show && (
                <div style={{ paddingTop: "2em" }}>
                  <aside>
                    <ul style={{ listStyleType: "none", paddingTop: "1em" }}>
                      {this.state.filesToUpload.map(f => (
                        <li key={`${f.name}`}>
                          {f.name} - {f.size} bytes
                        </li>
                      ))}
                    </ul>
                  </aside>
                  <Button
                    outline
                    color="secondary"
                    onClick={this.submitFiles}
                  >
                    Terminate
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    onClick={this.clearFiles}
                    type="button"
                    style={{ marginLeft: "1em" }}
                  >
                    Clear
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/*  */}
        </div>
        <div className="row" style={{ padding: "40px" }} >
          {
            Object.keys(this.state.result).length > 0 ?
              this.state.result.map(data => {
                return (
                  <div
                    className="col-sm-6"
                    style={{ "marginTop": "30px" }}
                  >
                    <div className="card card-body" >
                      <ResultTable data={data} />
                    </div>
                  </div>
                )
              }) : null
          }
        </div>
      </div>
    );
  }
}

export default FileUpload;
