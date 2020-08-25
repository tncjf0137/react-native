import React, { Component } from 'react';
import { StyleSheet, Button, View, Image, Text } from 'react-native';


class Chopper extends Component {
  render() {
    let chop = '';
    if (this.props.type === 'one') {
      chop = require(`./assets/c1.png`);

    }
    else if (this.props.type === 'two') {
      chop = require('./assets/c2.jpg');
    }
    return (
      <View>
        <Image source={chop} style={{ width: 100, height: 100 }}></Image>

      </View >
    )
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }

  }
  writeAddress = () => {
    this.setState({
      address: '성남 분당구'
    })
  }
  reset = () => {
    this.setState({
      address: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Chopper:yummy</Text>
        <Chopper type='one' />
        <Chopper type='two' />
        <Text>{this.state.address}</Text>
        <Button title={'나의 주소출력'} onPress={this.writeAddress} />
        <Button title={'reset'} onPress={this.reset} />

      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
//git error