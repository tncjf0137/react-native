import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';

type Props = {};
class Chopper extends Component {
  render() {
    return (
      <View>
        <Image source={require(`./assets/c2.jpg`)} style={{ width: 100, height: 100 }}></Image>

      </View>
    )
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Chopper:yummy</Text>
        <Chopper></Chopper>

      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});