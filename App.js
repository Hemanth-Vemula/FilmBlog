import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Login from "./app/login";
import styles from "./app/styles";
import GetFilms from "./app/getFilms";

export default function App() {
  const { width, height } = Dimensions.get("window");
  //return <Login />;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height }}>
            <Login />
          </View>
          <View style={{ width, height }}>
            <View style={{ margin: 40 }}>
              <GetFilms />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
