import React,{Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
}from 'react-native';

export default class HomeScreenHeader extends React.Component{
	render(){
		return(
			<View style={[styles.container]}>
				<View style={styles.headerWrapper}>
					<Text style={styles.header}> Hello World</Text>
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
	headerWrapper :{
		marginTop : 23,
		padding : 25,
		alignItems : 'center',
		backgroundColor : '#00BCD4',
		justifyContent : 'space-around',
		// borderBottomWidth : 10,
		// borderBottomColor : '#ddd',
	},
	header :{
		fontSize:18,
		color : '#4d4d4d',
		alignItems:'center',
		fontFamily : 'Roboto',
		letterSpacing: 1.2,
		fontWeight:'300',
	},

});