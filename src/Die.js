import React, { Component } from "react";
import "./Die.css";

const dice = "fas fa-dice-";
class Die extends Component {
  render() {
    let die;
    if (this.props.num == 1) die = `${dice}one`;
    else if (this.props.num == 2) die = `${dice}two`;
    else if (this.props.num == 3) die = `${dice}three`;
    else if (this.props.num == 4) die = `${dice}four`;
    else if (this.props.num == 5) die = `${dice}five`;
    else die = `${dice}six`;
    return <i class={`Die ${die} ${this.props.rolling ? "shaking" : ""}`}></i>;
  }
}

export default Die;
