import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class StartButton extends React.Component {
  render() {
    return (
      <Button
        title="Start"
        color="#e53454"
        onPress={this.props.onPress}
      />
    );
  }
}