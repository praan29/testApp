import React,{Component} from 'react';
import { 
         View,
         Text,
         StyleSheet,
         Image,
         ScrollView,
         TouchableOpacity,
       } from 'react-native';


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
            <View style={[styles.barItem,styles.barseparator]}>
                <Text style={styles.barTop}>Expences</Text>
                <Text style={styles.barBottom}>10,28,456</Text>
            </View>

            <View style={styles.barItem}>
                <Text style={styles.barTop}>PendingBills</Text>
                <Text style={styles.barBottom}>1,24,123</Text>
            </View>

        </View>

        <View style={styles.statusSection}>
          <Text style={styles.statusDescription}>5000 Labour Bill</Text>
          <Text style={styles.statusMsg}>Paid</Text>
        </View>

        <View style={styles.revenueSection}>
            <TouchableOpacity onPress={this.revenueItem} style={[styles.revenueItem,styles.revenueSeparator]}>
              <View >
                  <Text style={styles.barTop}>Revenue</Text>
                  <Text style={styles.barBottom}>10,28,456</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.profitItem} style={styles.revenueItem}>
              <View >
                  <Text style={styles.barTop}>Profit</Text>
                  <Text style={styles.barBottom}>10,28,456</Text>
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
  bar:{
    borderTopColor:'#fff',
    borderTopWidth:4,
    backgroundColor:'#D81B60',
    flexDirection:'row',
    margin:3,
  },
  barItem:{
    flex:1,
    padding:18,
    alignItem:'center',
  },
  barseparator:{
    borderRightWidth:2,
    borderRightColor:'#ffff',
  },
  barTop:{
    color:'#fff',
    fontSize:16,
    fontWeight:'300',
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
  },
  barBottom:{
    color:'#004D40',
    fontSize:18,
    marginTop:10,
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
  },
  statusSection:{
    flexWrap:'wrap',
    borderTopColor:'#fff',
    borderTopWidth:4,
    backgroundColor:'#D81B60',
    flexDirection:'column',
    margin:3,
    padding:30,
  },
  statusDescription:{
    fontSize:16,
    color:'#ffff',
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    alignContent:'flex-start',
  },
  statusMsg:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    fontSize:14,
    color:'#ffff',
    fontFamily: 'Roboto',
    letterSpacing: 1.2,
    padding:8,
    top:10,
    bottom:10,
    right:10,
  },
  revenueSection:{
    flexWrap:'wrap',
    borderTopColor:'#fff',
    borderTopWidth:4,
    backgroundColor:'#D81B60',
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
    borderRightWidth:2,
    borderRightHeight:'auto',
    borderRightColor:'#ffff',
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
