import React, { Component } from "react";
import { Button, Col, Row } from "antd";
export default class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectiona: "asdad",
      selectionb: "zzxczxc",
      selectionc: "qweqe",
      selectiond: "hjghj",
    };
  }

  render() {
    return (
      <>
        <div className="holder">
          <span>{this.props.stage + 1}.Soru</span><span>{this.props.second}</span>
          <p>soru ne olduğu</p>
          <div className="choose-area">
            <Col>
              <Row gutter={5} style={{ padding: 5 }}>
                <Col span={12}>
                  <Button
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("A")}
                    className="selection-button"
                  >
                    A) {this.state.selectiona}
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("B")}
                    className="selection-button"
                  >
                    B) {this.state.selectionb}
                  </Button>
                </Col>
              </Row>
              <Row gutter={5} style={{ padding: 5 }}>
                <Col span={12}>
                  <Button
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("C")}
                    className="selection-button"
                  >
                    C) {this.state.selectionc}
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("D")}
                    className="selection-button"
                  >
                    D) {this.state.selectiond}
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      </>
    );
  }
}
