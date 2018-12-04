import React from 'react';
import { View, SafeAreaView } from 'react-native';
import * as DecksApi from '../../data/decks';

import { FlatList } from 'react-native-gesture-handler';
import Deck from '../../components/deck/Deck';
import { setLocalNotification } from '../../utils/notifications'
import styles from './styles';


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
    // On app mount, set local notification if it isn't set
    setLocalNotification();

    this.updateDeckList();

    // When coming back from another page, reload decks
    this.props.navigation.addListener('willFocus', (payload)=>{
      this.updateDeckList();
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.deckList}
          data={this.state.decks}
          renderItem={({item}) => (
            <Deck
              deck={item}
              key={item.title}
              onPress={() => this.props.navigation.navigate('DeckDetails', { deck: item })}
            />
          )}
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
