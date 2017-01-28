import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Account from './components/account';
import SendAmount from './components/send/send';
import RequestAmount from './components/request/request';

import Connections from './components/connections/connections';
import Activity from './components/activity/activityList';
import Settings from './components/settings/settings';

import PublishVendorInfo from './components/publish/vendorInfo';


const RouterComponent = () => {

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="launch">
        <Scene key="account" component={Account} initial={true} title='Coupling Vendors' />

        <Scene key="send">
          <Scene key="sendAmount" component={SendAmount} initial={true} title='Send Amount' />
        </Scene>

        <Scene key="request">
          <Scene key="requestAmount" component={RequestAmount} initial={true} title='Request Amount' />
        </Scene>

        <Scene key="issue">
          <Scene key="publishInfo" component={PublishVendorInfo} initial={true} title='Issue' />
        </Scene>

        <Scene key="connections">
          <Scene key="connectionsInfo" component={Connections} initial={true} title='Connections' />
        </Scene>

        <Scene key="history">
          <Scene key="activityInfo" component={Activity} initial={true} title='Activity' />
        </Scene>

        <Scene key="settings">
          <Scene key="settingsInfo" component={Settings} initial={true} title='Settings' />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
