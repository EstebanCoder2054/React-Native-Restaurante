import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/contextPedidos/pedidosContext';

const BotonResumen = () => {

    const navigation = useNavigation();

    const { pedido } = useContext(PedidoContext);

    if(pedido.length === 0) return null;

    return ( 
        <Button icon="food-apple" mode="contained" color="#3c366b" onPress={() => navigation.navigate('ResumenPedido')}>
            Pedido
        </Button>
     );
}
 
export default BotonResumen;