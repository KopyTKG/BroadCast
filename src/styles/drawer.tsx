/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './vars';

const Drawer = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBlack ,
        width: Dimensions.get('screen').width-80,
        height: Dimensions.get('screen').height,
        borderColor: Colors.darkWhite,
        borderRightWidth: 2,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        width: Dimensions.get('screen').width-80,
        textAlign: 'center',
        borderColor: Colors.lightGray,
        borderBottomWidth: 2,
    },
    scroller: {
        marginTop: 5,
    },
    record: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderBottomColor: Colors.darkGray,
        borderBottomWidth: 1,
    },

    user: {
        fontSize: 18,
        borderColor: Colors.darkGray,
        borderRightWidth: 1,
        width: 80,
        height: 30,
        overflow: 'hidden',
        textAlign: 'left',
    },
    date: {
        fontSize: 18,
        textAlign: 'center',

    },
    time: {
        fontSize: 18,
        borderColor: Colors.darkGray,
        borderLeftWidth: 1,
        width: 100,
        textAlign: 'center',
    },

});

export { Drawer };
