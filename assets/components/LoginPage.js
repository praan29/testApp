import React from 'react';
//import React from 'react';

import {Alert,
StyleSheet,
Text,
TextInput,
View,
Button,
Image,
Icon,
TouchableOpacity,
KeyboardAvoidingView,
} from 'react-native';

// import Button from 'react-native-flat-button';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

// import SignUpScreen from '../components/SignUp';

//export default class LoginPage  extends React.Component{
//class LoginPage extends Component{

//static navigationOptions={
//	header : null
//}

//render(){
//return(

export default ({ navigation }) => (
<KeyboardAvoidingView behavior='padding'>

<View style = {[styles.container,styles.buttonWraper]}>

	<View style = {styles.inputText}>
		<TextInput
			returnKeyType = "next"
			placeholder = "email / phone number"
			style = {styles.inputBox}
			placholderTextColor = "95a5a6"
			underlineColorAndroid = "transparent"
		/>
	</View>

	<View style = {styles.inputText} >
		<TextInput
			secureTextEntry
			returnKeyType = "go"
			placeholder = "password" 
			style = {styles.inputBox}
			placholderTextColor = "95a5a6"
				underlineColorAndroid = "transparent"
		/>
	</View>

	<View style={[styles.loginButtonWraper,styles.buttonLogin]}>
		<Button
			title = "Login"
			color="#27ae60"
			onPress={() =>  Alert.alert('Sign Button Clicked')}
		/>
	</View>

	<View style={[styles.signUpButtonWraper,styles.buttonSignIn]}>
		<Button
			height = "40"
			title = "SignUp"
			color = "#234876"
			onPress = {() => navigation.navigate('SignUp')}
		/>
	</View>

</View>

<TouchableOpacity>
	<Text style = {styles.btnForgetPwd}> Forget Password ? </Text>
</TouchableOpacity>

</KeyboardAvoidingView>

);
//}

//}




const styles = StyleSheet.create({

container : {
padding : 40,
},

buttonWraper : {
marginTop : 5,
},

inputText : {
height : 40,
marginTop : 8,
marginBottom : 14,
paddingVertical : 5,
paddingHorizontal : 10,
// backgroundColor : '#ffff',
},

inputBox : {
color : '#4d4d4d',
fontSize : 18,
fontFamily : 'Roboto',
borderBottomWidth : 2,
borderTopColor : '#fff',
borderRightColor : '#fff',
borderLeftColor : '#fff',
marginStart : 24,
borderBottomColor : '#ece058',
},

buttonLogin : {
	height : null,
	marginTop : 15,
	// marginBottom : 20,
	paddingVertical : 10,
},

buttonSignIn : {
	height : null,
	marginTop : 15,
	paddingVertical : 10,
},

btnIcons : {
padding : 0,
right : 7,
color : '#7f8c8d',
paddingVertical : 8,
position: 'absolute',
},

loginButtonWraper :{
	marginTop : 15,
},
loginButton: {
	width:20,
	paddingVertical : 100,
},
signUpButtonWraper:{
	marginTop : 22,
},
signInButton: {
	width: null,
	height: 400,
	borderRadius : 4,
	borderColor:'#34495e',
	backgroundColor:'#34495e',
	marginVertical: 8,
},

inputIcons :{
padding:0,
left :7,
color : '#f5821f',
paddingVertical : 12,
position: 'absolute',
},

btnCaption : {
color : '#ecf0f1',
fontSize : 16,
fontFamily : 'Roboto',
fontWeight : '300',
textAlign : 'center',
},

btnForgetPwd : {
fontSize : 16,
fontFamily : 'Roboto',
color : '#ece058',
textAlign : 'right',
paddingVertical : 10,
marginBottom : 18,
paddingHorizontal : 20,
}
});




//<FontAwesome name='unlock' size={20} style = {styles.btnIcons} />


// <TouchableOpacity style = {styles.buttonSignIn}>
// 						<FontAwesome name='sign-in' style = {styles.btnIcons} size ={20}/>
// 							<Text style = {styles.btnCaption}  title = "login"> 
// 								SIGN IN
// 							</Text>
// 					</TouchableOpacity>
