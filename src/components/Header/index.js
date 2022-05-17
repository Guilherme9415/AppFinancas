import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiText, MotiView } from "moti";

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300,
        }}
        style={styles.content}
      >
        <MotiText
          style={styles.user}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800,
          }}
        >
          {name}
        </MotiText>

        <TouchableOpacity activeOpacity={0.9} style={styles.button}>
          <Feather name="user" size={27} color="white" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5a189a",
    paddingTop: statusBar,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 50,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: "#7b2cbf",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
});
