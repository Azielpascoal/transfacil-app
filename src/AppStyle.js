import React from 'react';
import { Platform, Dimensions, I18nManager } from 'react-native';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const colorSet ={
    

};
const backgroundColorSet ={
  
};
const imageSet={
    logo:require('./assets/image/logo1.png'),
    PreloadIm :require('./assets/image/preload.gif'),
    LoginIm :require('./assets/image/login.png'),
   

};
const iconSet = {
   
};
const fontSet = {
    xxlarge: 40,
    xlarge: 30,
    large: 25,
    middle: 20,
    normal: 16,
    small: 13,
    xsmall: 11,
    title: 30,
    content: 20,
  };
  const StyleDict = {
    imageSet,
    backgroundColorSet,
    iconSet,
    colorSet,
    fontSet,
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
  };
  
  export default StyleDict;