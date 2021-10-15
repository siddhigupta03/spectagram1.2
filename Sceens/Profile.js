import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Story extends Component{
    render() {
        return(
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../assets/profile_img.png')} style={{width:50, height:50}}/>
                <Text style={{fontSize:20}}>Profile</Text>
            </View>
        )
    }
}