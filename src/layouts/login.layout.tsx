import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Components from '../styles/global';
import {Sizes, Types} from '../styles/button';
function LoginLayout(props: any) {
  return (
    <SafeAreaView>
      <View style={[Components.login]}>
        <Text style={Components.title}>BroadCast</Text>
        <Text style={Components.subtitle}>One room for all chat app</Text>
        <Pressable onPress={() => props.login()}>
          <Text style={[Types.primary, Sizes.large, Components.button]}>
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default LoginLayout;
