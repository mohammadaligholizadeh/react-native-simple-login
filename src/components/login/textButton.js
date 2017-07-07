import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'

export default class TextButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={this.props.containerStyle}
        accessibilityTraits="button"
        accessibilityComponentType="button">
        {
          this.props.children || <Text style={this.props.style}>{this.props.text}</Text>
        }
      </TouchableOpacity>
    );
  }
}
