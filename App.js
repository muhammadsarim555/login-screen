import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./screens/Login/login";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                "https://pngimage.net/wp-content/uploads/2018/06/png-logo-1.png"
            }}
            style={styles.img}
          />
        </View>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    marginTop: "15%"
  },

  img: {
    width: 100,
    height: 100
  }
});
