import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../../css/global';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

    const navigation = useNavigation();

    return ( 
        <View style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, styles.contenido]}>
              <Button icon="baseball" color="#3c366b" mode="contained" onPress={() => navigation.navigate('Menu')}>
                Crear nueva orden
              </Button>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
});
 
export default NuevaOrden;