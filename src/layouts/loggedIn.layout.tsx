import React from 'react';
import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import Components from '../styles/global';
import {Sizes, Types} from '../styles/button';
import {Nav} from '../styles/nav';
import ChatComp from '../components/chat';
function MainLayout(props: any) {
  return (
    <SafeAreaView>
      <View style={[Components.nav]}>
        <View style={Nav.box}>
          <Text style={Nav.user}>{props.user.nickname}</Text>
          <Image
            source={{
              uri: props.user.picture
                ? props.user.picture
                : 'https://placekitten.com/300/300',
            }}
            style={Nav.icon}
          />
        </View>
        <Pressable onPress={() => props.logout()}>
          <Text style={[Components.button, Types.secondary, Sizes.small]}>
            Logout
          </Text>
        </Pressable>
      </View>
      <ChatComp user={props.user} />
    </SafeAreaView>
  );
}
export default MainLayout;
