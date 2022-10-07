import React from "react";
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, TextInput, ScrollView, Button, Alert, ImageBackground, navigation } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

const image = { uri: "https://thumbs.dreamstime.com/b/white-shaggy-blanket-texture-as-background-fluffy-fake-textile-fur-shaggy-fur-texture-102982371.jpg" };

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>


        <View style={styles.Header}>
          <Text style={styles.HeaderText}>

          </Text>
          <Image style={styles.Logo}
            source={require('../assets/Logo.png')} />

        </View>
        <View style={styles.LoginDislay}>
          <View style={styles.Logininput}>
            <TextInput
              placeholder='Enter your Email'
              style={styles.TextInput}
            />
            <View style={styles.icon}>

            </View>


            <TextInput
              placeholder='Enter your Password '
              secureTextEntry="True"
              style={styles.TextInput}
            />
            <View style={styles.icon}>
              <Feather
                name="eye-off"
                color="#FA7500"
                size={15}
                flexDirection="row"

              />
            </View>
          </View>


          <View style={styles.FooterText}>
            <Text
              onPress={() => Alert.alert('Simple Button pressed')}>
              Forgot Password?
            </Text>
                </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Dashbord')}>
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText
              }

              >Sign in</Text>

            </View></TouchableOpacity>
          <View style={styles.creat}>
            <Button
              onPress={() => navigation.navigate('Register')}
              title="Don't have an account? SignUp"
              color="#EE5603"
            />


          </View>

        <StatusBar style="auto" />

      </ImageBackground>
    </SafeAreaView>


  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  Header: {
    flex: 1,
    alignItems: 'center'

  },

  TextInput: {
    marginTop: Platform.OS === 'ios' ? 0 : 30,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 30,
    paddingBottom: 10,

  },
  Logininput: {
    marginTop: 20,
    padding: 20,
    marginBottom: 20

  },
  LoginButton: {
    marginTop: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 30,
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
  
  icon: {
    flexDirection: 'row',
    marginTop: -25,
    marginLeft: 300,
    borderBottomColor: '#032C33',
    paddingBottom: 5,


  },
  FooterText: {
    marginLeft: 250,
    marginBottom: 40,
    marginTop:-20

  },
  Logo: {
    width: 200,
    height: 150,
    marginTop: 40
  },

  creat: {
    fontSize: 20,
    marginBottom: 80
  }
});

export default Login;
