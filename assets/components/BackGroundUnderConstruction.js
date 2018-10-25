import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
}from 'react-native';

const setBackGroundImg = require('../img/underConstruction4.png');

export default class BackGroundUnderConstruction extends React.Component{
	render(){
		return(
			<View style = {[styles.container,styles.imageWrapper]}>
				<Image
					source = { setBackGroundImg }
					style = { styles.imageSize }
				>
				</Image>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex : 1,
	},
	imageWrapper :{
		flexGrow : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	imageSize : {
		width : 180,
		height : 180,
	}
});