import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import Button from '../../components/button/Button';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Card Form</Text>
      </View>
    );
  }
}

export default CardForm;
