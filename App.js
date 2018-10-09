import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Satu from './components/Satu';
import Dua from './components/Dua';

const RootStackNav = createStackNavigator(
  {
    HalSatu: {
      screen: Satu,
      navigationOptions: ({ navigation }) => ({
        title: 'Halaman Satu'
      }),
    },
    HalDua: {
      screen: Dua,
      navigationOptions: ({ navigation }) => ({
        title: 'Halaman Dua',
      }),
    },
  },
  {
    initialRouteName: 'HalSatu'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStackNav />
    );
  }
}
