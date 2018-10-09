import React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Lima from "./components/Lima";
import Enam from "./components/Enam";

const RootDrawerNav = createDrawerNavigator(
  {
    HalLima: {
      screen: Lima,
      navigationOptions: ({ navigation }) => ({
        title: "Halaman Lima"
      })
    },
    HalEnam: {
      screen: Enam,
      navigationOptions: ({ navigation }) => ({
        title: "Halaman Enam"
      })
    }
  },
  {
    initialRouteName: "HalLima"
  }
);

export default class App extends React.Component {
  render() {
    return <RootDrawerNav />;
  }
}
