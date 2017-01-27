import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EarningActivity extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Earning Activity</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default EarningActivity;
