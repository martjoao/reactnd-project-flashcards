import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import { Deck } from '../../components/deck';
import { Button } from '../../components/button';

class DeckDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        questions: [],
      },
    };
  }

  componentDidMount() {
    this.setState({
      deck: this.props.navigation.getParam('deck', {}),
    });

    this.props.navigation.addListener('willFocus', (payload)=>{
      this.updateDeck();
    });
  }

  updateDeck = async () => {
    const param = this.props.navigation.getParam('deck', {});
    if (!param.title) return;
    const deck = await DecksApi.getDeck(param.title);
    this.setState({ deck });
  }

  render() {
    const { deck } = this.state;
    const quizDisabled = this.state.deck.questions.length === 0;
    return (
      <View style={styles.container}>
        <Deck deck={deck} />
        <Button
          style={styles.button}
          title="Add Card"
          onPress={() => this.props.navigation.navigate('CardForm', { deck })}
        />
        <Button
          style={styles.button}
          title="Start Quiz"
          onPress={() => {
            this.props.navigation.navigate('Quiz', { deck })
          }}
          disabled={quizDisabled}
        />
        {quizDisabled &&
          <Text>You cannot start a quiz with an empty deck</Text>
        }

      </View>
    );
  }
}

export default DeckDetails;
