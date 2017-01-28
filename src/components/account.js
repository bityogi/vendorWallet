import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressIndicator from 'react-native-progress-indicator';

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
      snapshotLabelStyles,
      subMenuStyles,
      transactionStyles,
      balanceStyle,
      transactionList,
      subText,
      labelLeft,
      labelRight,
      smallFont
    } = styles;

    const {
      issued,
      forSale,
      inCirculation,
      redeemed

    } = this.props.vendorSnapshot;

    const forSalePercent = (forSale / issued );
    const inCirculationPercent = (inCirculation / issued);
    const redeemedPercent = ((issued - forSale) / redeemed);

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
            <View>
              <View style={snapshotLabelStyles}>
                <Text style={[labelLeft, smallFont]}>For Sale ({forSale})</Text>
                <Text style={[labelRight, smallFont]}>{issued}</Text>
              </View>
              <ProgressIndicator
                progress={forSalePercent}
                progressTintColor= '#21464A'
              />
            </View>

            <View>
              <View style={snapshotLabelStyles}>
                <Text style={[labelLeft, smallFont]}>In Circulation ({inCirculation})</Text>
                <Text style={[labelRight, smallFont]}>{issued}</Text>
              </View>
              <ProgressIndicator
                progress={inCirculationPercent}
                progressTintColor= '#21464A'
              />
            </View>
            <View>
              <View style={snapshotLabelStyles}>
                <Text style={[labelLeft, smallFont]}>Redeemed ({ redeemed})</Text>
                <Text style={[labelRight, smallFont]}>{issued - forSale}</Text>
              </View>
              <ProgressIndicator
                progress={redeemedPercent}
                progressTintColor= '#21464A'
              />
            </View>



          </View>

          <View style={subMenuStyles}>
            <View style={subMenuButtons}>
              <Icon name='send' size={25} color='#21464A' onPress={() => Actions.issue()} />
              <Text style={smallFont}>Publish</Text>
            </View>
            <View style={subMenuButtons}>
              <Icon name='link' size={25} color='#21464A' onPress={() => Actions.connections()} />
              <Text style={smallFont}>Connections</Text>
            </View>
            <View style={subMenuButtons}>
              <Icon name='list' size={25} color='#21464A' onPress={() => Actions.history()} />
              <Text style={smallFont}>History</Text>
            </View>
            <View style={subMenuButtons}>
              <Icon name='cog' size={25} color='#21464A' onPress={() => Actions.settings()} />
              <Text style={smallFont}>Settings</Text>
            </View>




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
    padding: 2
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
    flex: 6,
    justifyContent: 'space-around',
  },
  labelLeft: {
    flex: 1,
  },
  labelRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  smallFont: {
    fontSize: 10
  },
  snapshotLabelStyles: {
    flexDirection: 'row'
  },
  subMenuStyles: {
    flex: 2,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  subMenuButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
