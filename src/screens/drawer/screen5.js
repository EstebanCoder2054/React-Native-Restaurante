import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';
import { Feather } from '@expo/vector-icons';

const Screen5 = ({ navigation, route }) => {

  return (
    <>
      <View style={styles.menuContainer}>
        <Feather
          name='menu'
          size={28}
          color='#FF1654'
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>Screen 5</Text>
      </View>
    </>
  );
};

export default Screen5;
