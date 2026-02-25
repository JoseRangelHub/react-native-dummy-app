import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
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

      <View style={styles.searchBox}>
        <View style={styles.searchBoxInput}>
          <Ionicons name="search" size={30} color="#999" />

          <TextInput
            placeholder="Buscar café..."
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  userBox: {
    flexDirection: "row",
    marginTop: 50,
  },
  userBoxText: {
    flex: 1,
    paddingStart: 30,
  },
  userBoxPhoto: {
    flex: 1,
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
    borderColor: "#d9d9d9",
    backgroundColor: "#d9d9d9",
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
  searchBox: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    paddingHorizontal: 10,
    height: 80,
  },
  searchBoxInput: {
    flexDirection: "row",
    marginLeft: 16,
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    height: 60,
    width: 260,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 3,
    fontSize: 18,
    color: "black",
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: "#6F4E37",
    height: 60,
    width: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
