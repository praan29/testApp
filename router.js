import React from 'react';
import { Component } from 'react'		;
import { createStackNavigator,createTabNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';
import { View,Text,StyleSheet,Image,Button,ScrolView } from 'react-native';

import Micon from 'react-native-vector-icons/MaterialIcons';
import ficon from 'react-native-vector-icons/FontAwesome';

import Home from './assets/components/Home';
import SignUpScreen from './assets/components/SignUp';

import DashBoard from './assets/components/DashBoard';

export const SignUp = createStackNavigator({
	
SignUp : SignUpScreen
});


export const UserDashBoard = createStackNavigator({
	DashBoard : {
	screen : DashBoard,
		navigationOptions : {
			title : "DashBoard",
		}
	}
});

export const HomePage = createStackNavigator({
Home:{
screen : Home,
navigationOptions: {
	header : null,
	title: "Home",
//         headerRight : (
//                    <Micon name="backspace" size={25} color="#000" backgroundColor="#fff" style = {{paddingRight: 10,color: '#7f8c8d'}} />
//           ),
	}
}
});

export const rootNavigator = (userSession = false)=> {
	return createStackNavigator(
	{
		UserDashBoard:{
			screen : UserDashBoard,
			navigationOptions: {
		        header : null
		    }
		},
		HomePage:{
			screen : HomePage,
			navigationOptions: {
		        //gesturesEnabled: false
		        header : null
		    }
		}
	},
	{
		headerMode: 'none',
		mode: "modal",
		initialRouteName : userSession ? "UserDashBoard" : "HomePage"
	});
}