import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class WithBackgroundImage extends PureComponent {
  static options() {
    return {
      backgroundImage: require('../../assets/images/authBackground.png'),
      topBar: {
        background: {
          color: 'transparent',
          translucent: true,
        },
        drawBehind: true,
      },
    };
  }

  render() {
    return (
      <View />
    );
  }
}