/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {Colors} from './vars';

const Types = StyleSheet.create({
    success: {
        backgroundColor:  Colors.darkGreen,
        borderWidth: 2,
        borderColor: Colors.lightBlack,
        color: Colors.lightBlack,
    },
    warning: {
        backgroundColor: Colors.darkOrange,
        borderWidth: 2,
        borderColor: Colors.lightBlack,
        color: Colors.lightBlack,
    },
    danger: {
        backgroundColor: Colors.darkRed,
        borderWidth: 2,
        borderColor: Colors.lightWhite,
        color: Colors.lightWhite,
    },
    primary: {
        backgroundColor: Colors.darkBlue,
        borderWidth: 2,
        borderColor: Colors.lightWhite,
        color: Colors.lightWhite,
    },
    secondary: {
        backgroundColor: Colors.darkWhite,
        borderWidth: 2,
        borderColor: Colors.darkBlack,
        color: Colors.darkBlack,
    },
});

const Sizes = StyleSheet.create({
    smaller: {
        width: 50,
        fontSize: 12,
    },
    small: {
        width: 75,
        fontSize: 15,
    },
    medium: {
        width: 100,
        fontSize: 18,
    },
    large: {
        width: 135,
        fontSize: 22,
    },
    larger: {
        width: 170,
        fontSize: 26,
    },
    x_large: {
        width: 210,
        fontSize: 30,
    },
});

export { Types, Sizes };
