import React from "react";
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, TextInput, ScrollView, Button, Alert, ImageBackground, navigation } from "react-native";


const BookDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView  >

                <View style={{ flex: 2, backgroundColor: "#2D2D2D", marginLeft: 20, marginRight: 20 }}>
                    <View >
                        <View style={{ marginLeft: 20, marginRight: 20, alignItems: "center", justifyContent: "center", }}>
                            <Image
                                source={require('../assets/book2.png')}
                                resizeMode="cover"
                                style={{ width: 200, height: 320, borderRadius: 8, marginTop: 20 }}
                            />

                            <Text style={styles.Title}>
                                The Last Battle
                            </Text>
                            <Text style={{ color: "#C9C9C9", fontSize: 20, }}>
                            C. S. Lewis
                            </Text>


                            <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20, alignItems: "center" }}>

                                <TouchableOpacity>
                                    <View style={{ borderRadius: 8, backgroundColor: "#615E5E" }}>
                                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", paddingLeft: 50, paddingRight: 50, paddingBottom: 8, paddingTop: 8 }}>
                                            Read Book
                                        </Text>
                                    </View></TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{ marginLeft: 5 }}>
                                        <Image 
                                        source={require('../assets/save-icon.png')}
                                        style={{ color: "#fff", width: 30, height: 30}}>
                                            
                                        </Image>
                                    </View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: "#191919", marginLeft: 20, marginRight: 20 }}>

                    <Text style={styles.DesTitle}>
                        Description
                    </Text>
                    <Text style={styles.DesText}>
                    The Last Battle is a high fantasy novel for children by C. S. Lewis, published by The Bodley Head in 1956. It was the seventh and final novel in The Chronicles of Narnia (1950–1956). Like the other novels in the series, it was illustrated by Pauline Baynes and her work has been retained in many later editions
                    </Text>



                </View>

                {/*2nd book*/}

                <View style={{ flex: 2, backgroundColor: "#2D2D2D", marginLeft: 20, marginRight: 20 }}>
                    <View >
                        <View style={{ marginLeft: 20, marginRight: 20, alignItems: "center", justifyContent: "center", }}>
                            <Image
                                source={require('../assets/book3.png')}
                                resizeMode="cover"
                                style={{ width: 200, height: 320, borderRadius: 8, marginTop: 20 }}
                            />

                            <Text style={styles.Title}>
                            Harry Potter
                            </Text>
                            <Text style={{ color: "#C9C9C9", fontSize: 20, }}>
                            J. K. Rowling
                            </Text>


                            <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20, alignItems: "center" }}>

                                <TouchableOpacity>
                                    <View style={{ borderRadius: 8, backgroundColor: "#615E5E" }}>
                                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", paddingLeft: 50, paddingRight: 50, paddingBottom: 8, paddingTop: 8 }}>
                                            Read Book
                                        </Text>
                                    </View></TouchableOpacity>

                                    <TouchableOpacity>
                                    <View style={{ marginLeft: 5 }}>
                                        <Image 
                                        source={require('../assets/save-icon.png')}
                                        style={{ color: "#fff", width: 30, height: 30}}>
                                            
                                        </Image>
                                    </View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: "#191919", marginLeft: 20, marginRight: 20 }}>

                    <Text style={styles.DesTitle}>
                        Description
                    </Text>
                    <Text style={styles.DesText}>
                    The Last Battle is a high fantasy novel for children by C. S. Lewis, published by The Bodley Head in 1956. It was the seventh and final novel in The Chronicles of Narnia (1950–1956). Like the other novels in the series, it was illustrated by Pauline Baynes and her work has been retained in many later editions
                    </Text>



                </View>

                <View style={{ flex: 2, backgroundColor: "#2D2D2D", marginLeft: 20, marginRight: 20 }}>
                    <View >
                        <View style={{ marginLeft: 20, marginRight: 20, alignItems: "center", justifyContent: "center", }}>
                            <Image
                                source={require('../assets/book4.png')}
                                resizeMode="cover"
                                style={{ width: 200, height: 320, borderRadius: 8, marginTop: 20 }}
                            />

                            <Text style={styles.Title}>
                            Invisible Man 
                            </Text>
                            <Text style={{ color: "#C9C9C9", fontSize: 20, }}>
                            Ralph Ellison
                            </Text>


                            <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20, alignItems: "center" }}>

                                <TouchableOpacity>
                                    <View style={{ borderRadius: 8, backgroundColor: "#615E5E" }}>
                                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", paddingLeft: 50, paddingRight: 50, paddingBottom: 8, paddingTop: 8 }}>
                                            Read Book
                                        </Text>
                                    </View></TouchableOpacity>

                                    <TouchableOpacity>
                                    <View style={{ marginLeft: 5 }}>
                                        <Image 
                                        source={require('../assets/save-icon.png')}
                                        style={{ color: "#fff", width: 30, height: 30}}>
                                            
                                        </Image>
                                    </View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: "#191919", marginLeft: 20, marginRight: 20 }}>

                    <Text style={styles.DesTitle}>
                        Description
                    </Text>
                    <Text style={styles.DesText}>
                    The Last Battle is a high fantasy novel for children by C. S. Lewis, published by The Bodley Head in 1956. It was the seventh and final novel in The Chronicles of Narnia (1950–1956). Like the other novels in the series, it was illustrated by Pauline Baynes and her work has been retained in many later editions
                    </Text>



                </View>


            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#191919"

    },

    Title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10
    },

    DesTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },

    DesText: {
        color: "#fff",
        fontSize: 16,
        marginTop: 10
    },

});


export default BookDetails;