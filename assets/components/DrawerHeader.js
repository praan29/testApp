import React , {Component} from 'react';

import { DrawerItems } from 'react-navigation';

import { View, StyleSheet, Image, Button, Text, TouchableOpacity } from 'react-native';

const companyLogo = require('../img/logo.png');

export default DrawerHeader = (props) => (

    <View style = {styles.container} >
        <TouchableOpacity onPress={() => props.navigation.navigate('DashBoardView')}>
             <View style = {styles.logowrapper}>
        
                <Image
                    style = {styles.logo}
                    source = {companyLogo}            
                />  
                <Text style = { styles.title } >ProjectZ</Text>
             </View>
          </TouchableOpacity>
       <DrawerItems  style = { styles.drawerListItems } {...props} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:24,
    },
    logowrapper:{
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : 2,
        borderBottomColor : '#4d4d4d',
    },
    title:{
        color : 'red',
        marginLeft : 5,
        fontSize : 20,
        fontFamily: 'Roboto',
        letterSpacing: 7,
    },
    logo: {
        width: 100,
        height: 100,
        padding: 30,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    drawerListItems :{
        fontSize : 16,
        fontFamily: 'Roboto',
        letterSpacing: 20,
        color:'red',
    },
});

