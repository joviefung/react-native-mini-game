import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartButton from './buttons/startButton';
import PlayButton from './buttons/playButton';
import ReloadButton from './buttons/reloadButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isStarted: false,
      isEnded: false,
      reactionTime: -1,
      result: ''
    }
  }

  startGame = () => {
    this.setState({ isStarted: true });
  }

  failed = () => {
    this.setState({
      isEnded: true,
      result: 'You Failed...'
    });
  }

  success = (reactionTime) => {
    this.setState({ 
      reactionTime: reactionTime,
      isEnded: true,
      result: 'Your Reaction Time is ' + reactionTime.toString() + ' ms'
    });
  }

  reload = () => {
    this.setState({
      isStarted: false,
      isEnded: false,
      reactionTime: -1,
      result: ''
    })
  }

  render() {
    button = this.state.isStarted ? 
             <PlayButton onFailed={this.failed} onSuccess={this.success} disabled={this.state.isEnded} /> : 
             <StartButton onPress={this.startGame} />;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            React Mini Game
          </Text>
        </View>
        <View style={styles.content}>
          <Text>How to Play :</Text>
          <Text> </Text>
          <Text>1/ Press Start button</Text>
          <Text>2/ Wait until the button turn to 'Click!' (0-15s)</Text>
          <Text>3/ Click the button asap</Text>
          <View style={styles.button}>
            {button}
          </View>
          {
            this.state.isEnded &&
            <View style={styles.result}>
              <Text style={styles.resultText}>{this.state.result}</Text>
              <View style={styles.button}>
                <ReloadButton onPress={this.reload} />
              </View>
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flex: 4,
    margin: 20,
    alignItems: 'center',
  },
  result: {
    marginTop: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    margin: 20,
    height: 60,
    alignSelf: 'stretch'
  }
});
