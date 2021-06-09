import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.search}>
          <Text style={{ backgroundColor: "yellow" }}>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={{ backgroundColor: "yellow" }}>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    // Fills space of parent container
    flex: 1,
    // Set top padding differently when on android devices. Extracts status bar height from react-native StatusBar so that it can be dynamic
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    // Since no flex was applied, the container will grow dynamically as content is put inside of it
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    // Fills available space within parent containter
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
