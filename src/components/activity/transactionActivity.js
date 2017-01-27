import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TransactionActivity extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Transaction Activity</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default TransactionActivity;
