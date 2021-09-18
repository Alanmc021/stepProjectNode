import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function App() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")
  const [cep, setCep] = useState("")

  function sendEmail() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`https://us-central1-testedgb01.cloudfunctions.net/sendAffiliationAccepted?nome=${nome}&email=${email}&idade=${idade}&cep=${cep}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      alert('Msg enviada')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Nome"
      />
       <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
      />
       <TextInput
        style={styles.input}
        onChangeText={setIdade}
        value={idade}
        placeholder="Idade"
      />
       <TextInput
        style={styles.input}
        onChangeText={setCep}
        value={cep}
        placeholder="Cep"
      />
      <TouchableOpacity onPress={sendEmail}>
        <Text style={styles.textButton} >Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginVertical:18
  },
  textButton:{
    fontSize:16,
    color:'red'
  }
});

export default App