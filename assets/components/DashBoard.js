import React,{Component} from 'react';
import { 
         View,
         Text,
         StyleSheet,
         Image,
         ScrollView,
         TouchableOpacity,
       } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class DashBoard extends Component{

// static navigationOptions = {
// 	// title : 'DashBoard',
// 	headerLeft: <HeaderBackButton onPress={() => this.props.navigation.openDrawer()} />,
// 	headerTintColor:'#4d4d4d', 
// 	headerStyle: {
// 		backgroundColor: '#cccccc', // header background color
// 	},
// };

  revenueItem = () =>{
    this.props.navigation.navigate('ChartView');
    console.log("Revenue");
  }

  profitItem = () =>{
    // this.props.navigation.navigate('SignUp');
    console.log("Profit");
  }

	render(){
		return(
      <ScrollView style={styles.scrollContainer}>
				<View style = {styles.bar}>
            <View style={[styles.barItemLeft,styles.barseparator]}>
                <Text style={styles.barValueDescription}>Expences</Text>
                <Text style={styles.barValue}>10,28,456</Text>
                <View style={styles.transIcons}>
                    <Ionicons name = "ios-log-out" size = {30} color = "#4d4d4d" />
                </View>
            </View>

            <View style={styles.barItemRight}>
                <Text style={styles.barValueDescription}>PendingBills</Text>
                <Text style={styles.barValue}>1,24,123</Text>
                <View style={styles.transIcons}>
                    <Ionicons name = "ios-pause" size = {30} color = "#4d4d4d" />
                </View>
            </View>

        </View>

        <View style={styles.statusSection}>
          <Text style={styles.statusDescription}>5000 Labour Bill</Text>
          <Text style={styles.statusMsg}>Paid</Text>
        </View>

        <View style={styles.revenueSection}>
            <TouchableOpacity onPress={this.revenueItem} style={[styles.revenueItem,styles.revenueSeparator]}>
              <View >
                  <Text style={styles.barValueDescription}>Revenue</Text>
                  <Text style={styles.barValue}>10,28,456</Text>
                  <View style={styles.transIcons}>
                    <Ionicons name = "ios-trending-down" size = {30} color = "#4d4d4d" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.profitItem} style={styles.revenueItem}>
              <View >
                  <Text style={styles.barValueDescription}>Profit</Text>
                  <Text style={styles.barValue}>10,28,456</Text>
                  <View style={styles.transIcons}>
                    <Ionicons name = "ios-trending-up" size = {30} color = "#4d4d4d" />
                </View>
              </View>
            </TouchableOpacity>
        </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>

         <View style={styles.revenueSection}>
            <View style={[styles.revenueItem,styles.revenueSeparator]}>
            
            </View>
            <View style={styles.revenueItem}>

            </View>
         </View>
      </ScrollView>
            
		);
	}
}

const styles = StyleSheet.create({
  scrollContainer:{
    margin:5,
  },
  transIcons:{
    position : 'absolute',
    top:20,
    bottom:10,
    right:12,
  },
  bar:{
    borderTopColor:'#BDBDBD',
    borderTopWidth:1,
    flexDirection:'row',
    margin:3,
  },
  barItemLeft:{
    flex:1,
    padding:18,
    alignItem:'center',
    backgroundColor:'#F5F5F5',
  },
  barItemRight:{
    flex:1,
    padding:18,
    alignItem:'center',
    backgroundColor:'#F5F5F5',
  },
  barseparator:{
    borderRightWidth:2,
    borderRightColor:'#BDBDBD',
  },
  barValueDescription:{
    color:'#01579B',
    fontSize:16,
    fontWeight:'300',
    fontFamily: 'Roboto',
    letterSpacing: 1.4,
  },
  barValue:{
    color:'#004D40',
    fontSize:18,
    marginTop:10,
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
  },
  statusSection:{
    flexWrap:'wrap',
    borderTopColor:'#BDBDBD',
    borderTopWidth:1,
    backgroundColor:'#F5F5F5',
    flexDirection:'column',
    margin:3,
    padding:30,
  },
  statusDescription:{
    fontSize:16,
    color:'#4d4d4d',
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    alignContent:'flex-start',
  },
  statusMsg:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    fontSize:14,
    color:'#4d4d4d',
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    padding:8,
    top:10,
    bottom:10,
    right:10,
  },
  revenueSection:{
    flexWrap:'wrap',
    borderTopColor:'#BDBDBD',
    borderTopWidth:1,
    backgroundColor:'#F5F5F5',
    flexDirection:'row',
    margin:3,
    padding:10,
  },
  revenueItem:{
    flex:1,
    padding:18,
    alignItem:'center',
  },
  revenueSeparator:{
    borderRightWidth:1,
    borderRightHeight:'auto',
    borderRightColor:'#BDBDBD',
  },
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
