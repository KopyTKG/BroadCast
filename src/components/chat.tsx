/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Components from '../styles/global';
import Chat, {Descriptions, Messages} from '../styles/chat';

function ChatComp(props: any) {
  const [message, setMessage] = React.useState<string>('');

  const [chatData, setChat] = useState<any>([]);

  const options: any = {hour: '2-digit', minute: '2-digit'};
  let viewRef: any = useRef();
  async function sendMessage(data: string) {
    setMessage('');
    setChat([
      ...chatData,
      {
        user: props.user.nickname,
        sub: props.user.sub,
        message: data,
        time: new Date(),
      },
    ]);

    console.log(`sending message: ${data}`);
  }
  return (
    <>
      <KeyboardAvoidingView
        style={Components.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 40}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          style={Components.chat}
          ref={viewRef}
          onContentSizeChange={() =>
            viewRef.current.scrollToEnd({animated: false})
          }>
          {chatData.length === 0 ? (
            <Text style={{width: '100%', textAlign: 'center'}}>
              No messages found
            </Text>
          ) : (
            chatData.map((item: any, index: number) => (
              <View key={index}>
                <Text
                  style={[
                    Chat.message,
                    props.user.sub == item.sub ? Messages.user : Messages.other,
                  ]}>
                  {item.message}
                </Text>
                <View
                  style={[
                    Chat.desc,
                    props.user.sub == item.sub
                      ? Descriptions.left
                      : Descriptions.right,
                  ]}>
                  <Text style={{width: '55%'}}>{item.user}</Text>
                  <Text style={{width: '45%'}}>
                    {item.time.toLocaleTimeString(undefined, options) +
                      '  ' +
                      item.time.toLocaleDateString()}
                  </Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>
        <TextInput
          value={message}
          onChangeText={setMessage}
          style={Components.input}
          placeholder="Enter your message"
          onSubmitEditing={() => sendMessage(message)}
        />
      </KeyboardAvoidingView>
    </>
  );
}

export default ChatComp;
