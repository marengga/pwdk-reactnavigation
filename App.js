import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import Tiga from "./components/Tiga";
import Empat from "./components/Empat";

// Ternary Operator
// [condition] ? [true] : [false]

const RootTabNav = createBottomTabNavigator(
  {
    HalTiga: {
      screen: Tiga,
      navigationOptions: ({ navigation }) => ({
        title: "Halaman Tiga",
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused
              ? require("./images/home-active.png")
              : require("./images/home.png")}
            style={{ width: 28, height: 28 }}
          />
        )
      })
    },
    HalEmpat: {
      screen: Empat,
      navigationOptions: ({ navigation }) => ({
        title: "Halaman Empat",
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused
              ? require("./images/tools-active.png")
              : require('./images/tools.png')}
            style={{ width: 28, height: 28 }}
          />
        )
      })
    }
  },
  {
    initialRouteName: "HalTiga"
  }
);

export default class App extends React.Component {
  render() {
    return <RootTabNav />;
  }
}
