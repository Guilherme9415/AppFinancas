import React from "react";
import { StyleSheet, Text, View, StatusBar,FlatList } from "react-native";

import Header from "../components/Header";
import Balance from "../components/Balance";
import List from "../components/List";
import Actions from "../components/Actions";

const list = [
  {
    id: 1,
    name: "Boleto conta luz",
    value: "300,00",
    date: "12/09/2022",
    type: 0,
  },
  { id: 2, name: "Pix", value: "3.000,00", date: "10/09/2022", type: 1 },
  { id: 3, name: "Salário", value: "5.000,00", date: "06/09/2022", type: 1 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header name="Guilherme Henrique" />
      <Balance saldo="10.000,00" gastos="-500,00" />
      <Actions/>
      <Text style={styles.text}>Últimas movimentações</Text>

      <FlatList
       style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <List data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f4",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 14,
    marginLeft: 14,
    marginVertical: 14,
  },
  list:{
    marginEnd: 14,
    marginStart:14
  }
});
