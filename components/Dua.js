import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Dua extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Halaman Dua!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('HalSatu')}
          title="Buka Halaman Satu" />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Kembali ke Halaman Sebelumnya" />
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
