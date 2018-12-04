import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import Button from '../../components/button/Button';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz</Text>
      </View>
    );
  }
}

export default Quiz;
