import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Nav/TabNav'
import Profile from '../Sceens/Profile'

const Drawer = createDrawerNavigator()

const drawerNav = () => {
return <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Profile' component={Profile}/>
    </Drawer.Navigator>
}

export default drawerNav;