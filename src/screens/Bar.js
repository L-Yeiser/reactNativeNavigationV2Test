import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class Bar extends PureComponent {
  render() {
    return (
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'blue',
        }}
      />
    );
  }
}