import React, { Component } from 'react';
import Count from '../Count';

export default class Countup extends Component {
  state = {
    currentSecond: 0,
    timeoutId: null,
  }

  increaseSecond = () => this.setState({ currentSecond: this.state.currentSecond + 1 });

  startTimer = () => {
    const timeoutId = setInterval(this.increaseSecond, 1000);
    this.setState({ timeoutId });
  };

  clearTimer = () => {
    clearInterval(this.state.timeoutId);
    this.setState({ timeoutId: null });
  };

  resetTimer = () => this.setState({ currentSecond: 0 });

  isTimerFinished = () => this.state.currentSecond === this.props.target;

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentSecond !== prevState.currentSecond &&
      this.isTimerFinished()
    ) {
      this.clearTimer();
    }
  }

  count = () => {
    // only line different
    const number = this.state.currentSecond;
    const wordSecond = number === 1 ? 'second' : 'seconds';
    return `${number} ${wordSecond}`;
  }

  render() {
    return (
      <Count
        count={this.count()}
        isTimerFinished={this.isTimerFinished()}
        onClickPause={this.clearTimer}
        onClickReset={this.resetTimer}
        onClickStart={this.startTimer}
        title="Countup timer"
        target={this.props.target}
      />
    );
  }
}
