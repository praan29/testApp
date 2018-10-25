import React, { Component } from 'react';
import {
			Text,
			View,
			StyleSheet,
}from 'react-native';

import UnderConstruction from '../components/BackGroundUnderConstruction';

export default class RevenueChart extends React.Component{

// static navigationOptions = {
// 	title : 'DashBoard',
// 	headerLeft: <HeaderBackButton onPress={() => this.navigation.goBack(null)} />,
// 	headerTintColor:'#4d4d4d', 
// 	headerStyle: {
// 		backgroundColor: '#cccccc', // header background color
// 	},
// };

render(){
		return(
			<View style = {styles.container}>
				<UnderConstruction/>
			</View>
		);	
	}
}

const styles = StyleSheet.create({
	container:{
		flex : 1,
		backgroundColor:'#ffff',
	}
});