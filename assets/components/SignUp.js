import React,{ Component } from 'react';
import { 
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet 
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class SignUp extends React.Component{

	static navigationOptions = {
    headerTitle: '<LogoTitle />',
    headerLeft: (
      icon: 'menu', color: '#fff'
    ),
  };
	render(){
		return(
			
			<ScrollView>

				<View style = {styles.container}>

					<KeyboardAvoidingView behavior = 'padding'>

						<View style = {styles.textInputWrapper} >
							<TextInput
								returnKeyType = "next"
								style ={styles.textInput}
								placeholder = "first name"
								placeholderTextColor = "#234876"
								underlineColorAndroid = "transparent"
							/>
						</View>

						<View style = {styles.textInputWrapper} >
							<TextInput
								returnKeyType = "next"
								style ={styles.textInput}
								placeholder="last name"
								placeholderTextColor = "#234876"
								underlineColorAndroid = "transparent"
							/>
						</View>

						<View style = {styles.textInputWrapper} >
							<TextInput
								returnKeyType = "next"
								style ={styles.textInput}
								placeholder = "email-address"
								placeholderTextColor = "#234876"
								underlineColorAndroid = "transparent"
							/>
						</View>

						<View style = {styles.textInputWrapper} >
							<TextInput
								returnKeyType = "next"
								style ={styles.textInput}
								placeholder = "phone-number"
								placeholderTextColor = "#234876"
								underlineColorAndroid = "transparent"
							/>
						</View>

						<View style = {styles.textInputWrapper} >
							<TextInput
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
								secureTextEntry
								returnKeyType = "next"
								style ={styles.textInput}
								placeholder = "confirm-password"
								placeholderTextColor = "#234876"
								underlineColorAndroid = "transparent"
							/>
						</View>



						<View style = {styles.buttonWrapper}>
							<Button
								title = "Create"
								color = "#841584"
								width = {50}
								onPress = {()=> {}}
							/>

							<Button
								title = "Cancel"
								color = "#FF6347"
								onPress = {()=> {}}
							/>
						</View>
			
					</KeyboardAvoidingView>
			
				</View>
			
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	container :{
		flex: 1,
        backgroundColor : '#cccccc',
	},
	buttonWrapper :{
		flex : 1,
		flexDirection: 'row',
		// alignItems: 'center',
        // justifyContent: 'center',
		// width : '40%',
		// height : 40,
		// marginTop : 25,
		// flexDirection: 'row',
		paddingVertical : 10,
	   justifyContent: 'space-evenly'
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
		fontFamily: 'Roboto',
		letterSpacing: 0.8,
		marginStart : 24,
		borderBottomWidth : 2,
		borderTopColor : '#fff',
		borderRightColor : '#fff',
		borderLeftColor : '#fff',	
		borderBottomColor : '#4d4d4d',
	}
});