import {Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;
/**constants used in app */
const constants = {
    screenWidth,
    screenHeight
 } 
 export default constants;