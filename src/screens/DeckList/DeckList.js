import React from 'react';
import { Text, View } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';


class DeckList extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>You are on DeckList</Text>
      </View>
    );
  }
}

export default DeckList;
