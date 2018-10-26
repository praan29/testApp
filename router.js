import React from 'react';
import { Component } from 'react'		;
import { Ionicons } from '@expo/vector-icons';
import { DrawerItems,
		 TouchableOpacity,
		 HeaderBackButton,
		 createStackNavigator,
		 createDrawerNavigator,
		 createBottomTabNavigator,
		 createMaterialTopTabNavigator,
	    } from 'react-navigation';

import { View,
			Text,
			StyleSheet,
			Image,
			Button,
			ScrollView,
	 } from 'react-native';


import IndexView from './assets/components/Index';
import IndexPage from './assets/components/IndexPage';
import SignUpScreen from './assets/components/SignUp';
import LoginScreen from './assets/components/LoginPage';
import DashBoard from './assets/components/DashBoard';
import DrawerHeader from './assets/components/DrawerHeader';


import Header from './assets/components/Header';

import Switch from './assets/components/tabs/header/Switch';
import AddProject from './assets/components/tabs/header/AddProject';
import UpdateProject from './assets/components/tabs/header/UpdateProject';


import HomeScreen from './assets/components/HomeScreen';
import Settings from './assets/components/Settings';
import DrawerIcon from './assets/components/DrawerIcon';
import RevenueChart from './assets/components/RevenueChart';

const ProfileIcon = require('./assets/icons/profileIcon1.png');

const createAccountTitle = 'Create Account';

export const SignUpView = createStackNavigator({
	SignUp : {
	   screen: SignUpScreen,
	   navigationOptions:( { navigation } )=> ({
	   	title : 'Create Account',
	   	header : null,
	 //    headerLeft: <HeaderBackButton onPress={() => navigation.navigate('IndexScreen')} />,
	 //    	headerStyle: {
  //       	    backgroundColor: '#27ae60',
  //       	},
  //       	headerTitleStyle: {
  //           	color: '#fff',
  //           	fontSize : 18,
		// 		fontFamily : 'Roboto',
		// 		letterSpacing: 1.4,

  //       	},
		})
	}
});


export const HomeTopTabNav = createMaterialTopTabNavigator({
	AddProject:{
		screen :AddProject,
		navigationOptions:{
			tabBarLabel : 'Add',
		}
	},
	UpdateProject:{
		screen : UpdateProject,
		navigationOptions:{
			tabBarLabel : 'Update',
		}
	},
	DashBoard :{
		screen: DashBoard,
		navigationOptions:{
			tabBarLabel : 'DashBoard',
		}
	},
	Settings:{
		screen:Settings,
		navigationOptions:{
			tabBarLabel : 'Settings',
		}
	},
	Switch:{
		screen : Switch,
		navigationOptions:{
			tabBarLabel : 'Switch',
		}
	},
	
},{
	initialRouteName : 'DashBoard',
	order : ['AddProject','UpdateProject','DashBoard','Settings','Switch'],
	shifiting : true,
	navigationOptions : ({ navigation }) =>({
		tabBarIcon:({focused,tintColor})=>{
			let iconCaption;
			const { routeName } = navigation.state;
			if (routeName === 'AddProject') {
	            iconCaption = `ios-add${focused ? '' : '-outline'}`;
	        } else if (routeName === 'UpdateProject') {
	            iconCaption = `ios-create${focused ? '' : '-outline'}`;
	        } else if (routeName === 'DashBoard') {
	            iconCaption = `ios-podium${focused ? '' : '-outline'}`;
	        } else if (routeName === 'Settings') {
	            iconCaption = `ios-cog${focused ? '' : '-outline'}`;
	        }else if (routeName === 'Switch') {
	             iconCaption = `ios-repeat${focused ? '' : '-outline'}`;
	        }
	        return <Ionicons name = {iconCaption} size = {26} color = {tintColor} />;
		}
	}),
	tabBarOptions :{
		showLabel : true,
		shifiting : true,
		activeTintColor : '#ffffff',
		inactiveTintColor : '#EDE7F6',
		style :{
			marginTop:20,
		   backgroundColor: '#00838F' // TabBar background
        },
		indicatorStyle:{
			height : 0,
		},
		showIcon:true,
		upperCaseLabel : false,
	}
});


export const HomeBottomTabNav = createBottomTabNavigator({
	HomePage:{
		screen :  HomeTopTabNav,
		// navigation options for individual tab
		navigationOptions:{
			tabBarLabel : 'Home',
		},
	},
	Settings : {
		screen : Settings,
		// navigation options for individual tab
		navigationOptions:{
			tabBarLabel : 'Estimate',
		},
	},
	SignUp : {							
		screen: SignUpScreen,
		// navigation options for individual tab
		navigationOptions:{
			tabBarLabel : 'Create',
		},
	}
},
{
	// router config
	initialRouteName : 'HomePage',
	order :['HomePage','Settings','SignUp'],
	shifiting:true,
	
	// navigation options for complete
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
        	let iconName;
        	const { routeName } = navigation.state;
	        if (routeName === 'HomePage') {
	            iconName = `ios-home${focused ? '' : '-outline'}`;
	        } else if (routeName === 'Settings') {
	          iconName = `logo-usd`;
	        }else if(routeName === 'SignUp' ){
	        	iconName = `ios-add-circle${focused ? '' : '-outline'}`;
	        }
        	return <Ionicons name = {iconName} size = {26} color = {tintColor} />;
      	},
    }),
	tabBarOptions:{
		showLabel: false,
		activeTintColor : '#ffffff',
		inactiveTintColor : 'EDE7F6',
		style: {
            backgroundColor: '#00838F' // TabBar background
        }
	},
});

export const DashBoardScreen = createStackNavigator({
	UserDashBoard : {
		screen : DashBoard,
		navigationOptions : ( { navigation } )=> ({
			title : 'User DashBoard',
			headerLeft : <DrawerIcon navigation = { navigation }/>
		})
	},
	// DrawerNavigation:{
	// 	screen : NavigationScreens,
	// }
});



// export const StackNav = createStackNavigator({
// 	DrawerIndex:{
// 		screen : NavigationScreens,
// 		navigationOptions: ( { navigation } )=> ({
// 			title : 'DashBoard',
// 			headerLeft : <DrawerIcon navigation = { navigation }/>
// 		})
// 	},
// });


export const IndexScreen = createStackNavigator({
	Home:{
		screen : IndexView,
		navigationOptions: {
		header : null,
		title: "Home",
//         headerRight : (
//                    <Micon name="backspace" size={25} color="#000" backgroundColor="#fff" style = {{paddingRight: 10,color: '#7f8c8d'}} />
//           ),
		}
	}
});

export const ChartScreen = createStackNavigator({
	DChart :{
		screen : RevenueChart,
		navigationOptions: ( { navigation } )=> ({
			title : 'Revenue Chart',

			headerStyle: { backgroundColor: '#2196f3'},
			headerTintColor: '#fff',
	 		headerLeft : <DrawerIcon navigation = { navigation }/>,
 		}),
	}
});

export const RootStackNavigator = (userSession = false)=> {
	return createStackNavigator(
		{
			IndexScreen:{
				screen : IndexScreen,
				navigationOptions: {
			        header : null
			    }
			},
			Home: {
				// screen : StackNavs
				// screen : NavigationScreens,
				screen : HomeBottomTabNav,
				navigationOptions: {
			        header : null
			    }
			},
			SignUp : {							
				screen: SignUpView,
				navigationOptions: {
			        header : null
			    }
			},
			IndexPage:{
				screen : IndexPage,
				navigationOptions: {
			        header : null
			    }
			},
			ChartView:{
				screen:ChartScreen,
			}
		},
		{
			headerMode: 'none',
			//initialRouteName : 'IndexPage'
			initialRouteName : userSession ? "Home" : "IndexScreen"
		});
}

export const SignUpStack = createStackNavigator({
	Main: {
	  screen: LoginScreen,
	},
// SignUp : {
//   screen: SignUpScreen,
// 	}
},
{
	mode: 'modal',
	headerMode: 'none',
});

const styles = StyleSheet.create({

	icon :{
		width : 24,
		height : 24,
	},

});

// drawerPosition : 'left',
// drawerWidth : 250
