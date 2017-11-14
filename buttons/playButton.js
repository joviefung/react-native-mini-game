import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PlayButton extends React.Component {
  constructor() {
    super();
    this.state = {
      canClick: false,
      waitTime: this.randomTime(),
      startTime: 0,
      endTime: 0
    }
    setTimeout(() => {
      this.setState({ 
        canClick: true,
        startTime: new Date()
     })
    }, this.state.waitTime);
  }

  randomTime() {
    return Math.round(Math.random() * 5000);
  }

  success = () => {
    endTime = new Date();
    this.props.onSuccess(endTime.getTime() - this.state.startTime.getTime());
  }

  render() {
    waitButton = 
      <Button
        title="Wait..."
        color="#f4d742"
        onPress={this.props.onFailed}
        disabled={this.props.disabled}
      />;
    clickButton = 
      <Button
        title="CLICK!"
        color="#3bb235"
        onPress={this.success}
        disabled={this.props.disabled}
      />;
    if (this.state.canClick) {
        return clickButton;
    } else {
        return waitButton;
    }
  }
}