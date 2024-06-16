<img src='Readme-Assets\Banner.png'/>

# Term2_Compitition_Application_2024
 This is the repo for our term 2 application term project. For this project we were tasked with creating a compitition application of any kind. 

<h3 align="center">Farmlands</h3>

<h5 align="center" style="padding:0;margin:0;">Ungerer Hattingh</h5>
<h5 align="center" style="padding:0;margin:0;">221302</h5>
<h6 align="center">DV300 Term 2 2024</h6>

# Licensing 
>Note: [warning]
> This app is my own app and I reserve all rights 

# Demo Video of app

Here is the `demo video` that showcases the app in its current state

[Video](https://drive.google.com/drive/folders/1DczZS54wT2f32Re7YhVHRwPufeDWTxII?usp=drive_link) Link


## Content

- [Code Used](#code-used)
- [Design Software Used](#design-software-used)
- [prerequisite](#prerequisite)
- [How to Setup the App](#how-to-install-and-setup)
- [App Features & Functionality](#app-features--functionality)
- [Featurs Still to be implemented](#featurs-still-to-be-implemented)
- [Tributes](#tributes)

## Code Used 

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

For this app the language used to build the app is JavaScript, along with the use of firebase for the `backend` and the use of `React-Native` and `Expo` to build the app. 

## Design Software used

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

`Figma` is the software I used to Design the app.
And `Asprite` is the pixel art program I used to draw the pixel art in the app.

<br>

# Prerequisite

for this project you will need

1. visualStudio Code ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
2. to install [nodeJs](https://nodejs.org/en) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
3. to have [expo](https://expo.dev) or expoGo app on your phone - download for app store or google play store ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
4. [firebase](https://firebase.google.com/) acount and a database setup ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

<br>

# How to Install and Setup

> Note [warning]
> do this if you dont want the newest temeplete that uses typscript as defualt

## Create expo app with Js template 
To create you expo app with the lastest js Template. Follow these steps.

**1st** you after installing Node.js and Vs-code you want to set up you app - (in your vs terminal)

```
npx create-expo-app@latest --template blank@sdk-50
```

then change the app name or just press enter for "app-name"

**2nd** Change your directory to current working folder

```
cd app-name
```

**3rd** You want to update the Current SDK version of expo to the most recent one

```
npm install expo@latest
```

**4th** To start your application 

```
npm start
```

this is used for the default install method

```
npx expo start
```

## Create expo app with latest expo version

This version of the app uses `TypeScript`

```
npx create-expo-app app-name
```

<br>

# App Features & Functionality 

The apps current features and functionality 

## Features 

1. Current date - for coparison to upcoming season end date 

<img src='Readme-Assets\Current Date and Time widget.png'/>

2. Basic leaderboard display - sorted by score

<img src='Readme-Assets\leaderboardWidget.png'/>

3. Showing all current users 

<img src='Readme-Assets\Compsection.png'/>

## Functionality 

### SignUp

1. Signup Functionality 

The user when signing up is created in the firebase auth aswell as in the user collection with the following data 
- username 
- email
- password
- score: defualt to zero

### Login

2. Login functionality 

using firebase auth function the app will allow authentication to the user with the matching email and password 

### **Winner Functionality** !!!

Here is a demo video for the proof of concept for the winner determination 
[Video](https://drive.google.com/file/d/1GQnOOS7VoZ87V9MY3z7ZKus-HAw1Sddp/view?usp=drive_link)

The Winnier determination function for the money competition is functional and does work however it only works in the console.log(), it doesn't display any client side visual changes yet.

### Admin Features 

these are features that are only available to the admin

1. create competitions and competition data

2. create plants and plant data 

<br>

# Featurs Still to be implemented 

1. Full Winner determination :upside_down_face:
    The score will be split into two types of scores. One, the global score and the other, the competition specific score.
    This will allow for better score management as the score is handled within the competition > enrolled > user.doc - making the score specific to the user in that competition.
    meaning that no matter the winning conditions it can be adjusted to for each competition and can then easily compare the users unique score to the competition requirment and then declair a winner

**Plan for winner determination**
- 1st get the competition target score (number)
- 2nd loop through all enrolled users in the subcollection and get all the users competition score 
- 3rd compare the users score to the target score 
- 4th if `user score` > `target score` then declare that user the winner 
- 5th show on client side who the winner is 

2. :point_right: Preloaders 

3. login and signup failed indicators and hide and show password feature.

<br>

## Project experience 

### The highlights :grin:
- Learning how to code an app for mobile using react-native
- Seeing the app live on my own phone was cool :smile:

### The Lows of the Project 
- struggeling to get the functionality with the front end and the firebase backend to work properly.
- learning all the syntax and code to use for both apps and firbase together in the time space was a bit challanging but not a problem with more time. 

<br>

# Tributes 

## Code Documentation

![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
For [Firebase](https://firebase.google.com/docs?hl=en&authuser=0&_gl=1*b7euly*_ga*NTc5MzI4MTI2LjE3MTQwMzM1Mjk.*_ga_CW55HF8NVT*MTcxODM3MTM1NS41OC4xLjE3MTgzNzE1MTkuMTkuMC4w)

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
React [Navigation](https://reactnavigation.org/docs/getting-started/)

React Native [Keyboard](https://reactnative.dev/docs/keyboard)
    Doceumentation to get the keyboard to dismiss when the user taps any where but the keyboard



## Illustration 

LeaderboardImage Illustration on the complist screen
<a href="https://www.freepik.com/search">Icon by Vectors Tank</a>

## Icons

HugeIcons
[HugeiconsLibrary](https://hugeicons.com/icons)

## Badges in readme file 

The GitHub repo where i got all the badges to display in the readme
[markdown-badges](https://github.com/Ileriayo/markdown-badges/blob/master/README.md)

## Youtube Videos

The [video](https://www.youtube.com/watch?v=s7ackFpN-GU&t=18s) I used to learn the navigation nesting 
