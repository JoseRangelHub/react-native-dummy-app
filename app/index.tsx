import { FontAwesome } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const obtenerSaludo = () => {
    const hora = new Date().getHours();

    if (hora < 12) {
      return "Buenos días";
    } else if (hora < 19) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

  return (
    <View style={styles.userBox}>
      <View style={styles.userBoxText}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Haptics.selectionAsync()}
        >
          <Text style={styles.text1}>{obtenerSaludo()}</Text>
          <Text style={styles.title1}>José Rangel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userBoxPhoto}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Haptics.selectionAsync()}
        >
          <View style={styles.avatar}>
            <FontAwesome name="user" size={40} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userBox: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 2,
    marginTop: 50,
  },
  userBoxText: {
    flex: 1,
    borderColor: "#ffffff",
    borderWidth: 2,
    paddingStart: 30,
  },
  userBoxPhoto: {
    flex: 1,
    borderColor: "#ffffff",
    borderWidth: 2,
    width: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingEnd: 30,
    fontSize: 28,
    fontWeight: "bold",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 16,
  },
  title1: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
