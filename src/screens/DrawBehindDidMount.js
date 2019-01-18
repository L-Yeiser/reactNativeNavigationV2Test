import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class DrawBehindDidMount extends PureComponent {
  componentDidMount() {
    Navigation.mergeOptions(
      this.props.componentId,
      {
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
      }
    )
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