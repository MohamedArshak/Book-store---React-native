import React from "react";
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, TextInput, ScrollView, Button, Alert, ImageBackground, navigation } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

const image = { uri: "https://thumbs.dreamstime.com/b/white-shaggy-blanket-texture-as-background-fluffy-fake-textile-fur-shaggy-fur-texture-102982371.jpg" };

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      
          <View style={styles.Logininput}>
              <Text style={styles.HeaderText}>
                  Email
              </Text>
              <TextInput
            placeholderTextColor={"#9B9A9A"}
              placeholder='Enter your Email'
              style={styles.TextInput}
            />
            <Text style={styles.HeaderText}>
                  User name
              </Text>
            <TextInput
            placeholderTextColor={"#9B9A9A"}
              placeholder='Enter your User name'
              style={styles.TextInput}
            />
            <Text style={styles.HeaderText}>
                  Password
              </Text>
              <TextInput
            placeholderTextColor={"#9B9A9A"}
              placeholder='Enter your Password'
              style={styles.TextInput}
            />
            <Text style={styles.HeaderText}>
                  Confirm Password
              </Text>
              <TextInput
            placeholderTextColor={"#9B9A9A"}
              placeholder='Confirm your Password'
              style={styles.TextInput}
            />
          </View>

          
          <TouchableOpacity onPress={() => navigation.navigate('Dashbord')}>
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText
              }

              >Sign in</Text>

            </View></TouchableOpacity>

            <View style={styles.creat}>
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Already have an account? SignIn"
              color="#ADA9A9"
            />


          </View>

       

        <StatusBar style="auto" />


    </SafeAreaView>


  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#191919",
   

  },
   HeaderText:{
       color:"#fff",
       fontSize: 18,
       marginBottom: 10,
       marginTop: 10
   },

  TextInput: {
    marginTop: Platform.OS === 'ios' ? 0 : 10,
    borderBottomWidth: 1,
    borderRadius: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#04454C",
    color:"#fff"

  },
  Logininput: {

    paddingLeft: 20,
    marginTop: 12
  

  },
  LoginButton: {

    marginLeft: 100,
    marginRight: 100,
    marginTop: 16,
    padding: 10,
    paddingLeft: 55,
    fontWeight: "bold",
    borderWidth: 5,
    borderColor: "#04454C",
    borderRadius: 20,
    backgroundColor: '#04454C'

  },

  LoginButtonText: {
    fontSize: 20,
    color: "#fff",


  },
  creat: {
    fontSize: 20,
    
  }
});

export default Register;
