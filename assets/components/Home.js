import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,ImageBackground} from 'react-native';

import {createStackNavigator} from 'react-navigation'

import LoginScreen from '../components/LoginPage';


const orgLogo = require('../img/logo.png');
const wallpaper = require('../img/cons-7.jpeg');


export default class Home extends Component{
render(){
		return(
			<ImageBackground
				source = { wallpaper }
				style = { [ styles.wallpaperHeightWidth,styles.container ] }
			>
			<View style = {styles.logoWrapper}>
				<Image
					source = {orgLogo}
					style = {styles.logoSize}
				>
				</Image>
			</View>

			<LoginScreen navigation = {this.props.navigation}/>
			
			</ImageBackground>
		);
	}
}

// const AppStackNavigator = createStackNavigator({
// 	Login : LoginScreen,
// 	SignUp : SignUpScreen
// });



const styles = StyleSheet.create({

container : {
flex:1,
},

wallpaperHeightWidth : {
height:null,
width:null,
},

logoWrapper : {
flexGrow : 1,
alignItems : 'center',
justifyContent : 'center',
},

logoSize : {
width : 100,
height : 100,
}

});







// import React from 'react';
// import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

// import LoginPage from './assets/templates/login/LoginPage'

// const logo = require('./assets/img/logo.png');
// const indexWallpaper = require('./assets/img/cons-7.jpeg');

// export default class App extends React.Component {
//   render() {
//         return (

//             <ImageBackground
//               source = {indexWallpaper}
//               style = {[styles.wallpaper,styles.wallpaperContainer]}
//             >

//               <View style = {styles.logoWrapper}>
//                   <Image
//                   source = {logo}
//                   style = {styles.logo}
//                   >
//                   </Image>
//               </View>

//               <LoginPage/>

//             </ImageBackground>
//         );
//   }
// }

// const styles = StyleSheet.create({

//   wallpaperContainer : {
//     flex:1,
//   },

//   wallpaper : {
//     height:null,
//     width:null,
//   },

//   logoWrapper : {
//     flexGrow : 3,
//     alignItems : 'center',
//     justifyContent : 'center',
//   },

//   logo : {
//     width : 100,
//       height : 100,
//   }

// });
