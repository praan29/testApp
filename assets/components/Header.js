import React,{Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
}from 'react-native';

export default class Header extends React.Component{
	render(){
		return(
			<View style={[styles.container]}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>ABC</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container :{
		flex : 1,
		backgroundColor:'#fff',
	},
	
	headerContainer :{
		marginTop : 23,
		padding : 25,
		alignItems : 'center',
		backgroundColor : '#00BCD4',
		justifyContent : 'space-around',
		// borderBottomWidth : 10,
		// borderBottomColor : '#ddd',
	},

	header :{
		color : '#fff',
		fontSize:18,
		alignItems:'center',
	},

});