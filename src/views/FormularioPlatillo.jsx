import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import globalStyles from '../../css/global';

import { FAB, IconButton, TextInput, Card, Divider } from 'react-native-paper';

import PedidoContext from '../../context/contextPedidos/pedidosContext';
import { useNavigation } from '@react-navigation/core';

const FormularioPlatillo = () => {
    
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(0);

    // context
    const { platillo, guardarPedido } = useContext(PedidoContext);
    const { precio } = platillo;

    // redireccionar al usuario
    const navigation = useNavigation();

    useEffect(() => {
        calcularTotal();
    }, [cantidad]);

    // calcula el total de la orden en base a la cantidad de platillos
    const calcularTotal = () => {
        const totalPagar = precio * cantidad;
        setTotal(totalPagar);
    }

    const confirmarPedido = () => {
        Alert.alert(
            '¿Desea confirmar su pedido?',
            'Una vez lo confirmes no podrá ser modificado',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                                {
                                    text: 'Confirmar',
                                    onPress: () => {
                                        //almacenar el pedido actual al pedido proncipal
                                        const pedido = {
                                            ...platillo,
                                            cantidad,
                                            total
                                        }
                
                                        guardarPedido(pedido);
                
                                        //Navegar hacia el resumen de pedidos
                                        navigation.navigate("ResumenPedido");
                                    },
                                },
            ]
        )
    }

    return (
        <View style={globalStyles.contenedor}>
            <View style={globalStyles.contenido}> 
                <Text style={globalStyles.titulo}>Ingresa la cantidad 💅</Text>
                <View style={styles.contenedorBotones}>
                    <IconButton
                        icon='minus'
                        color='#3c366b'
                        size={40}
                        onPress={() => {cantidad > 1 ? setCantidad(cantidad - 1) : null}}
                    />
                    <TextInput
                        keyboardAppearance='default'
                        keyboardType='numeric'
                        mode='outlined'
                        value={cantidad.toString()}
                        style={{fontSize: 25}}
                        onChangeText={(cantidad) => setCantidad(cantidad)}
                    />
                    <IconButton
                        icon='plus'
                        color='#3c366b'
                        size={40}
                        onPress={() => setCantidad(cantidad + 1)}
                    />
                </View>

                <Card>
                    <Card.Content>
                        <Text style={{color: '#3c366b', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10}}> 
                        Subtotal
                        </Text>
                        <Divider/>
                        <Text style={{color: '#3c366b', textAlign: 'center', fontSize: 15, fontWeight: '300', marginTop: 10}}>
                            ${' '}
                            <Text style={{color: '#ecad63', textAlign: 'center', fontSize: 30, fontWeight: 'bold', fontStyle: 'italic'}}>
                                {total}
                            </Text>
                        </Text>
                    </Card.Content>    
                </Card>

                <FAB
                    label='Agregar al pedido'
                    color='#3c366b'
                    style={styles.fab}
                    icon='cart'
                    onPress={() => confirmarPedido()}
                />

            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    contenedorBotones: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#ecad63'
    },
});

export default FormularioPlatillo;