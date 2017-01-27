import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Request extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Request</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default Request;
