import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import Button from '../../components/button/Button';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', (payload)=>{
      this.setState({ titleInput: '' })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of the new deck?</Text>

        <TextInput
          style={styles.titleInput}
          value={this.state.titleInput}
          onChangeText={text => this.setState({ titleInput: text })}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPress={() => {
              DecksApi.createDeck(this.state.titleInput);
              this.props.navigation.navigate('Decks');
            }}
          />
        </View>

      </View>
    );
  }
}

export default DeckForm;
