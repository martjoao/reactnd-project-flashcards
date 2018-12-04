import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import commonStyles from '../../common/styles';

import { Button } from '../../components/button';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionInput: '',
      answerInput: '',
    };
  }

  render() {
    const deck = this.props.navigation.getParam('deck', {});

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Question"
          style={[commonStyles.textInput, styles.input]}
          value={this.state.questionInput}
          onChangeText={text => this.setState({ questionInput: text })}
        />

        <TextInput
          placeholder="Answer"
          style={[commonStyles.textInput, styles.input]}
          value={this.state.answerInput}
          onChangeText={text => this.setState({ answerInput: text })}
        />

        <Button
          title="Submit"
          onPress={async () => {
            await DecksApi.addCardToDeck(deck.title, {
              question: this.state.questionInput,
              answer: this.state.answerInput,
            });
            this.props.navigation.goBack();
          }}
        />


      </View>
    );
  }
}

export default CardForm;
