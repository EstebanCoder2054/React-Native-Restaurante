import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import globalStyles from '../../css/global';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

    const navigation = useNavigation();

    return ( 
        <View style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido]}>
              <Image style={{height: 300, width: '100%'}} source={require('../../assets/crearNuevaOrden.png')}/>
              <Button icon="food-apple" color="#3c366b" mode="contained" onPress={() => navigation.navigate('Menu')}>
                Crear nueva orden
              </Button>
            </View>
        </View>
     );
}
 
export default NuevaOrden;