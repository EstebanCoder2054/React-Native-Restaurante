import React, { useContext, useEffect, Fragment } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { List, Avatar, Divider, Button, IconButton } from "react-native-paper";

import globalStyles from "../../css/global";

import PedidoContext from "../../context/contextPedidos/pedidosContext";
import { useNavigation } from "@react-navigation/core";

import firebase from '../../firebase';
import { log } from "react-native-reanimated";

const ResumenPedido = () => {

    const navigation = useNavigation();

  // context del pedido
  const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } = useContext(PedidoContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let totalAcum = 0;
    totalAcum = pedido.reduce((totalAcum, articulo) => totalAcum + articulo.total, 0);
    mostrarResumen(totalAcum);
} 

const progresoPedido = () => {
  Alert.alert(
    '¿Revisa tu pedido',
    'Una vez realizas tu pedido no podrás cambiarlo',
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Confirmar',
        onPress: async () => {
          //crear el objeto con toda la data que se requiere
          const pedidoObj = {
            tiempoentrega: 0,
            completado: false,
            total: Number(total),
            orden: pedido, //este es el arreglo con la data del pedido
            creado: Date.now()
          }

          // escribir el pedido de firebase
          try {
            const pedido = await firebase.db.collection('ordenes').add(pedidoObj)
            pedidoRealizado(pedido.id);
            navigation.navigate('ProgresoPedido')
          } catch (error) {
            console.log(error);
          }
        }
      }
    ]
  )
}

// elimina un producto del arreglo de pedido
const confirmarEliminacion = (id) => {
  Alert.alert(
    '¿Desea eliminar este artículo',
    'Una vez eliminado no hay marcha atrás',
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Confirmar',
        onPress: () => {
          // Eliminar del state
          eliminarProducto(id);
        }
      }
    ]
  )
}

  return (
    <View style={globalStyles.contenedor}>
      <View style={globalStyles.contenido}>
        <List.Section>
          {pedido.map((elemento, index) => {
            const {
              id,
              imagen,
              nombre,
              precio,
              cantidad
            } = elemento;
            return (
              <Fragment key={id + index}>
                <List.Item
                  right={() => <IconButton
                    icon="delete"
                    color='red'
                    size={25}
                    onPress={() => confirmarEliminacion(id)}
                  />}
                  title={nombre}
                  titleStyle={styles.titulo}
                  description={`Cantidad: ${cantidad} | Precio: ${precio} $`}
                  descriptionStyle={styles.descripcion}
                  descriptionNumberOfLines={3}
                  left={() => (
                    <Avatar.Image size={60} source={{ uri: imagen }} />
                  )}
                />
                <Divider/>
              </Fragment>
            );
          })}
        </List.Section>

        {/* <View style={{backgroundColor: '#3c366b', height: 70, justifyContent: 'center', marginTop: 50}}> */}
            <Text style={{color: '#3c366b', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 50, marginBottom: 50}}>Total a pagar: $ {total} </Text>
        {/* </View> */}

        <Button icon="arrow-left-circle" mode="contained" color="#3c366b" onPress={() => navigation.navigate('Menu')}>
            Volver al menú
        </Button>

        <Button icon="cart" mode="contained" color="green" onPress={() => progresoPedido()} style={{marginTop: 10}}>
            Realizar pedido
        </Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descripcion: {
    fontStyle: "italic",
  },
  titulo: {
    fontWeight: "bold",
    color: "#3c366b",
    fontSize: 18,
  },
});

export default ResumenPedido;
