import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
}from 'react-native';

import fire from '../fireconnection/fire';

import HomeScreenHeader from '../components/HomeScreenHeader';
import Footer from '../components/Footer';
import UnderConstruction from '../components/BackGroundUnderConstruction';


export default class HomeScreen extends React.Component{

	constructor(){
		super();
		// this.itemsRef = this.getRef().child();
	}

	// getRef(){

	// 	return firebaseApp.database().ref();
	// }

	//componentWillMount(){
		// this.getItems(this.itemsRef);
		// console.log("componentWillMount : "+this.itemsRef);
		
		// var config = {
  //   		apiKey: "AIzaSyCFvSis1YpHp-pl84G6hcrXNubORXoXrc0",
  //   		authDomain: "projectz-33768.firebaseapp.com",
  //  			databaseURL: "https://projectz-33768.firebaseio.com",
  //   		projectId: "projectz-33768",
  //   		storageBucket: "projectz-33768.appspot.com",
  //   		messagingSenderId: "878300631832"
  // 		};

  		// firebase.initializeApp(firebaseApp);
  			//console.log(firebase);

  			// Insert new record
		  		// 	firebase.database().ref('user/007').set(
			  	// 		{
			  	// 			name : "Murali",
			  	// 			age : 27,
			  	// 		}
			  	// 	).then(() => {
		  		// 		console.log("Record Created");
		  		// 	}).catch((error) => {
						// console.log("Insert execption : "+error);
		  		// 	});

		  	// Updating record
		  		// firebase.database().ref('user/007').update(
		  		// 	{
		  		// 		name : "Bala Murali",
		  		// 	}
		  		// ).then(()=>{
		  		// 	console.log("Record updated successfully");
		  		// }).catch((error)=>{
		  		// 	console.log("Update execption : "+error);
		  		// });

		  	// Deleting record
		  		// firebase.database().ref('user/007/name').remove().then(()=>{  // for removing particular field from database
		  		
		  		// firebase.database().ref('user/007').remove().then(()=>{			 // this is to remove entire record from database
		  		// 	console.log('Record deleted successfully');
		  		// }).catch((error)=>{
		  		// 	console.log("Delete execption : "+error);
		  		// });

  			// Get all records from database
  			
  			// setTimeout(()=> {
  			// 	fire.database().ref('user').on('value',(data) => {
  			// 		console.log(data.toJSON());
  			// 	});
  			// },5000);

	//}

	// componentDidMount(){
	// 	this.getItems(this.itemsRef);
	// 	console.log("componentDidMount : "+this.itemsRef);
	// }

	// getItems(itemsRef){
	// 	itemsRef.on('value',(snap) => {
	// 		let items = [];
	// 		snap.forEach((child)=>{
	// 			items.push({
	// 				title : child.val().ItemOne,
	// 			});
	// 		});
	// 		console.log("Items : "+items);
	// 	});
	// }

	render(){
		return(
			<View style = {styles.container}>
				<HomeScreenHeader/>
				<Text> Profile</Text>
			</View>
		);
	}
}

const styles =StyleSheet.create({
	container:{
		flex :1,
	},
	textSize:{
		color: '#fff',
		fontSize : 16,
		fontFamily: 'Roboto',
		letterSpacing: 1.2,
	},
});