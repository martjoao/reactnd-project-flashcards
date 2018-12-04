import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import Button from '../../components/button/Button';

class DeckDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Deck Details</Text>
      </View>
    );
  }
}

export default DeckDetails;
