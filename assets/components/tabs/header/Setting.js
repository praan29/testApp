import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
}from 'react-native';


export default class Setting extends React.Component{
render(){
	return(
		<View style = {styles.container}>
				<Text> Project Settings </Text>
		</View>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex : 1,
}
});