import React, { Component } from "react";
import { Button, Col, Row } from "antd";

export default class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  spliter = () => {
    if (this.props.currentQuestion) {
      const inputs = this.props.currentQuestion.body;
      const lengtOfBody = inputs?.length;
      const offsetOfString = lengtOfBody % 4;
      const inputsArray = [];
      const distance = (lengtOfBody - offsetOfString) / 4;

      for (let i = 0; i < 4; i++) {
        inputsArray.push(inputs.substring(i * distance, (i + 1) * distance));
      }

      return inputsArray;
    }
    return ["", "", "", ""];
  };

  render() {
    const inputs = this.spliter();
    return (
      <>
        <div className="holder">
          <span>
            {this.props.stage === 10 ? this.props.stage : this.props.stage + 1}
            .Soru
          </span>
          <span style={{ float: "right", marginRight: 20 }}>
            Süre {this.props.second}
          </span>
          <p>
            {this.props.currentQuestion && this.props.currentQuestion.title}
          </p>
          <div className="choose-area">
            <Col>
              <Row gutter={5} style={{ padding: 5 }}>
                <Col span={12}>
                  <Button
                    type={
                      this.props.currentSelection === "A"
                        ? "primary"
                        : "default"
                    }
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("A")}
                    className="selection-button"
                  >
                    A) {inputs[0]}
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    type={
                      this.props.currentSelection === "B"
                        ? "primary"
                        : "default"
                    }
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("B")}
                    className="selection-button"
                  >
                    B) {inputs[1]}
                  </Button>
                </Col>
              </Row>
              <Row gutter={5} style={{ padding: 5 }}>
                <Col span={12}>
                  <Button
                    type={
                      this.props.currentSelection === "C"
                        ? "primary"
                        : "default"
                    }
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("C")}
                    className="selection-button"
                  >
                    C) {inputs[2]}
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    type={
                      this.props.currentSelection === "D"
                        ? "primary"
                        : "default"
                    }
                    disabled={this.props.choosingEnable}
                    onClick={() => this.props.onSelectionChange("D")}
                    className="selection-button"
                  >
                    D) {inputs[3]}
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
