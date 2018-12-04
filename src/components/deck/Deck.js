import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Deck extends React.PureComponent {

  // shouldComponentUpdate(nextProps) {
  //   return this.props.deck.title !== nextProps.deck.title ||
  //     this.props.deck.questions.length !== nextProps.deck.questions.length
  // }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <View style={styles.contentContainer}>
          <Text>{this.props.deck.title}</Text>
          <Text>{`${this.props.deck.questions.length} Card(s)`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  onPress: PropTypes.func,
};

Deck.defaultProps = {
  onPress: () => {},
};

export default Deck;
