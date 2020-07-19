import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles/styles';

import Screen1 from '../src/screens/drawer/screen1';
import Screen2 from '../src/screens/drawer/screen2';
import Screen3 from '../src/screens/drawer/screen3';
import Screen4 from '../src/screens/drawer/screen4';
import Screen5 from '../src/screens/drawer/screen5';


import DrawerContent from '../src/screens/drawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Feed = ({ navigation, route }) => {
  const { email } = route.params;
  const { password } = route.params;

  const loginUserInfo = {
    email,
    password,
  };

  return (
    <>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name='Contacts #1'
          component={Screen1}
          initialParams={{ loginUserInfo: loginUserInfo }}
        />
        <Drawer.Screen name='Favourites #2' component={Screen2} />
        <Drawer.Screen name='Settings #3' component={Screen3} />
        <Drawer.Screen name='Page #4' component={Screen4} />
        <Drawer.Screen name='Page #5' component={Screen5} />

      </Drawer.Navigator>
    </>
  );
};

export default Feed;
