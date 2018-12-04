import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { Button } from '../../components/button';
import { Question } from '../../components/question';
import { shuffle } from '../../utils/array';

import { setLocalNotification, clearLocalNotification } from '../../utils/notifications'

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: 0,
      incorrect: 0,
      questions: [{}],
      currentQuestion: 0,
    }
  }

  componentDidMount() {
    this.setupQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    const len = this.state.questions.length;
    const cur = this.state.currentQuestion;
    if (len > 0 && cur === len && prevState.currentQuestion === len - 1) {
      // If finished a quiz, clar current notifications and set a new one for next day
      clearLocalNotification();
      setLocalNotification();
    }

  }

  setupQuiz = () => {
    const deck = this.props.navigation.getParam('deck', {});
    const questions = shuffle(deck.questions);

    this.setState({
      correct: 0,
      incorrect: 0,
      questions,
      currentQuestion: 0,
    })
  }

  renderQuiz = () => {
    if (this.state.currentQuestion < this.state.questions.length) {
      return (
        <View>
          <Question card={this.state.questions[this.state.currentQuestion]}/>

          <Button
            style={styles.button}
            title="Correct"
            color="#77ff77"
            onPress={() => this.setState({
              correct: this.state.correct + 1,
              currentQuestion: this.state.currentQuestion + 1,
            })}
          />
          <Button
            style={styles.button}
            title="Incorrect"
            color="#ff7777"
            onPress={() => this.setState({
              incorrect: this.state.incorrect + 1,
              currentQuestion: this.state.currentQuestion + 1,
            })}
          />
          <Text style={styles.score}>
            {`${this.state.currentQuestion+1}/${this.state.questions.length}`}
          </Text>
        </View>
      );
    }
  }

  renderQuizSummary = () => {
    if (this.state.currentQuestion >= this.state.questions.length) {
      return (
        <View>
          <Text style={styles.title}>Quiz Finished</Text>
          <Text style={styles.subtitle}>{`Your score is ${this.state.correct}/${this.state.questions.length}`}</Text>
          <Button
            style={styles.button}
            title="Start Over"
            onPress={this.setupQuiz}
          />
          <Button
            style={styles.button}
            title="Return to Deck Screen"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderQuiz()}
        {this.renderQuizSummary()}
      </View>
    );
  }
}

export default Quiz;
