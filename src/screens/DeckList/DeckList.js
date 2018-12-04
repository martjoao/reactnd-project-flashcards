import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import { FlatList, StatusBar } from 'react-native-gesture-handler';
import Deck from '../../components/deck/Deck';


class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
    }
  }

  updateDeckList = async () => {
    const decks = await DecksApi.getDecksArray();
    this.setState({ decks });
  }

  componentDidMount() {
    this.updateDeckList();
    this.props.navigation.addListener('willFocus', (payload)=>{
      this.updateDeckList();
    });
  }

  render() {
    console.log(this.state.decks)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.deckList}
          data={this.state.decks}
          renderItem={({item}) => <Deck deck={item} key={item.title} />}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={
            () => <View style={styles.deckSeparator}/>
          }
        />
      </SafeAreaView>
    );
  }
}

export default DeckList;
