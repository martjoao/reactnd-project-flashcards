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
    })

    this.props.navigation.addListener('willFocus', (payload)=>{
      this.updateDeck();
    });
  }

  updateDeck = async () => {
    if (!this.state.deck.title) return;
    this.setState({
      deck: await DecksApi.getDeck(this.state.deck.title),
    })
  }

  render() {
    const { deck } = this.state;
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
          onPress={() => this.props.navigation.navigate('Quiz', { deck })}
        />

      </View>
    );
  }
}

export default DeckDetails;
