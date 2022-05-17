import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function List({ data }) {
  const [value, setValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setValue(!value)}>
      <Text style={styles.textMoney}> {data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.contentf}> {data.name}</Text>
        {value ? (
          <Text style={data.type === 1 ? styles.textMoneys : styles.new}>
            {" "}
            {data.type === 1 ? `   R$ ${data.value}` : `   R$ - ${data.value}`}
          </Text>
        ) : (
          <View
            style={{
              marginTop: 6,
              width: 80,
              height: 10,
              backgroundColor: "#c4c4c4",
              borderRadius: 10,
            }}
          ></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 0.5,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 2,
  },
  textMoney: {
    color: "#c4c4c4",
    fontWeight: "bold",
  },
  contentf: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textMoneys: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2ecc71",
  },
  new: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#e74c3c",
  },
});
