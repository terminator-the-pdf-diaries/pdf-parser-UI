import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { getRules } from '../action';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Table,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import partners from "../temp/rules";

class Rules extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.loadPartners = this.loadPartners.bind(this);
    this.state = {
      rules: null
    };
    dropdownOpen: false;
  }

  componentDidMount() {
    getRules()
      .then(response => {
        this.setState({ rules: response.data });
      })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  loadPartners(partners) {
    console.log(partners);
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2 style={{ color: "#D64E4E", paddingTop: "1em" }}>
              Partnership Rules
            </h2>
          </Col>
        </Row>
        <Row style={{ padding: "1em" }}>
          {
            this.state.rules ? this.state.rules.map(rule => {
              const title = Object.keys(rule)[0];
              const values = rule[title];
              return (
                <Col sm="6">
                  <Card body >
                    <CardTitle className="card-title">{title}</CardTitle>
                    <CardText>
                      <p className="table-headers">Rules</p>
                      <Table size="sm">
                        <thead>
                          <tr>
                            <th>Rule</th>
                            <th>Text</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>start of page</td>
                            <td>{values.Begin_of_Page_Text}</td>
                          </tr>
                          <tr>
                            <td>end of page</td>
                            <td>{values.End_of_Page_Text}</td>
                          </tr>
                          <tr>
                            <td>start of table</td>
                            <td>{values.Begin_of_Table_Text}</td>
                          </tr>
                          <tr>
                            <td>end of table</td>
                            <td>{values.End_of_Table_Text}</td>
                          </tr>
                        </tbody>
                      </Table>
                      <p className="table-headers">Terminology</p>
                      <Table size="sm">
                        <thead>
                          <tr>
                            <th>Partner</th>
                            <th>Northwestern Mutual</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            Object.keys(values.keyword_match).map(key => {
                              return (
                                <tr>
                                  <td>{key}</td>
                                  <td>{values.keyword_match[key]}</td>
                                </tr>
                              );
                            })
                          }
                        </tbody>
                      </Table>
                      <p className="headers-text">
                        Headers:
                        {
                          values.headers.map((header) => {
                            return (
                              <span> {header}, </span>
                            )
                          })}
                      </p>
                    </CardText>
                    <ButtonDropdown
                      isOpen={this.state.dropdownOpen}
                      // toggle={this.toggle}
                      className="rule-button"
                    >
                      <DropdownToggle caret color="info" key={rule}>
                        Edit
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Rules</DropdownItem>
                        <DropdownItem>Keywords</DropdownItem>
                        <DropdownItem>Headers</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </Card>
                </Col>
              )
            }) : null
          }
        </Row>
      </div>
    );
  }
}

export default Rules;
