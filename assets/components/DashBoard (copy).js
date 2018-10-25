import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,} from 'react-native';
import {HeaderBackButton} from 'react-navigation';

// import { SuperGridSectionList} from 'react-native-super-grid';
import GridView from 'react-native-super-grid';


const image1 = require('../icons/openBook1.png');
const image2 = require('../icons/openBook1.png');
const image3 = require('../icons/openBook1.png');
const image4 = require('../icons/openBook1.png');
const image5 = require('../icons/openBook1.png');
const image6 = require('../icons/openBook1.png');
const image7 = require('../icons/openBook1.png');
const image8 = require('../icons/openBook1.png');
const image9 = require('../icons/openBook1.png');
const image10 = require('../icons/openBook1.png');
const image11 = require('../icons/openBook1.png');
const image12 = require('../icons/openBook1.png');

export default class DashBoard extends Component{

static navigationOptions = {
	// title : 'DashBoard',
	headerLeft: <HeaderBackButton onPress={() => this.props.navigation.openDrawer()} />,
	headerTintColor:'#4d4d4d', 
	headerStyle: {
		backgroundColor: '#cccccc', // header background color
	},
};

	render(){

		const items = [
      		// { name: image1, code: '#1abc9c', }, { name: image2, code: '#2ecc71' },
      		// { name: image3, code: '#1abc9c', }, { name: image4, code: '#2ecc71' },
      		// { name: image5, code: '#1abc9c', }, { name: image6, code: '#2ecc71' },
      		// { name: image7, code: '#1abc9c', }, { name: image8, code: '#2ecc71' },
      		// { name: image9, code: '#1abc9c', }, { name: image10, code: '#2ecc71' },
      		// { name: image11, code: '#1abc9c', }, { name: image12, code: '#2ecc71' },
      		
      		{ name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      		{ name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      		{ name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      		{ name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      		{ name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      		{ name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      		{ name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      		{ name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      		{ name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];

		return(
				<GridView
        			itemDimension={130}
        			items={items}
        			style={styles.gridView}
			        renderItem = { item => (
			        	
                // <View style = {styles.itemsWrapper}>
                // <Image
                //     source = { item.name }
                //     style = {styles.icons}
                //   >
                //   </Image>
                // </View>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCode}>{item.code}</Text>
                </View>

	        		)}
      			/>
		);
	}
}

const styles = StyleSheet.create({
  itemsWrapper:{
     flexGrow : 1,
     marginLeft : 20,
     justifyContent : 'center',
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  icons:{
  	width : 110,
  	height : 110,
  }
});


// <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//  	<Text style={styles.itemName}>{item.name}</Text>
//  	<Text style={styles.itemCode}>{item.code}</Text>
// </View>


// CREATING IMAGE GRID

//<View style = {styles.itemsWrapper}>
//	 <Image
//	   source = { item.name }
//	   style = {styles.icons}
//   >
//   </Image>
//</View>


