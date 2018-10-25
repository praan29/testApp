import React,{ Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

const Drawerbutton = require('../icons/menu2.png');

const DrawerIcon = ({navigation}) => (
	<View style = {styles.container}>
		<TouchableOpacity
			onPress ={()=>navigation.openDrawer()}
		>
			<Image
				source = { Drawerbutton }
				style = { styles.icon }
			>
			</Image>
		</TouchableOpacity>
	</View>
);


const styles = StyleSheet.create({

	container : {
		marginLeft : 2,
	},
	icon :{
		width : 54,
		height :54,
	}
});

export default DrawerIcon;