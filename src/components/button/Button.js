import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Button extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
