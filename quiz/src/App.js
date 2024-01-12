import "./App.css";
import axios, { HttpStatusCode } from "axios";
import QuizPage from "./components/QuizPage";
import React, { Component } from "react";
import { Button } from "antd";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allDataFromAPI: "",
      currentSelection: "",
      resultMap: new Map(),
      questionsMap: new Map(),
      second: 0,
      choosingEnable: true,
      stage: 0,
    };
  }

  timer = () => {
    const interval = setInterval(() => {
      if (this.state.stage <= 9) {
        this.setState({ second: this.state.second + 1 }, () => {
          if (this.state.second >= 10 && this.state.choosingEnable) {
            this.setState({
              choosingEnable: false,
            });
          } else if (this.state.second >= 15) {
            this.setState({
              second: 0,
              choosingEnable: true,
              stage: this.state.stage + 1,
            });
          }
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  setResultMap = (index, answer) => {
    let tempMap = { ...this.state.resultMap };
    tempMap.set(index, answer);
    this.setState({
      resultMap: tempMap,
    });
  };

  initializeQuestions = () => {
    let rawQuestions = [...this.state.allDataFromAPI];
    let indexOfQuestion = 0;

    while (this.state.questionsMap.size < 10) {
      const dataForCurrentIndex = rawQuestions.filter(
        (x) => x.userId === indexOfQuestion + 1
      );

      const randomized = Math.floor(Math.random() * 10);
      const datum = dataForCurrentIndex[randomized];

      let tempQuestionMap = this.state.questionsMap;
      tempQuestionMap.set(indexOfQuestion, datum);
      this.setState({
        questionsMap: tempQuestionMap,
      });

      indexOfQuestion++;
    }
  };

  componentWillMount = () => {
    this.getQuestions(this.initializeQuestions);
    this.timer();
  };
  getQuestions = (callback) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((response) => {
        if (response.status === HttpStatusCode.Ok) {
          console.log(response);
        }
        let data = response.data;

        this.setState(
          {
            allDataFromAPI: data,
          },
          () => {
            callback();
          }
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onSelectionChange = (selection) => {
    console.log(selection);
    this.setState({ currentSelection: selection });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: "white" }}>Quiz</h1>
          <QuizPage
            currentQuestion={this.state.questionsMap.get(this.state.stage)}
            stage={this.state.stage}
            second={this.state.second}
            choosingEnable={this.state.choosingEnable}
            currentSelection={this.state.currentSelection}
            onSelectionChange={this.onSelectionChange}
          />
          <Button disabled={this.state.choosingEnable}>Next Question</Button>
        </header>
      </div>
    );
  }
}
