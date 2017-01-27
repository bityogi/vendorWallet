import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


import RecentActivityList from './activity/activityList';
import { getBalanceSnapshot } from '../actions';

class Account extends Component {

  componentWillMount() {
    this.props.getBalanceSnapshot();
  }

  render() {

    const {
      subMenuButtons,
      menuButtons,
      headerText,
      container,
      headerStyles,
      balanceBarStyles,
      snapshotStyles,
      subMenuStyles,
      transactionStyles,
      balanceStyle,
      transactionList,
      subText
    } = styles;

    const snapshotData = [
      {
        'name' : 'For Sale',
        'amount' : this.props.vendorSnapshot.forSale
      },
      {
        'name' : 'In Circulation',
        'amount' : this.props.vendorSnapshot.inCirculation
      },
      {
        'name' : 'Redeemed',
        'amount' : this.props.vendorSnapshot.redeemed
      }];


    const pieChartOptions = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    };

    return (
      <View style={container}>
        <View style={headerStyles}>
            <Icon
              style={menuButtons}
              name='arrow-circle-o-up'
              size={20} color='#21464A'
              onPress={() => Actions.send()}
            />

            <Icon
              style={menuButtons}
              name='arrow-circle-o-down'
              size={20} color='#21464A'
              onPress={() => Actions.request()}
            />
          </View>

          <View style={balanceBarStyles}>
            <Text>Available:</Text>
            <Text style={balanceStyle}>{this.props.vendorSnapshot.available} </Text>
          </View>

          <View style={snapshotStyles}>
            
          </View>

          <View style={subMenuStyles}>
            <Icon style={subMenuButtons} name='send' size={30} color='#21464A' onPress={() => Actions.issue()} />
            <Icon style={subMenuButtons} name='link' size={30} color='#21464A' onPress={() => Actions.connections()} />
            <Icon style={subMenuButtons} name='list' size={30} color='#21464A' onPress={() => Actions.history()} />
            <Icon style={subMenuButtons} name='cog' size={30} color='#21464A' onPress={() => Actions.settings()} />
          </View>

          <View style={transactionStyles}>
            <Text style={subText}>Recent Activity: </Text>
            <RecentActivityList style={transactionList} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    borderWidth: 1,
    backgroundColor: '#CFE2E4',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
  },
  headerStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 2,
    position: 'relative'
  },
  menuButtons: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#2D676D',
    borderRadius: 2,
    padding: 5
  },
  balanceStyle : {
    fontSize: 40
  },
  balanceBarStyles: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#9FC3C7',
    marginBottom: 2,
    marginLeft: 1,
    marginRight: 1
  },
  snapshotStyles: {
    flex: 6
  },
  subMenuStyles: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  subMenuButtons: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
    borderColor: '#2D676D',
    borderRadius: 2,
  },
  transactionStyles: {
    flex: 14,
    justifyContent: 'flex-start'
  },

  transactionList : {

  },
  subText : {
    padding: 4
  }
});

const mapStateToProps = (state) => {
  return { vendorSnapshot: state.vendorSnapshot }
}

export default connect(mapStateToProps, { getBalanceSnapshot })(Account);
