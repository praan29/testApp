import React,{Component} from 'react';
import{
	View,
	Text,
	StyleSheet,
}from 'react-native';


export default class Footer extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.footerContainer}>
					<View style={styles.footer}>
						<Text style={styles.footerText}>2018 © ABC. All rights reserved.</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex : 1,
		backgroundColor:'#fff',
	},

	footerContainer:{
		position : 'absolute',
		bottom:0,
		left:0,
		right:0,
		zIndex:10,
	},

	footer :{
		// marginTop : 23,
		padding : 25,
		alignItems : 'center',
		// borderTopWidth : 10,
		// borderTopColor : '#ddd',
		backgroundColor : '#00BCD4',
		justifyContent : 'space-around',
	},

	footerText:{
		color:'#fff',
	},

});