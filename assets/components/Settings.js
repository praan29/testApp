import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
}from 'react-native';

import Header from '../components/Header';

import UnderConstruction from '../components/BackGroundUnderConstruction';

export default class Settings extends React.Component{
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
	}
});