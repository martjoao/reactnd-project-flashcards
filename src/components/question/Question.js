import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Question extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.card != this.props.card) {
      this.setState({ showAnswer: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          {this.props.card.question}
        </Text>

        <TouchableOpacity
          style={styles.toggleAnswer}
          onPress={() => this.setState({ showAnswer: !this.state.showAnswer })}
        >
          <Text>
            {this.state.showAnswer ? 'Hide Answer' : 'Show Answer'}
          </Text>
        </TouchableOpacity>

        {this.state.showAnswer &&
          <Text style={styles.question}>
            {this.props.card.answer}
          </Text>
        }
      </View>
    );
  }
}

Question.propTypes = {
  card: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
};

Question.defaultProps = {
  onPress: null,
};

export default Question;
