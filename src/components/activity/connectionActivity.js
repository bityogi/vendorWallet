import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ConnectionActivity extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Connection Activity</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default ConnectionActivity;
