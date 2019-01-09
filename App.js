import { Navigation } from "react-native-navigation";

import Foo from './src/screens/Foo.js';
import Bar from './src/screens/Bar.js';
import Baz from './src/screens/Baz.js';

function registerScreens() {
  Navigation.registerComponent('screens.Foo', () => Foo);
  Navigation.registerComponent('screens.Bar', () => Bar);
  Navigation.registerComponent('screens.Baz', () => Baz);
}

export const start = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'TEST',
          children: [{
            component: {
              name: 'screens.Foo',
            },
          }],
        },
      },
    });
  });
}