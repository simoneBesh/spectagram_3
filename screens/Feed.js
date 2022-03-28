import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, Platform, StatusBar, ScrollView} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Postcard from './postcard';
import { FlatList } from "react-native-gesture-handler";

let posts = require("./temp_posts.json");

export default class Feed extends Component{

  renderItem = ({ item: story }) => {
    return <Postcard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ScrollView>
          <View style={styles.appTitle}>
            <View style={styles.appLogo}>
            <Image style={styles.logo} source={require('../assets/logo.png')}> </Image>
            </View>
            <View style={styles.appTitleTextContainer}>
            <Text style={styles.text}> Speactagram </Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
            />
          </View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCDDFFBB"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    margin: 25
  },
  appLogo: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 60,
    height: 60,
    //resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center'
  },
  text: {
    fontFamily: "Avenir", 
    fontSize: RFValue(28), 
    //alignItems: 'center', 
    //textAlign: 'center'
  },
  

});