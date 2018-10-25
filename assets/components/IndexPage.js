import React , {Component} from 'react';

import {
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
	StyleSheet,
} from 'react-native';

import { Icon,Button } from 'react-native-elements';

import Header from '../components/Header';
import Footer from '../components/Footer';
const backgroundWallpaper = require('../img/wallpaper-8.jpg');

export default class IndexPage extends React.Component{
	render(){
		return(
			// <ImageBackground
			// 	source = {backgroundWallpaper}
			// 	style = {[styles.container,styles.containerWrapper]}
			// >
				<View style={styles.container}>
					<Header/>
						<View style={styles.buttonContainer}>
							<Button
								title='Supplier'
								color= '#fff'
								fontSize = {20}
								fontFamily= 'Roboto'
								buttonStyle={[styles.buttonSupplier]}
								onPress={() =>  this.props.navigation.navigate('HomePage')} 
							/>
							<Button
								title='Buyer'
								color= '#fff'
								fontSize = {20}
								fontFamily= 'Roboto'
								buttonStyle={styles.buttonBuyer}
								onPress={() =>  this.props.navigation.navigate('HomePage')} 
							/>
						</View>
					<Footer/>
				</View>
			// </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({

	container :{
		flex : 1,
		backgroundColor:'#fff',
	},
	
	containerWrapper:{
		// height:null,
		// width:null,
	},
	
	buttonContainer:{
		flex: 1,
		alignItems:'center',
		flexDirection : 'column',
		justifyContent:'space-around',
	},

	buttonSupplier:{
		backgroundColor : '#27ae60',
		borderRadius : 20,
		alignItems : 'center',
		justifyContent:'center',
		width : 250,
		height : 55,
	},

	buttonBuyer:{
		backgroundColor : '#234876',
		borderRadius : 20,
		alignItems : 'center',
		justifyContent:'center',
		width : 250,
		height : 55,
	},

	buttonCaption:{
		color: '#fff',
		fontSize : 16,
		fontFamily: 'Roboto',
		letterSpacing: 1.2,
	},

	

});



