import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Item, Input, Button } from "native-base";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Item last style={{ width: "70%" }}>
          <Feather name="mail" size={18} color="white" />

          <Input
            placeholder="sarim@gmail.com"
            placeholderTextColor="white"
            style={styles.txt}
          />
        </Item>
        <Item last style={{ width: "70%" }}>
          <MaterialIcons name="lock-outline" size={18} color="white" />
          <Input
            placeholder="********"
            placeholderTextColor="white"
            style={styles.txt}
          />
        </Item>
        <Item />

        <Button block style={styles.button}>
          <Text style={styles.txt}>Log In</Text>
        </Button>

        <View style={styles.content}>
          <Text  style={styles.txt}>Forgot Your Password</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
      marginTop: 10
  },
  txt: {
    color: "white"
  },
  button: {
    color: "white",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
    marginTop: 30
  }
});
