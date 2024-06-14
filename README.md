# Term2_Compitition_Application_2024
 This is the repo for our term 2 application term project. For this project we were tasked with creating a compitition application of any kind. 

## Content

- [Code Used](#code-used)
- [Design Software Used](#design-software-used)
- [prerequisite](#prerequisite)
- [How to Setup the App](#how-to-install-and-setup)

## Code Used 

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

## Design Software used

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

# prerequisite

for this project you will need
1. visualStudio Code ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
2. to install [nodeJs](https://nodejs.org/en) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
3. to have expo or expoGo app on your phone - download for app store or google play store ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
4. firebase acount and a database setup ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

# How to Install and Setup

> Note[warning]
> do this if you dont want the newest temeplete that uses typscript as defualt !Apparently!

other wize do normal istallation

```
npx create-expo-app app-name
```

1. 1st you after installing Node.js and Vs-code you want to set up you app - (in your vs terminal)

```
npx create-expo-app@latest --template blank@sdk-50
```

then change the app name or just press enter for "app-name"

2. 2nd Change your directory to current working folder

```
cd app-name
```

3. 3rd You want to update the Current SDK version of expo to the most recent one

```
npm install expo@latest
```

4. 4th To start your application 

```
npm start
```

this is used for the default install method

```
npx expo start
```

## Inserting SVGs into your app

https://dev.to/gautham495/how-to-use-svgs-in-react-native-37n9 

```
npm i react-native-svg
npm i react-native-svg-transformer
```
> to install these packages

https://docs.expo.dev/ui-programming/using-svgs/ 

```
    import Logo from './assets/logo.svg';

    <Logo width={120} height={40} />;
```



# To Update your React-Nativ 

```
    # {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff
    npm install react-native@{{VERSION}}
    npm install react@{{REACT_VERSION}}
```

Otherwise Use these

For the status bar
```
    npm install expo-status-bar@~1.12.1
```

For React-Nativ
```
    npm install react-native@0.74.1
```

# Style Sheet

```
const styles = StyleSheet.create({
    container:{
        
    }
})
```

# Shadow Generator
this is a shadow generator for react native 
> goes into the stylesheet object

https://ethercreative.github.io/react-native-shadow-generator/ 

## ISetting Up Images

```
<Image
    style={styles.icon32}
    source={require('../icons/menuIcon02.png')}
/>
```
## Props dependency For inner shadow

https://www.npmjs.com/package/prop-types

```
npm install --save prop-types
```

## Inner shadow npm

https://www.npmjs.com/package/react-native-inset-shadow?activeTab=readme 

```
npm i react-native-inset-shadow
```

### Usage

```
import InsetShadow from 'react-native-inset-shadow'
import { Text, View } from 'react-native' 
 
const ViewWithInsetShadow = () => {
  return (
    <View style={{ height: 150 }}>
      <InsetShadow>
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Text>This view has an inset shadow!</Text>
        </View>
      </InsetShadow>
    </View>
  )
}
```

# Setting Up SVGs

### npm install

```

```

## Importing 
import this code to use the svgs you import 
Just remember to change all the tags to a capital letter

```
// SVG
import Svg, {
  Circle,
  Ellipse,
  G,
  // Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
```

Then Use you SVG

remember to capitalise

```
<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32} color={"#000000"} fill={"none"} {...props}>
    <Path d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <Path d="M13.6267 12.9186C13.4105 12.1205 12.3101 11.4003 10.9892 11.9391C9.66829 12.4778 9.45847 14.2113 11.4565 14.3955C12.3595 14.4787 12.9483 14.2989 13.4873 14.8076C14.0264 15.3162 14.1265 16.7308 12.7485 17.112C11.3705 17.4932 10.006 16.8976 9.85742 16.0517M11.8417 10.9927V11.7531M11.8417 17.2293V17.9927" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</Svg>
```

## To set Up Navgation 

This is the video that helped me sort out my navigation issues with using bothe stack and tab navigation

https://www.youtube.com/watch?v=s7ackFpN-GU&t=18s 

## Drag 'n Drop Function
docs to a drac an drop method

https://gist.github.com/himanshu717171/b70794816b36b1de41d8dd679e17aba5 

A Blog
https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0

# Firebase

Expo install
```
npx expo install firebase
```

npm install

```
npm install firebase
```

## Firestore

```
npm i @firebase/firestore
```

for native

```
npm i @react-native-firebase/firestore
```

# Date Picker

Native install
```
npm i react-native-date-picker
```