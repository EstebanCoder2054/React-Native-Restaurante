//NOTA: Cuando una ruta está compuesta por sub-rutas (stack navigator)
//se suele poner en vez del prop component se pone children
//en el children va la función con todo el stack configurado
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import NuevaOrden from './src/views/NuevaOrden';
import Menu from './src/views/Menu';
import FormularioPlatillo from './src/views/FormularioPlatillo';
import DetallePlatillo from './src/views/DetallePlatillo';
import ProgresoPedido from './src/views/ProgresoPedido';
import ResumenPedido from './src/views/ResumenPedido';

// importar el state de context
import FirebaseState from './context/contextFirebase/firebaseState';
import PedidoState from './context/contextPedidos/pedidosState';

// importar las views
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// componentes
import  BotonResumen from './components/ui/BotnResumen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const App = () => {
  
    return (
    <>
      <FirebaseState>
        <PedidoState>
        <StatusBar style="light" />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#ecad63',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: 'white'
                },
                headerTitleAlign: 'center'
              }}
            >
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{
                  title: 'Nueva orden'
                }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: 'Nuestro menú',
                  headerRight: props => <BotonResumen/>
                }}
              />
              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title: 'Detalle del platillo'
                }}
              />
              <Stack.Screen
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{
                  title: 'Ordenar platillo'
                }}
              />
              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{
                  title: 'Resumen del pedido'
                }}
              />
              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{
                  title: 'Progreso del pedido'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
     </>
    );
  
}

export default App;

// import Feed from "./src/feed";
// import Details from "./src/details";
// import Login from "./src/screens/Login";

// import Screen1 from "./src/screens/drawer/screen1";
// import Screen2 from "./src/screens/drawer/screen2";
// import Screen3 from "./src/screens/drawer/screen3";

// import Tab1 from "./src/screens/tabs/tab1";
// import Tab2 from "./src/screens/tabs/tab2";
// import Tab3 from "./src/screens/tabs/tab3";
  
    // createTopTabs = () => (
    //   <MaterialTopTabs.Navigator>
    //     <MaterialTopTabs.Screen
    //       name='Tab #1'
    //       component={Tab1}
    //       options={{ title: "Henlo" }}
    //     />
    //     <MaterialTopTabs.Screen name='Tab #2' component={Tab2} />
    //     <MaterialTopTabs.Screen name='Tab #3' component={Tab3} />
    //   </MaterialTopTabs.Navigator>
    // );

// createHomeStack = () => (
    //   <Stack.Navigator>
    //     <Stack.Screen name='Feed' component={Feed} />
    //     <Stack.Screen name='Details' component={Details} />
    //     <Stack.Screen name='Top Tabs' children={createTopTabs} />
    //     <Stack.Screen name='Bottom Tabs' children={createBottomTabs} />
    //   </Stack.Navigator>
    // );


 // <NavigationContainer>
      //   <Drawer.Navigator>
      //     <Drawer.Screen name='HOME #1' children={createHomeStack} />
      //     <Drawer.Screen name='Contacts #1' component={Screen1} />
      //     <Drawer.Screen name='Favourites #2' component={Screen2} />
      //     <Drawer.Screen name='Settings #3' component={Screen3} />
      //   </Drawer.Navigator>
      // </NavigationContainer>

       // createBottomTabs = () => (
    //   <MaterialBottomTabs.Navigator>
    //     <MaterialBottomTabs.Screen name='Tab #1' component={Tab1} />
    //     <MaterialBottomTabs.Screen name='Tab #2' component={Tab2} />
    //     <MaterialBottomTabs.Screen name='Tab #3' component={Tab3} />
    //   </MaterialBottomTabs.Navigator>
    // );

    
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       name='Login'
      //       component={Login}
      //       options={{ headerShown: false }}
      //     />
      //     <Stack.Screen
      //       name='Feed'
      //       component={Feed}
      //       options={{ headerShown: false }}
      //     />
      //     {/* <Stack.Screen
      //       name='Bottom Tabs'
      //       children={createBottomTabs}
      //       options={{ headerShown: false }}
      //     /> */}

      //     <Stack.Screen name='Details' component={Details} />
      //     <Stack.Screen name='Top Tabs' children={createTopTabs} />
      //   </Stack.Navigator>
      // </NavigationContainer>
