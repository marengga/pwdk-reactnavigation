import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Satu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Halaman Satu!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('HalDua')}
          title="Buka Halaman Dua" />
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
