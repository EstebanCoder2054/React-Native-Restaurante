import React, { useContext, useEffect, Fragment, useState } from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import globalStyles from '../../css/global';
import { List, Avatar, ActivityIndicator } from 'react-native-paper';

import FirebaseContext from '../../context/contextFirebase/firebaseContext';
import PedidoContext from '../../context/contextPedidos/pedidosContext';

import { useNavigation } from '@react-navigation/native';
import { log } from 'react-native-reanimated';

const Menu = () => {

    // context de firebase
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    // context de pedido
    const { seleccionarPlatillo } = useContext(PedidoContext);

    // Hook para redireccionar
    const navigation = useNavigation();

    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const mostrarHeading = (categoria, index) => {
        
            if(index > 0){
                const categoriaAnterior = menu[index - 1].categoria;
                if(categoriaAnterior !== categoria){
                    return(
                        <List.Subheader style={styles.separador}>{categoria.toUpperCase()} 🍊</List.Subheader>
                    )
                }
            }else{
                return(
                    <List.Subheader style={styles.separadorInicial}>{categoria.toUpperCase()} 🍊</List.Subheader>
                )
            }
    }

    return ( 
        <ScrollView>
            {menu.length > 0 ? (<View style={[globalStyles.contenedor, {marginTop: -8}]}>
                <View style={{backgroundColor: '#FFF'}}>
                    <List.Section>
                        {menu.map(( platillo, index ) => {
                            const { id, imagen, nombre, descripcion, categoria, precio } = platillo;
                            return(
                                <Fragment key={id}>
                                    {mostrarHeading(categoria, index)}
                                    <List.Item
                                        onPress={() => {
                                            // eliminar propiedades que no serán necesarias
                                            const { existencia, ...platillo2 } = platillo; 
                                            seleccionarPlatillo(platillo2);
                                            navigation.navigate('DetallePlatillo');
                                        }}
                                        title={nombre}
                                        titleStyle={styles.titulo}
                                        style={styles.itemSeparador}
                                        description={descripcion}
                                        descriptionStyle={styles.descripcion}
                                        descriptionNumberOfLines={3}
                                        left={() => <Avatar.Image size={60} source={{uri: imagen}} />}
                                    />
                                </Fragment>
                            )
                        })}
                    </List.Section>
                </View>
            </View>) : (  <ActivityIndicator style={{marginTop: 300}} animating={true} color='#3c366b' size='large' />)}
            
        </ScrollView>
    );
}
 
const styles = StyleSheet.create({
    separadorInicial: {
        backgroundColor: '#3c366b',
        color: 'white'
    },
    separador: {
        backgroundColor: '#3c366b',
        color: 'white',
        marginTop: -18
    }, 
    itemSeparador: {
        marginVertical: 20,
        borderBottomColor: '#D7D7D7',
        borderBottomWidth: 2
    },
    priceText: {
        marginHorizontal: 75,
        fontSize: 20,
        color: 'orange',
        fontStyle: 'italic', 
        marginBottom: -28,
        fontWeight: 'bold'
    },
    priceSign: {
        color: 'green'
    },
    descripcion: {
        fontStyle: 'italic'
    },
    titulo: {
        fontWeight: 'bold',
        color: '#3c366b',
        fontSize: 18
    }
});

export default Menu;