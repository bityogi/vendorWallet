import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ActivityList extends Component{

  render() {
    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text>Activity List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default ActivityList;
