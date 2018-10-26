import React,{ Component } from 'react';
import { 
View,
Text,
TextInput,
ScrollView,
TouchableOpacity,
KeyboardAvoidingView,
StyleSheet 
} from 'react-native';

import {Button} from 'react-native-elements';
import { Icon } from 'react-native-elements';

import { HeaderBackButton,Badge,NavigationActions } from 'react-navigation';
import RadioGroup from 'react-native-radio-buttons-group';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class SignUp extends React.Component{

// static navigationOptions  = {
// 	headerTitle: 'SignUp for free',
// 	headerLeft: <HeaderBackButton onPress={() => this.props.navigation.navigate(null)} />,
// 	headerTintColor:'#4d4d4d', 
// 	headerStyle: {
// 		backgroundColor: '#cccccc', // header background color
// 	},
// 	};

	constructor(props){
		super(props);
		this.state = {
			firstName:"",
			lastName:"",
			emailAddress:"",
			phoneNumber:"",
			password:"",
			passwordConfirm:"",
		};
	}

	radio_props = {
		data:[
			{
				label : 'Male',
				value : 'm',
				layout : 'row',
			},
			{
				label : 'Female',
				value : 'f',
				layout : 'row',
			},
	   ],
	};

onPress = data => this.setState({ data });

onSignupPress = () =>{
	this.props.navigation.navigate('HomePage');
}

onBackToLoginPress= () => {
	this.props.navigation.navigate('HomePage');
}

render(){
return(

<View style = {styles.container}>
	<View style={styles.headerContainer}>
		<Text style={styles.headerTitle}>Create Account</Text>
	</View>

<ScrollView style = {styles.scrollContainer}>

	<KeyboardAvoidingView behavior = 'padding'>

		<View style = {styles.textInputWrapper} >
			<TextInput
				value={this.state.firstName}
				onChangeText={(text)=>	{this.setState({firstName:text})}}
				returnKeyType = "next"
				style ={styles.textInput}
				placeholder = "first name"
				placeholderTextColor = "#234876"
				underlineColorAndroid = "transparent"
			/>
		</View>

		<View style = {styles.textInputWrapper} >
			<TextInput
				value={this.state.lastName}
				onChangeText={(text)=>{this.setState({lastName:text})}}
				returnKeyType = "next"
				style ={styles.textInput}
				placeholder="last name"
				placeholderTextColor = "#234876"
				underlineColorAndroid = "transparent"
			/>
		</View>

		<View style = {styles.genderButtons} >
			<Text style={styles.labelGender}>Gender</Text>
			<RadioGroup radioButtons={this.radio_props.data} onPress={this.onPress} flexDirection='row' />
		</View>

		<View style = {styles.textInputWrapper} >
			<TextInput
				value={this.state.emailAddress}
				onChangeText={(text)=>{this.setState({emailAddress:text})}}
				returnKeyType = "next"
				style ={styles.textInput}
				placeholder = "email-address"
				placeholderTextColor = "#234876"
				underlineColorAndroid = "transparent"
			/>
		</View>

		<View style = {styles.textInputWrapper} >
			<TextInput
				value={this.state.phoneNumber}
				onChangeText={(text)=>{this.setState({phoneNumber:text})}}
				returnKeyType = "next"
				style ={styles.textInput}
				placeholder = "phone-number"
				placeholderTextColor = "#234876"
				underlineColorAndroid = "transparent"
			/>
		</View>

		<View style = {styles.textInputWrapper} >
			<TextInput
				value={this.state.passwordConfirm}
				onChangeText={(text)=>{this.setState(passwordConfirm:text)}}
				secureTextEntry
				returnKeyType = "next"
				style ={styles.textInput}
				placeholder = "password"
				placeholderTextColor = "#234876"
				underlineColorAndroid = "transparent"
			/>
		</View>

		<View style = {styles.textInputWrapper} >
			<TextInput
				id="idCPassword"
				name="cPassword"
				secureTextEntry
				returnKeyType = "next"
				style ={styles.textInput}
				placeholder = "confirm-password"
				placeholderTextColor = "#234876"
				underlineColorAndroid = "transparent"
			/>
		</View>
		
</KeyboardAvoidingView>
</ScrollView>

	<View>

			<Button
				title='+'
				color= '#fff'
				fontSize = {24}
				fontFamily= 'Roboto'
				buttonStyle={styles.createButton}
				onPress={this.onSignupPress} 
			/>

			<Button
				title='x'
				color= '#fff'
				fontSize = {24}
				fontFamily= 'Roboto'
				buttonStyle={styles.cancelButton}
				onPress={this.onBackToLoginPress} 
			/>

	</View>
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
container :{
	flexGrow: 1,
	backgroundColor : '#ffff',
},
scrollContainer:{
	flex : 1,
	margin:10,	
},
headerContainer :{
	marginTop : 23,
	padding : 25,
	alignItems : 'center',
	backgroundColor : '#0D47A1',
	justifyContent : 'space-around',
	// borderBottomWidth : 10,
	// borderBottomColor : '#ddd',
},
labelGender:{
	fontSize : 18,
	fontFamily: 'Roboto',
	letterSpacing: 0.8,
	marginStart : 34,
	flexDirection:'row',
},
headerTitle :{
	color : '#fff',
	fontSize:18,
	alignItems:'center',
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
	backgroundColor : '#0D47A1',
	justifyContent : 'space-around',
},
footerText:{
	color:'#fff',
},
buttonWrapper :{
	flex : 2,
	flexDirection: 'column',
	justifyContent : 'space-around',
	// alignItems: 'center',
	// justifyContent: 'center',
	// width : '40%',
	// height : 40,
	// marginTop : 25,
	// flexDirection: 'row',
	// paddingVertical : 10
},
genderButtons:{
	flex : 1,
	alignContent : 'flex-start',
},
createButton:{
	zIndex : 11,
	right : 4,
	bottom : 149,
	width : 70,
	height : 70,
	elevation : 8,
	borderRadius : 50,
	position : 'absolute',
	alignItems : 'center',
	justifyContent:'center',
	backgroundColor : '#01579B',
},
cancelButton:{
	zIndex : 11,
	right : 4,
	bottom : 72,
	width : 70,
	height : 70,
	elevation : 8,
	borderRadius : 50,
	position : 'absolute',
	alignItems : 'center',
	justifyContent:'center',
	backgroundColor : '#FF6347',
},
textInputWrapper:{
	height : 40,
	marginTop : 8,
	marginBottom : 14,
	paddingVertical : 5,
	paddingHorizontal : 10,
},
textInput:{
// color : '#4d4d4d',
	fontSize : 20,
	width:315,
	fontFamily: 'Roboto',
	letterSpacing: 0.8,
	marginStart : 24,
	borderBottomWidth : 2,
	borderTopColor : '#fff',
	borderRightColor : '#fff',
	borderLeftColor : '#fff',	
	borderBottomColor : '#4d4d4d',
},

});



// <TouchableOpacity onPress={() => this.props.navigation.navigate('UserDashBoard')} style = {styles.createButton} >
// 	<Text style={styles.createButtonText}>+</Text>
// </TouchableOpacity>

// <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')} style = {styles.cancelButton}>
// 	<Text style={styles.cancelButtonText}>x</Text>
// </TouchableOpacity>


// createButtonText:{
// 	color : '#fff',
// 	fontSize:24,
// },
// cancelButtonText:{
// 	color : '#fff',
// 	fontSize:24,
// },

// <View style = {styles.headerContainer}>
// 		 	<Text style={styles.headerTitle}>SignUp for free</Text>
// 		 </View>