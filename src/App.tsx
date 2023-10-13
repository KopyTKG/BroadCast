/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import Routes from './Routes';
import config from '../auth0-configuration';
import {SafeAreaView} from 'react-native';
import Components from './styles/global';
import Footer from './components/footer';

function App(): JSX.Element {
  return (
    <SafeAreaView style={Components.body}>
      <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <Routes />
      </Auth0Provider>
      <Footer />
    </SafeAreaView>
  );
}

export default App;
