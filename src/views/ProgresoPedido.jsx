import React, {useContext, useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import globalStyles from '../../css/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/contextPedidos/pedidosContext';
import firebase from '../../firebase';
import Countdown from 'react-countdown';

const ProgresoPedido = () => {

    const { idpedido } = useContext(PedidoContext);

    const [tiempo, setTiempo] = useState(0);
    const [completado, setCompletado] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const obtenerProducto = () => {
            firebase.db.collection('ordenes')
                        .doc(idpedido)
                        .onSnapshot(function(doc){
                            setTiempo(doc.data().tiempoentrega);
                            setCompletado(doc.data().completado);
                        })
        }
        obtenerProducto();
    }, []);

    // muestra el countdowwn en la pantalla
    const renderer = ({minutes, seconds}) => {
        return (
            <Text style={styles.tiempo}>
                {minutes} : {seconds}
            </Text>
        )
    }

    return ( 
        <View style={globalStyles.contenedor}>
            <View style={globalStyles.contenido}>
                {tiempo === 0 && (
                    <>
                        <Image source={require('../../assets/esperarOrden.png')} style={{height: 300, width: '100%'}}/>
                        <View style={{backgroundColor: '#3c366b'}}>
                            <Text style={{textAlign: 'center', marginVertical: 10, color: 'white', fontSize: 20, fontWeight: '700'}}>¡Hemos recibido tu pedido!</Text>
                        </View>
                        
                        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 20}}>Estamos calculando el tiempo estimado de entrega. 🕓</Text>
                    </>
                )}

                {!completado && tiempo > 0 && (
                    <>
                        <Image source={require('../../assets/countdown.png')} style={{height: 300, width: '100%'}}/>
                        <View style={{backgroundColor: '#3c366b'}}>
                            <Text style={{textAlign: 'center', marginVertical: 10, color: 'white', fontSize: 20, fontWeight: '700'}}>TIEMPO ESTIMADO DE ENTREGA</Text>
                        </View>
                        <Text style={{textAlign: 'center', color:'#3c366b'}}>
                            <Countdown
                                date={Date.now() + tiempo * 60000}
                                renderer={renderer}
                            />
                        <Text style={{fontSize: 50}}>🕓</Text>
                        </Text>
                    </>
                )}

                {completado && (
                    <>
                        <Image source={require('../../assets/ordenLista.png')} style={{height: 300, width: '100%'}}/>
                        <View style={{backgroundColor: '#3c366b'}}>
                            <Text style={{textAlign: 'center', marginVertical: 10, color: 'white', fontSize: 20, fontWeight: '700'}}>💃 ¡TU ORDEN ESTÁ LISTA! 💃</Text>
                        </View>
                        <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>Ya puedes pasar a recojerla. 🍕</Text>
                        <Button icon='plus-circle' mode='outlined' color='green' style={{marginTop: 50}} onPress={() => navigation.navigate('NuevaOrden')}>
                            Comenzar una nueva orden
                        </Button>
                    </>
                )}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    tiempo: {
        marginBottom: 20,
        fontSize: 60,
        textAlign: 'center',
        marginTop: 30
    }
});

export default ProgresoPedido;