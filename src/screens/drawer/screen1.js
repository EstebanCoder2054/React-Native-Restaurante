// import React from 'react';
// import { View, Text } from 'react-native';
// import { styles } from '../../styles/styles';
// import { Feather } from '@expo/vector-icons';

// const Screen1 = ({ navigation, route, loginUserInfo }) => {
//   const { email } = route.params.loginUserInfo;
//   const { password } = route.params.loginUserInfo;

//   console.log('email en screen1 ', email);
//   console.log('password en screen1 ', password);

//   return (

//   );
// };

// export default Screen1;

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Tab1 from "../../screens/tabs/tab1";
import Tab2 from "../../screens/tabs/tab2";
import Tab3 from "../../screens/tabs/tab3";

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const screen1 = () => {
  return (
    <MaterialBottomTabs.Navigator
      initialRouteName='bottomTab1'
      activeColor='#FF1654'
      inactiveColor='#FFA0B1'
      style={{ backgroundColor: "#000" }}
      barStyle={{ backgroundColor: "#D9D9D9", padding: 4 }}
    >
      <MaterialBottomTabs.Screen
        name='bottomTab1'
        component={Tab1}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={28} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name='bottomTab2'
        component={Tab2}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='basketball' color={color} size={28} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name='bottomTab3'
        component={Tab3}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={28} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
};

export default screen1;
