import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Publish extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Publish Coupons</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default Publish;
