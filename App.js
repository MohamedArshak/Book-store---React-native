import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//! --> import screens here
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import BookDetails from "./Screens/BookDetails";
import Dashbord from "./Screens/Dashbord";


import Books from "./Screens/Books";

//! --> create instance of instance of StackNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator initialRouteName="Login"
        screenOptions={{

          
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
          tabBarStyle: { position: "absolute", left: 8, right: 8, bottom: 8, elevation: 0, borderRadius: 20, height: 62, borderRadius:14, backgroundColor: "#000", tabBarActiveBackgroundColor: "#5C5A5A"  },

        }}>
        <Tab.Screen name="Login" component={Login} options={{ tabBarButton: () => null,
           tabBarVisible: false,
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-arrow-right" color="#fff" size={30} />
          ),
        }} />
        <Tab.Screen name="Dashbord" component={Dashbord} options={{
          headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", headerTitleStyle: { fontSize: 20, fontWeight: "bold" }, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color="#fff" size={30} />
          ),
        }} />
        <Tab.Screen name="Books" component={Books} options={{ headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color="#fff" size={30} />
          ),
        }} />
        <Tab.Screen name="BookDetails" component={BookDetails} options={{ headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color="#fff" size={30} />
          ),
        }} />
        
         <Tab.Screen name="Register" component={Register} options={{tabBarButton: () => null,
           tabBarVisible: false,  headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff", headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" color="#fff" size={30} />
          ),
        }} />
        
       
      </Tab.Navigator>
      
      


    </NavigationContainer>


  );
}