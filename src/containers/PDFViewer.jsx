import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

export default class PDFViewer extends Component {
  state = {
    numPages: null,
    pages: [],
  }

  onDocumentLoad = ({ numPages }) => {
    let pages = [];
    for (let i = 0; i < numPages; i++) {
      pages.push(i + 1);
    }
    this.setState({
      numPages,
      pages,
    });
  }

  renderPage = () => {
    let result = [];
    if (this.state.numPages) {
      for (var i = 0; i < this.state.numPages; i++) {
        let component = <Page pageNumber={i + 1} />
        result.push(component)
      }
    }
    return result;
  }

  render() {
    const { pages } = this.state;
    return (
      <div className="Pdf-box">
        <Document
          file={this.props.file}
          onLoadSuccess={this.onDocumentLoad}
        >
          {
            pages.length > 0 ? pages.map(page => {
              return (
                <div key={page}>
                  <Page pageNumber={page} scale={0.8} />
                  <p> Page {page} of {pages.length}</p>
                </div>
              )
            }) : null
          }

        </Document>

      </div>
    );
  }
}
