import React, { PureComponent } from 'react';
import { Navigation } from "react-native-navigation";
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class Home extends PureComponent {
  static options() {
    return {
      topBar: {
        visible: false,
      },
      layout: {
        backgroundColor: 'blue',
      },
    };
  }

  constructor(props) {
    super(props);

    this.pushDrawBehindStatic = this.pushDrawBehindStatic.bind(this);
    this.pushDrawBehindComponentMount = this.pushDrawBehindComponentMount.bind(this);
    this.showModalDrawBehindComponentMount = this.showModalDrawBehindComponentMount.bind(this);
    this.pushWithImage = this.pushWithImage.bind(this);
  }

  pushWithImage() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'screens.WithBackgroundImage',
      },
    });
  }

  showModalDrawBehindComponentMount() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'screens.DrawBehindDidMount',
          },
        }],
      },
    });
  }

  pushDrawBehindStatic() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'screens.DrawBehindStatic',
      },
    });
  }

  pushDrawBehindComponentMount() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'screens.DrawBehindDidMount',
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
          onPress={this.pushDrawBehindStatic}
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text>Push Screen Static Draw Behind (Works)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.pushDrawBehindComponentMount}
          style={{
            backgroundColor: 'green',
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text>Push Screen CompDidMoun Draw Behind (Does Not Work)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.showModalDrawBehindComponentMount}
          style={{
            backgroundColor: 'purple',
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text>ShowModal CompDidMoun Draw Behind (Works)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.pushWithImage}
          style={{
            backgroundColor: 'red',
            padding: 10,
          }}
        >
          <Text>Press Here To Push Screen With background Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}