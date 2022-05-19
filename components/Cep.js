import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Cep(){
  return (
    <>
	  <Text style={styles.texto}> CEP:{props.data.cep}</Text>
	  <Text style={styles.texto}> Logradouro: </Text> 
	  <Text style={styles.texto}> Bairro: </Text> 
	  <Text style={styles.texto}> Localidade: </Text> 
	  <Text style={styles.texto}> UF: </Text> 
	</>
  );
}

const styles = StyleSheet.create({
 	texto:{
	fontSize: 20,
	marginTop: 20
  },
});
