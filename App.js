import React,{ Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./Nav/Draw";

export default class App extends Component{
  render() {
    return(
      <NavigationContainer>
        <DrawerNav/>
      </NavigationContainer>
    )
  }
}