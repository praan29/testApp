import React,{ Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Drawerbutton = require('../icons/headerBackButton3.png');

const DrawerIcon = ({navigation}) => (
	<View style = {styles.container}>
		<TouchableOpacity
			onPress ={()=>navigation.navigate('HomePage')}
		>
			<Ionicons name = 'ios-arrow-back' size = {26} color = '#000000' style={styles.icon} />
		</TouchableOpacity>
	</View>
);


const styles = StyleSheet.create({

	container : {
		// marginLeft : 2,
	},
	icon :{
		height :40,
		marginTop : 15,
		marginLeft:20,
	}
});

export default DrawerIcon;