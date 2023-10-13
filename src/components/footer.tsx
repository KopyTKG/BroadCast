import React from 'react';
import {Linking, Text, View} from 'react-native';
import Components from '../styles/global';
import {version} from '../../package.json';

export default function Footer() {
  return (
    <View style={Components.footer}>
      <Text
        onPress={() => {
          Linking.openURL('https://thekrew.app');
        }}
        style={Components.footerText}>
        ({version}) &copy; thekrew.app {new Date().getFullYear()}
      </Text>
    </View>
  );
}
