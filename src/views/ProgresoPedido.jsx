import React, {useContext, useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {} from 'react-native-paper';
import globalStyles from '../../css/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/contextPedidos/pedidosContext';

const ProgresoPedido = () => {

    const { idpedido } = useContext(PedidoContext);

    return ( 
        <View>
            <Text> {idpedido} </Text>
        </View>
     );
}
 
export default ProgresoPedido;