import React, { Component, Fragment } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles/styles';

import Screen1 from './screens/drawer/screen1';
import Screen2 from './screens/drawer/screen2';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class Details extends Component {
  render() {
    console.log('estos son los props en detail screen: ', this.props);
    return (
      <Fragment>
        <Drawer.Navigator>
          <Drawer.Screen name='Contacts #1' component={Screen1} />
          <Drawer.Screen name='Favourites #2' component={Screen2} />
        </Drawer.Navigator>

        <View style={styles.center}>
          <Text style={styles.title}>Detail Screen</Text>
          <Button
            title='View Top tabs'
            onPress={() => {
              this.props.navigation.navigate('Top Tabs');
            }}
          />

          <Button
            title='View Bottom tabs'
            onPress={() => {
              this.props.navigation.navigate('Bottom Tabs');
            }}
          />
        </View>
      </Fragment>
    );
  }
}
