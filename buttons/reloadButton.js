import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReloadButton extends React.Component {
  render() {
    return (
      <Button
        title="Play Again"
        color="#2196F3"
        onPress={this.props.onPress}
      />
    );
  }
}