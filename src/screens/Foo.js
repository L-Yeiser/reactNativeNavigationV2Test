import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class Foo extends PureComponent {
  static options() {
    return {
      topBar: {
        visible: false,
      },
      backgroundImage: require('../../assets/images/authBackground.png'),
    };
  }

  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.push = this.push.bind(this);

    this.state = {
      foo: 'purple',
    }
  }

  showModal() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'screens.Bar',
          },
        }],
      },
    });
  }

  push() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'screens.Bar',
      },
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={this.showModal}
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text>Press Here To View Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => this.setState({ foo: 'green' })}
          onPress={this.push}
          style={{
            backgroundColor: 'green',
            padding: 10,
          }}
        >
          <Text>Press Here To Push Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}