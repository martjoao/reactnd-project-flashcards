import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as DecksApi from '../../data/decks';

import styles from './styles';
import commonStyles from '../../common/styles';
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
          style={[commonStyles.textInput, styles.titleInput]}
          value={this.state.titleInput}
          onChangeText={text => this.setState({ titleInput: text })}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPress={async () => {
              await DecksApi.createDeck(this.state.titleInput);
              this.props.navigation.navigate('DeckDetails', { deck: await DecksApi.getDeck(this.state.titleInput)});
            }}
          />
        </View>

      </View>
    );
  }
}

export default DeckForm;
