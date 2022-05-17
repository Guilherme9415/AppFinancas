import React from "react";
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from "react-native";

import { AntDesign } from '@expo/vector-icons'


export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.touch}>
        <View style={styles.button}>
          <AntDesign name="addfolder" size={26} color="black"/>
        </View>
        <Text style={styles.Text}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch}>
        <View style={styles.button}>
          <AntDesign name="tagso" size={26} color="black"/>
        </View>
        <Text style={styles.Text}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch}>
        <View style={styles.button}>
          <AntDesign name="creditcard" size={26} color="black"/>
        </View>
        <Text style={styles.Text}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch}>
        <View style={styles.button}>
          <AntDesign name="barcode" size={26} color="black"/>
        </View>
        <Text style={styles.Text}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch}>
        <View style={styles.button}>
          <AntDesign name="setting" size={26} color="black"/>
        </View>
        <Text style={styles.Text}>Conta</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight:84,
    marginTop:18,
    marginBottom:14,
    paddingEnd:14,
    paddingStart:14
  },
  touch:{
    alignItems: 'center',
    marginRight:32,
  },
  button:{
    backgroundColor:'#ecf0f1',
    height:60,
    width:60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    marginTop:4,
    textAlign: 'center',
    fontWeight: "bold",
  }
});
