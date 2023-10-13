import {StyleSheet} from 'react-native';
import {Colors} from './vars';

const Nav = StyleSheet.create({
  box: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.lightWhite,
    backgroundColor: Colors.darkGray,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'center',
  },
  user: {
    color: Colors.lightWhite,
    width: 100,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export {Nav};
