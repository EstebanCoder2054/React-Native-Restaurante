import React, {useReducer} from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebase from '../../firebase';
import _ from 'lodash';

import { OBTENER_PRODUCTOS_SUCCESS } from '../../types';

const FirebaseState = (props) => {

    //creando state inicial
    const initialState = {
        menu: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    //función para obtener los productos
    const obtenerProductos = () => {

        //consultar los productos de firebase
        firebase.db.collection('productos')
                    .where('existencia', '==', true)
                    .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot){
            let platillos = snapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            //Ordenar por cateforías con lodash
            platillos = _.sortBy(platillos, 'categoria');

            // Ya habiendo resultados en la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_SUCCESS,
                payload: platillos
            });

        }
    }

    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;
