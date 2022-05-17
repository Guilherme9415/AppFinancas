import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MotiView} from 'moti';

export default function Balance({ gastos, saldo}) {
  return (
    <MotiView 
    style={styles.container}
    from={{
      rotateX:'-100deg',
      opacity: 0,
    }}
    animate={{
      rotateX:'0deg',
      opacity: 1,
    }}
    transition={{
      type: "timing",
      delay:300,
      duration: 800,
    }}
    
    
    >
      <View style={styles.item}>
        <Text style={styles.text}>Saldo</Text>

        <View style={styles.content}>
          <Text style={styles.textMoney}>R$</Text>
          <Text style={styles.textMoneys}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Gastos</Text>

        <View style={styles.content}>
          <Text style={styles.textMoney}>R$</Text>
          <Text style={[styles.textMoneys, { color: "#e74c3c" }]}>
            {gastos}
          </Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -28,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 7,
    paddingBottom: 22,
    paddingTop: 22,
    zIndex: 99,
  },
  text: {
    fontSize: 20,
    color: "#c4c4c4",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMoney: {
    fontWeight: "bold",
    marginRight: 6,
    color: "#dadada",
  },
  textMoneys: {
    fontSize: 21,
    color: "#2ecc71",
    fontWeight: "500",
  },
});
