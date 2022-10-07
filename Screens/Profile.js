import React from "react";
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, TextInput, ScrollView, Button, Alert, ImageBackground, navigation } from "react-native";


const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.Header}>
        <View style={{
          flexDirection: "row",
          justifyContent: "flex-start"
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
           <Image
            source={require('../assets/userlogo.png')}
            resizeMode="cover"
            style={{ width: 80, height: 80, borderRadius: 12, marginBottom: 10, marginLeft: 20 }}
          /></TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.HeaderText}> Good Morning</Text>
            <Text style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",

            }} > User Name </Text>
          </View></View></View>

        </SafeAreaView>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#191919",
  
  
    },
    Header: {
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#2A2B2B",
  
    },

    HeaderText: {
      color: "#fff",
      fontSize: 25,
      fontWeight: "bold",
      }
})

export default Profile;