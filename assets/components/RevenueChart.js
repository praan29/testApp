import React, { Component } from 'react';
import {
			Text,
			View,
			StyleSheet,
}from 'react-native';

import PureChart from 'react-native-pure-chart';
import UnderConstruction from '../components/BackGroundUnderConstruction';

export default class RevenueChart extends React.Component{

// static navigationOptions = {
// 	title : 'DashBoard',
// 	headerLeft: <HeaderBackButton onPress={() => this.navigation.goBack(null)} />,
// 	headerTintColor:'#4d4d4d', 
// 	headerStyle: {
// 		backgroundColor: '#cccccc', // header background color
// 	},
// };

render(){

	const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
    let sampleData = [
    {
      value: 50,
      label: 'Marketing'
     
    }, {
      value: 40,
      label: 'Sales'
     
    }, {
      value: 25,
      label: 'Support'
     
    }, {
      value: 25,
      label: 'Support'
     
    }, {
      value: 25,
      label: 'Support'
     
    }

  ]
		return(
			<View style = {styles.container}>
				<Text style={styles.title}>Total Revenue</Text>
				<View style={styles.chartSection}>
          			<PureChart data={sampleData} radius={100} type='pie' />
          		</View>
			</View>
		);	
	}
}

const styles = StyleSheet.create({
  container:{
	flex : 1,
	backgroundColor:'#ffff',
  },
  title: {
  	justifyContent:'flex-start',
    margin: 10,
    fontSize: 24,
    fontWeigth:'300',
    fontFamily: 'Roboto',
	letterSpacing: 0.8,
  },
  chartSection:{
  	marginLeft : 20,
  	marginVertical:20,
  },
  
});