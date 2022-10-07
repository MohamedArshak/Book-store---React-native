//! --> import packages here
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Button, Text, View, ImageBackground, SafeAreaView, ScrollView, Alert, Image, TouchableHighlight } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Platform } from "react-native-web";

function BookImage() { }

const Dashbord = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>

      {/*Headr Section*/}

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

      {/*Book Section*/}

      <ScrollView>
        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>

          <Text style={styles.BookText}> Books </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Books')}>
            <Text style={{ color: "#9E9997", alignSelf: "flex-start", textDecorationLine: "underline", paddingTop: 15, fontSize: 18 }}>See more</Text>

          </TouchableOpacity>
        </View>

        {/*Book Section*/}

        <ScrollView style={{ flex: 1, marginBottom: -10, borderBottomWidth: 0.5, borderBottomColor: "#444444" }} horizontal={true}>

          <View style={{ flex: 1, marginTop: 5 }}>

            <View style={{ paddingHorizontal: 20, flexDirection: "row", marginLeft: 10 }}>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => navigation.navigate("BookDetails")}>
                <Image
                  source={require('../assets/book3.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12 }}
                /></TouchableOpacity>

              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => navigation.navigate("BookDetails")}>
                <Image
                  source={require('../assets/book4.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => navigation.navigate("BookDetails")}>
                <Image
                  source={require('../assets/book2.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => navigation.navigate("BookDetails")}>
                <Image
                  source={require('../assets/book5.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: "row", }}>
              
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Harry Potter
                </Text>
                <Text style={styles.BookAuthor}>
                  C. S. Lewis
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />

              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Invisible Man
                </Text>
                <Text style={styles.BookAuthor}>
                  Ralph Ellison
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              <View style={{ marginLeft: 12, marginBottom: 5 }}>
                <Text style={styles.BookTitle}>
                  The Last Battle
                </Text>
                <Text style={styles.BookAuthor}>
                  C. S. Lewis
                </Text>
              </View>
              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Mrs Dalloway
                </Text>
                <Text style={styles.BookAuthor}>
                  Virginia Woolf
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
            </View>

          </View>
        </ScrollView>

        {/*The Leatest*/}

        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>

          <Text style={styles.BookText}> The Leatest </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Books')}>
            <Text style={{ color: "#9E9997", alignSelf: "flex-start", textDecorationLine: "underline", paddingTop: 15, fontSize: 18 }}>See more</Text>

          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, marginBottom: -10, borderBottomWidth: 0.5, borderBottomColor: "#444444" }} horizontal={true}>

          <View style={{ flex: 1, marginTop: 5 }}>

            <View style={{ paddingHorizontal: 20, flexDirection: "row", marginLeft: 10 }}>

              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book2.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book4.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book5.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book3.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12 }}
                /></TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: "row", }}>
              <View style={{ marginLeft: 12, marginBottom: 5 }}>
                <Text style={styles.BookTitle}>
                  The Last Battle
                </Text>
                <Text style={styles.BookAuthor}>
                  C. S. Lewis
                </Text>
              </View>
              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Invisible Man
                </Text>
                <Text style={styles.BookAuthor}>
                  Ralph Ellison
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Mrs Dalloway
                </Text>
                <Text style={styles.BookAuthor}>
                  Virginia Woolf
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Harry Potter
                </Text>
                <Text style={styles.BookAuthor}>
                  C. S. Lewis
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />

            </View>
            

          </View>
        </ScrollView>

        {/*Best Sellers*/}

        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>

          <Text style={styles.BookText}> Best Sellers </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Books')}>
            <Text style={{ color: "#9E9997", alignSelf: "flex-start", textDecorationLine: "underline", paddingTop: 15, fontSize: 18 }}>See more</Text>

          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, marginBottom: -10, borderBottomWidth: 0.5, borderBottomColor: "#444444" }} horizontal={true}>

          <View style={{ flex: 1, marginTop: 5 }}>

            <View style={{ paddingHorizontal: 20, flexDirection: "row", marginLeft: 10 }}>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book3.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book2.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book4.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginTop: 10, marginLeft: Platform.OS === 'ios' ? 0 : 0 }}
                onPress={() => Alert.alert("pressed")}>
                <Image
                  source={require('../assets/book5.png')}
                  resizeMode="cover"
                  style={{ width: 150, height: 220, borderRadius: 12, marginLeft: 10 }}
                /></TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: "row", }}>
              <View style={{ marginLeft: 12, marginBottom: 5 }}>
                <Text style={styles.BookTitle}>
                  The Last Battle
                </Text>
                <Text style={styles.BookAuthor}>
                  C. S. Lewis
                </Text>
              </View>
              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Harry Potter
                </Text>
                <Text style={styles.BookAuthor}>
                  C. S. Lewis
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />

              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Invisible Man
                </Text>
                <Text style={styles.BookAuthor}>
                  Ralph Ellison
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.BookTitle}>
                  Mrs Dalloway
                </Text>
                <Text style={styles.BookAuthor}>
                  Virginia Woolf
                </Text>
              </View>

              <Image
                source={require('../assets/save-icon.png')}
                resizeMode="cover"
                style={{ width: 25, height: 33, borderRadius: 12, marginLeft: 20 }}
              />
            </View>

          </View>
        </ScrollView>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",


  },
  Header: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#2A2B2B"

  },

  HeaderText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  BookText: {

    color: "#98A0A0",
    fontSize: 30,
    fontWeight: "bold",
  },

  FooterText: {
    color: "#9E9997",
    fontSize: 20,
    fontWeight: "bold",

  },

  BookTitle: {
    color: "#9E9997",
    fontSize: 16,
    fontWeight: "bold",
  },
  BookAuthor: {
    color: "#9E9997",
    fontSize: 14,

  }


});

export default Dashbord;
