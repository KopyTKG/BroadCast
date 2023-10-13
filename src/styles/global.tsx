import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from './vars';

const Components = StyleSheet.create({
  header: {
    padding: 10,
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    aspectRatio: 4 / 2,
  },
  body: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingVertical: 10,
    backgroundColor: Colors.lightBlack,
  },
  login: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 300,
    position: 'absolute',
    top: 125,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: Dimensions.get('screen').width - 20,
    height: 40,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    textAlign: 'auto',
    color: Colors.lightWhite,

    backgroundColor: Colors.darkGray,

    borderColor: Colors.darkWhite,
    borderRadius: 10,
    borderWidth: 2,

    alignSelf: 'center',
  },
  nav: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.darkBlack,
    borderBottomWidth: 2,
    borderBottomColor: Colors.darkWhite,
  },
  footer: {
    width: Dimensions.get('screen').width,
    height: 20,
    backgroundColor: Colors.lightBlack,
    position: 'absolute',
    bottom: 80,
    display: 'flex',
    alignItems: 'center',
  },
  footerText: {
    width: 150,
    textAlign: 'center',
  },
  title: {
    width: Dimensions.get('screen').width,
    fontSize: 30,
    height: 'auto',
    textAlign: 'center',
    color: Colors.lightWhite,
  },
  subtitle: {
    color: Colors.lightGray,
    fontSize: 20,
    width: Dimensions.get('screen').width - 100,
    marginHorizontal: 50,
    height: 'auto',
    textAlign: 'center',
  },
  container: {
    maxHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.lightBlack,
    display: 'flex',
    overflow: 'scroll',
  },
  chat: {
    width: Dimensions.get('screen').width - 20,
    minHeight: '80%',
    height: 'auto',
    maxHeight: '82%',

    backgroundColor: Colors.lightBlack,

    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.darkWhite,

    paddingHorizontal: 10,
    paddingTop: 5,
  },
});

const Flex = StyleSheet.create({
  end: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  start: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const Login = StyleSheet.create({
  title: {
    width: Dimensions.get('screen').width,
    textAlign: 'center',
  },
});

export default Components;
export {Flex, Login};
