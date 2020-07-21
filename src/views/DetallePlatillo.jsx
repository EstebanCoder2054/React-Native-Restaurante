import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../../css/global';
import { Card, Avatar, FAB, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import PedidoContext from '../../context/contextPedidos/pedidosContext';

const DetallePlatillo = () => {
    
    //Pedido context
    const { platillo }  = useContext(PedidoContext);
    const { nombre, imagen, descripcion, precio } = platillo;
    
    const navigation = useNavigation();

    return ( 
        <View style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, {marginTop: 20}]}>
                <Card elevation={10}>
                    <Card.Title title={nombre.toUpperCase()} left={ (props) => <Avatar.Icon color='#ecad63' style={{backgroundColor: '#3c366b'}} {...props} icon="food-apple" /> } />
                    <Card.Cover style={globalStyles.imagenDetalle} source={{ uri: imagen }} />
                    <Card.Content>
                        <Paragraph style={styles.descripcion}>{descripcion}</Paragraph>
                        <Text style={styles.priceText}>
                            {precio}
                            <Text style={styles.priceSign}>
                                {' '}$
                            </Text>
                        </Text>
                    </Card.Content>
                </Card>

                <FAB
                    label='Ordenar'
                    color='#3c366b'
                    style={styles.fab}
                    icon='cart'
                    onPress={() => navigation.navigate('FormularioPlatillo')}
                />
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    priceText: {
        fontSize: 20,
        color: 'orange',
        fontStyle: 'italic', 
        fontWeight: 'bold'
    },
    priceSign: {
        color: 'green'
    },
    descripcion: {
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: "200",
        marginTop: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#ecad63'
      },
});

export default DetallePlatillo;