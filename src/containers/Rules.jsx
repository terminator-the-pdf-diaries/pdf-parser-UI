import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
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
    this.state = {};
    dropdownOpen: false;
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
          {this.loadPartners(partners)}
          <Col sm="6">
            <Card body>
              <CardTitle className="card-title">Arbys</CardTitle>
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
                      <td>For the Year</td>
                    </tr>
                    <tr>
                      <td>start of table</td>
                      <td>Remaining Commitment</td>
                    </tr>
                    <tr>
                      <td>end of page</td>
                      <td>Proprietary Confidential Business Information</td>
                    </tr>
                    <tr>
                      <td>end of table</td>
                      <td>Opening Equity</td>
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
                    <tr>
                      <td>Total Contributions</td>
                      <td>Contributions</td>
                    </tr>
                    <tr>
                      <td>Total Distributions</td>
                      <td>Distributions</td>
                    </tr>
                    <tr>
                      <td>Realized Gain/(Loss)</td>
                      <td>Realized Gain/Loss</td>
                    </tr>
                    <tr>
                      <td>Professional Fees</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Change in Unrealized</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Professional Fees</td>
                      <td>Unrealized MTM</td>
                    </tr>
                    <tr>
                      <td>Idle Funds Interest Income</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Equity Transfer"</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Closing Equity</td>
                      <td>Ending Equity Balance</td>
                    </tr>
                  </tbody>
                </Table>
                <p className="headers-text">
                  Headers: Total Fund, Investor's Allocation
                </p>
              </CardText>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                className="rule-button"
              >
                <DropdownToggle caret color="info">
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
          <Col sm="6">
            <Card body>
              <CardTitle>Wing Stop</CardTitle>
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
                      <td>For the Year</td>
                    </tr>
                    <tr>
                      <td>start of table</td>
                      <td>Remaining Commitment</td>
                    </tr>
                    <tr>
                      <td>end of page</td>
                      <td>Proprietary Confidential Business Information</td>
                    </tr>
                    <tr>
                      <td>end of table</td>
                      <td>Opening Equity</td>
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
                    <tr>
                      <td>Total Contributions</td>
                      <td>Contributions</td>
                    </tr>
                    <tr>
                      <td>Total Distributions</td>
                      <td>Distributions</td>
                    </tr>
                    <tr>
                      <td>Realized Gain/(Loss)</td>
                      <td>Realized Gain/Loss</td>
                    </tr>
                    <tr>
                      <td>Professional Fees</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Change in Unrealized</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Professional Fees</td>
                      <td>Unrealized MTM</td>
                    </tr>
                    <tr>
                      <td>Idle Funds Interest Income</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Equity Transfer"</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Closing Equity</td>
                      <td>Ending Equity Balance</td>
                    </tr>
                  </tbody>
                </Table>
                <p className="headers-text">
                  Headers: Total Fund, Investor's Allocation
                </p>
              </CardText>

              <ButtonDropdown className="rule-button">
                <DropdownToggle caret color="info">
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
        </Row>
        <Row>
          {" "}
          <Col sm="6">
            <Card body>
              <CardTitle>TGI Fridays</CardTitle>
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
                      <td>For the Year</td>
                    </tr>
                    <tr>
                      <td>start of table</td>
                      <td>Remaining Commitment</td>
                    </tr>
                    <tr>
                      <td>end of page</td>
                      <td>Proprietary Confidential Business Information</td>
                    </tr>
                    <tr>
                      <td>end of table</td>
                      <td>Opening Equity</td>
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
                    <tr>
                      <td>Total Contributions</td>
                      <td>Contributions</td>
                    </tr>
                    <tr>
                      <td>Total Distributions</td>
                      <td>Distributions</td>
                    </tr>
                    <tr>
                      <td>Realized Gain/(Loss)</td>
                      <td>Realized Gain/Loss</td>
                    </tr>
                    <tr>
                      <td>Professional Fees</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Change in Unrealized</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Professional Fees</td>
                      <td>Unrealized MTM</td>
                    </tr>
                    <tr>
                      <td>Idle Funds Interest Income</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Equity Transfer"</td>
                      <td>Ordinary Income</td>
                    </tr>
                    <tr>
                      <td>Closing Equity</td>
                      <td>Ending Equity Balance</td>
                    </tr>
                  </tbody>
                </Table>
                <p className="headers-text">
                  Headers: Total Fund, Investor's Allocation
                </p>
              </CardText>
              <ButtonDropdown className="rule-button">
                <DropdownToggle caret color="info">
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
        </Row>
      </div>
    );
  }
}

export default Rules;
