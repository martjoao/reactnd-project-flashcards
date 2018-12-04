import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Button extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          this.props.style,
          this.props.color && { backgroundColor: this.props.color },
        ]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  color: undefined,
}

export default Button;
