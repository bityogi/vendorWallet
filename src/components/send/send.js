import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Send extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Send</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default Send;
