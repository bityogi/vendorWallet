import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Settings extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default Settings;
