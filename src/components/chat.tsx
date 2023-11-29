/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
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
  const ws = useRef<WebSocket>();
  useEffect(() => {
    ws.current = new WebSocket('ws://192.168.107.187:8080/ws');
    ws.current.onopen = () => {
      const data = {
        type: 'joined',
        id: props.user.sub,
        name: props.user.nickname,
      };
      ws.current?.send(JSON.stringify(data));
    };

    return () => {
      ws.current?.close();
    };
  }, [props.user.nickname, props.user.sub]);

  useEffect(() => {
    if (!ws.current) {
      return;
    }
    ws.current.onmessage = event => {
      const data = JSON.parse(event.data);
      setChat([...chatData, data]);
    };
  });

  const options: any = {hour: '2-digit', minute: '2-digit'};
  let viewRef: any = useRef();
  async function sendMessage(data: string) {
    setChat([
      ...chatData,
      {
        type: 'message',
        id: props.user.sub,
        name: props.user.nickname,
        message: data,
        date: new Date(),
      },
    ]);

    const msg = {
      type: 'message',
      id: props.user.sub,
      name: props.user.nickname,
      message: data,
      date: new Date(),
    };
    ws.current?.send(JSON.stringify(msg));
    setMessage('');
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
            chatData.map((item: any, index: number) =>
              item.type == 'message' ? (
                <View key={index}>
                  <Text
                    style={[
                      Chat.message,
                      props.user.sub == item.id
                        ? Messages.user
                        : Messages.other,
                    ]}>
                    {item.message}
                  </Text>
                  <View
                    style={[
                      Chat.desc,
                      props.user.sub == item.id
                        ? Descriptions.left
                        : Descriptions.right,
                    ]}>
                    <Text style={{width: '55%'}}>{item.name}</Text>
                    <Text style={{width: '45%'}}>
                      {new Date(item.date).toLocaleTimeString(
                        undefined,
                        options,
                      ) +
                        ' ' +
                        new Date(item.date).toLocaleDateString()}
                    </Text>
                  </View>
                </View>
              ) : item.type == 'joined' || item.type == 'left' ? (
                <Text key={index} style={[Chat.system]}>
                  User {item.name} {item.type} the chat room.
                </Text>
              ) : null,
            )
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
