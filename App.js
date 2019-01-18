import { Navigation } from "react-native-navigation";

import Home from './src/screens/Home.js';
import DrawBehindStatic from './src/screens/DrawBehindStatic.js';
import DrawBehindDidMount from './src/screens/DrawBehindDidMount.js';
import WithBackgroundImage from './src/screens/WithBackgroundImage';

function registerScreens() {
  Navigation.registerComponent('screens.Home', () => Home);
  Navigation.registerComponent('screens.DrawBehindStatic', () => DrawBehindStatic);
  Navigation.registerComponent('screens.DrawBehindDidMount', () => DrawBehindDidMount);
  Navigation.registerComponent('screens.WithBackgroundImage', () => WithBackgroundImage);
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
              name: 'screens.Home',
            },
          }],
        },
      },
    });
  });
}