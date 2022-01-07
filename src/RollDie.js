import React, { Component } from "react";
import Die from "./Die";
import "./RollDie.css";

class RollDie extends Component {
  constructor(props) {
    super(props);
    this.state = { number1: 5, number2: 5, rolling: false };
    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({
      number1: Math.floor(Math.random() * 6) + 1,
      number2: Math.floor(Math.random() * 6) + 1,
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div class="RollDie">
        <Die num={this.state.number1} rolling={this.state.rolling} />
        <Die num={this.state.number2} rolling={this.state.rolling}  />
        <div>
          <button onClick={this.change} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Roll Die!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDie;
