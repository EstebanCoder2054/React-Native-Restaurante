import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1
    },
    boton: {
        backgroundColor: '#3c366b',
    },
    botonTexto: {
        fontWeight: 'bold',
        color: '#000'
    },
    titulo: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30
    },
    imagenDetalle: {
        height: 300,
        width: '100%'
    }
});

export default globalStyles;