import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyShopping</Text>
      <Text style={styles.text2}>Monte sua lista de compras para te ajudar nas compras</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Recuperar senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 360,
    height: 55,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:'#f2f2f2',
    borderColor: '#f2f2f2',
    color: '#b4b4b4'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9886FC',
    
  },
  text2: {
    fontSize: 14,
    color: '#9886FC',
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonContainer: {
    marginTop: -15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#2ab76b',
    padding: 15,
    borderRadius: 5,
    width: 360,
    height: 55,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
  },
  link: {
    marginRight: 25,
    marginLeft: 25,
  },
  linkText: {
    color: '#0e0c11',
    fontWeight: 'bold',
  },
});
