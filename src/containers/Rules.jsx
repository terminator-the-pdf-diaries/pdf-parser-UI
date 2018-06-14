import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import partners from '../temp/rules';

class Rules extends Component {

  constructor(props) {
    super(props);
    this.loadPartners = this.loadPartners.bind(this);
    this.state = {
    };
  }

  loadPartners(partners) {
    console.log(partners);
  }
  render() {

    return (
      <div>
        <Row>
          <Col>
            <h2 style={{ paddingTop: '1em' }}>Partnership Rules</h2>
          </Col>
        </Row>
        <Row style={{ padding: '1em' }}>
          {this.loadPartners(partners)}

        </Row>
      </div>
    );
  }
}

export default Rules;
