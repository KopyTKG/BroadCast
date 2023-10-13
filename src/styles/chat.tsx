import {StyleSheet} from 'react-native';
import {Colors} from './vars';

const Chat = StyleSheet.create({
  message: {
    width: 300,
    minHeight: 20,
    borderColor: Colors.lightWhite,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  desc: {
    width: 300,
    height: 20,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

const Messages = StyleSheet.create({
  user: {
    backgroundColor: Colors.darkBlue,
    color: Colors.lightWhite,
    alignSelf: 'flex-start',
  },
  other: {
    backgroundColor: Colors.lightGray,
    color: Colors.darkBlack,
    alignSelf: 'flex-end',
  },
});

const Descriptions = StyleSheet.create({
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});

export {Messages, Descriptions};
export default Chat;
