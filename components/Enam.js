import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Enam extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Halaman Enam!</Text>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Buka Drawer" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
