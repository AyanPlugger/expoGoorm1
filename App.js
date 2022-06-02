import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Cep from './components/Cep';
import api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
	async function carregaCep(){
		const response = await api.get('ws/'+inputCep+'/json/');
		setCep(response.data);
	};
	
  return (
    <View style={styles.container}>
		  
      <View styles={styles.bloco}>
		  <Text style={styles.texto}>Informe seu CEP</Text>
		  <TextInput style={styles.input}
		  placeholder="Ex.: 1174000"
		  onChangeText={(data)=>setInputCep(data)}	  
			  />
		  
		  <TouchableOpacity style={styles.botao}
			  onPress={carregaCep}
			  >
		  	<Text style={styles.textoBotao}>Buscar</Text>
		  </TouchableOpacity>
	    </View>
		  <View>
		  	<Cep data={cep}/>
		  </View>
		  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	
  texto:{
	fontSize: 20,
  },
	bloco:{
	width: "100%",
	
},
	input:{
		width: "80%",
		marginLeft: "10%",
		borderBottomWidth: 2,
		borderColor: 'gray',
		borderRadius: 6,
		
	},
	botao:{
	width: '80%',
		marginLeft: '10%',
},
	textoBotao:{
		width: '80%',
		marginLeft: '10%',
	}
		
});
