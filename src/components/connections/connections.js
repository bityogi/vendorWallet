import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Connections extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Vendor Connections</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default Connections;
