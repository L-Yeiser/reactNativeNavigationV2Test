import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class DrawBehindStatic extends PureComponent {
  static options() {
    return {
      layout: {
        backgroundColor: 'purple',
      },
      topBar: {
        buttonColor: 'black',
        background: {
          transparent: true,
          color: 'transparent',
        },
        drawBehind: true,
        title: {
          text: 'Title',
          color: 'blue',
        },
      },
    };
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'red',
        }}
      />
    );
  }
}